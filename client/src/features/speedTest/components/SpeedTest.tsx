import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Keyboard from 'react-simple-keyboard';
import type { RootState} from '../../../store/store';
import { useAppDispatch } from '../../../store/store';
import Text from './Text';
import { loadtext, start, stop, tryChar } from '../speedTestSlice';
import 'react-simple-keyboard/build/css/index.css';
import layout from 'simple-keyboard-layouts/build/layouts/russian';

function SpeedTest(): JSX.Element {
  const dispatch = useAppDispatch();
  const text = useSelector((store: RootState) => store.speedTest.text);
  const index = useSelector((store: RootState) => store.speedTest.index);
  const timeStart = useSelector((store: RootState) => store.speedTest.timeStart);
  const timeFinish = useSelector((store: RootState) => store.speedTest.timeFinish);
  const speed = useSelector((store: RootState) => {
    const { index, timeFinish, timeStart } = store.speedTest;
    if (!timeFinish || !timeStart) {
      return null;
    }
    const delta = (timeFinish - timeStart) / 1000 / 60;
    return Math.floor((index + 1) / delta);
  });
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (timeStart && !timeFinish) {
        dispatch(tryChar(e.key));
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [timeFinish, timeStart]);
  useEffect(() => {
    void dispatch(loadtext());
  }, []);
  return (
    <div>
      {!timeStart && (
        <button type="button" onClick={() => void dispatch(start())}>
          Начать
        </button>
      )}
      {timeStart && !timeFinish && (
        <button type="button" onClick={() => void dispatch(stop())}>
          Закончить
        </button>
      )}{' '}
      <button type="button" onClick={() => void dispatch(loadtext())}>
        Сгенирировать новый текст
      </button>
      <Text />
      {speed && <span>Символов в минуту : {speed}</span>}
      <Keyboard
        physicalKeyboardHighlightBgColor="#0ff"
        physicalKeyboardHighlight
        {...layout}
      />
    </div>
  );
}
export default SpeedTest;

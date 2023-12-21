import React, { CSSProperties, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Keyboard from 'react-simple-keyboard';
import type { RootState } from '../../../store/store';
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
  const buttonStyles = {
    padding: '16px 24px',
    border: '1px solid #333',
    fontSize: '16px',
    background: 'white',
    borderRadius: '8px',
  } satisfies CSSProperties;
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
      {(!timeStart || (timeFinish && timeStart)) && (
        <button style={buttonStyles} type="button" onClick={() => void dispatch(start())}>
          Начать
        </button>
      )}
      {timeStart && !timeFinish && (
        <button style={buttonStyles} type="button" onClick={() => void dispatch(stop())}>
          Закончить
        </button>
      )}{' '}
      <button style={buttonStyles} type="button" onClick={() => void dispatch(loadtext())}>
        Сгенирировать новый текст
      </button>
      <Text />
      {speed && (
        <span
          style={{
            marginBottom: 16,
            fontSize: 24,
            display: 'inline-block',
            padding: 16,
            border: '3px solid #00bfff',
            borderRadius: 4,
          }}
        >
          Символов в минуту : {speed} 🎉
        </span>
      )}
      <Keyboard physicalKeyboardHighlightBgColor="#0ff" physicalKeyboardHighlight {...layout} />
    </div>
  );
}
export default SpeedTest;

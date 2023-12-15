import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import Text from './Text';

function SpeedTest(): JSX.Element {
  const text = useSelector((store: RootState) => store.speedTest.text);
  const index = useSelector((store: RootState) => store.speedTest.index);
  const timeStart = useSelector((store: RootState) => store.speedTest.timeStart);
  const timeFinish = useSelector((store: RootState) => store.speedTest.timeFinish);
  return (
    <Text></Text>
    
  )
}
export default SpeedTest;
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

function Text(): JSX.Element {
  const text = useSelector((store: RootState) => store.speedTest.text);
  const index = useSelector((store: RootState) => store.speedTest.index);
  return (
    <div>
      {text.split('').map((c, i) => {
        if (i === index) {
          if (c === ' ') {
            return <b key={i}>_</b>;
          }
          return <b key={i}>{c}</b>;
        }
        return c;
      })}
    </div>
  );
}
export default Text;

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

function Text(): JSX.Element {
  const text = useSelector((store: RootState) => store.speedTest.text);
  const index = useSelector((store: RootState) => store.speedTest.index);
  const style = {
    padding: 12,
    marginBottom: 24,
    fontSize: '24px',
    lineHeight: 1.5,
  };
  const activeStyle = {
    color: '#00bfff',
    fontSize: '28px',
  };
  return (
    <div style={style}>
      {text.split('').map((c, i) => {
        if (i === index) {
          if (c === ' ') {
            return (
              <b style={activeStyle} key={i}>
                _
              </b>
            );
          }
          return (
            <b style={activeStyle} key={i}>
              {c}
            </b>
          );
        }
        return c;
      })}
    </div>
  );
}
export default Text;

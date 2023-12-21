import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../../../store/store';
import { changeKeycapFilter } from '../konsructorSlice';

function KeycapsFilter(): JSX.Element {
  const products = useSelector((store: RootState) => store.product.products ?? []);
  const keycapsFilter = useSelector((store: RootState) => store.konsructor.keycapFilter);
  const dispatch = useAppDispatch();
  const colors = products.reduce((acc, p) => {
    if (p.meta?.colorKeycape && !acc.includes(p.meta?.colorKeycape)) {
      acc.push(p.meta.colorKeycape);
    }
    return acc;
  }, [] as string[]);

  return (
    <div style={{ fontSize: '25px', fontFamily: 'IBM Plex Mono' }}>
      Цвет:
      <select
        onChange={(e) =>
          dispatch(changeKeycapFilter({ name: 'colorKeycape', value: e.target.value }))
        }
        value={keycapsFilter.colorKeycape ?? ''}
        name="colorKeycape"
      >
        <option value="">Выберите цвет</option>
        {colors.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
}

export default KeycapsFilter;

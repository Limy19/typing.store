import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../../../store/store';
import { changeKeycapFilter } from '../konsructorSlice';

function KeycapsFilter(): JSX.Element {
  const products = useSelector((store: RootState) => store.product.products ?? []);
  const keycapsFilter = useSelector((store: RootState) => store.konsructor.keycapFilter);
  const dispatch = useAppDispatch();
  const colors = products.reduce((acc, p) => {
    if (p.meta?.color && !acc.includes(p.meta?.color)) {
      acc.push(p.meta.color);
    }
    return acc;
  }, [] as string[]);

  return (
    <div>
      Цвет:
      <select
        onChange={(e) => dispatch(changeKeycapFilter({ name: 'color', value: e.target.value }))}
        value={keycapsFilter.color ?? ''}
        name="color"
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

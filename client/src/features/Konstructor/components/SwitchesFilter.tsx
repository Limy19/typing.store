import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../../../store/store';
import { changeSwitchFilter } from '../konsructorSlice';

function SwitchFilter(): JSX.Element {
  const products = useSelector((store: RootState) => store.product.products ?? []);
  const switchFilter = useSelector((store: RootState) => store.konsructor.switchFilter);
  const dispatch = useAppDispatch();
  const clicks = products.reduce((acc, p) => {
    if (p.meta?.click && !acc.includes(p.meta?.click)) {
      acc.push(p.meta.click);
    }
    return acc;
  }, [] as string[]);

  return (
    <div>
      Цвет:
      <select
        onChange={(e) => dispatch(changeSwitchFilter({ name: 'click', value: e.target.value }))}
        value={switchFilter.click ?? ''}
        name="click"
      >
        <option value="">Выберите кликабельность</option>
        {clicks.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SwitchFilter;

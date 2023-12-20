import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../../../store/store';
import { changeCaseFilter } from '../konsructorSlice';

function CasesFilter(): JSX.Element {
  const products = useSelector((store: RootState) => store.product.products ?? []);
  const casesFilter = useSelector((store: RootState) => store.konsructor.caseFilter);
  const dispatch = useAppDispatch();
  const sizes = products.reduce((acc, p) => {
    if (p.meta?.size && !acc.includes(p.meta?.size)) {
      acc.push(p.meta.size);
    }
    return acc;
  }, [] as string[]);

  return (
    <div>
      Размер:
      <select
        onChange={(e) => dispatch(changeCaseFilter({ name: 'size', value: e.target.value }))}
        value={casesFilter.size ?? ''}
        name="size"
      >
        <option value="">Выберите размер</option>
        {sizes.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CasesFilter;

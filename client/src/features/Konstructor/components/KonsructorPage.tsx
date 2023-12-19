import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../../../store/store';
import { loadProducts } from '../../ProductList/productSlice';
import ProductCard from './ProductCard';
import { addToCart, pickCase, pickKeycap, pickSwitch } from '../konsructorSlice';

function KonsructorPage(): JSX.Element {
  const products = useSelector((store: RootState) => store.product.products ?? []);
  console.log(products);

  const cases = products.filter((p) => p.Category?.name === 'KEYBOARDS');
  const switches = products.filter((p) => p.Category?.name === 'SWITCHES');
  const keycaps = products.filter((p) => p.Category?.name === 'KEYCAPS');
  const selectedCase = useSelector((store: RootState) => store.konsructor.case);
  const selectedSwitches = useSelector((store: RootState) => store.konsructor.switch);
  const selectedkeycaps = useSelector((store: RootState) => store.konsructor.keycap);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    if (selectedCase && selectedSwitches && selectedkeycaps) {
      void dispatch(addToCart([selectedCase, selectedSwitches, selectedkeycaps]));
    }
  };
  useEffect(() => {
    void dispatch(loadProducts());
  }, []);

  return (
    <div>
      <div>
        Выберите кейс:{' '}
        {cases.map((c) => (
          <ProductCard
            product={c}
            key={c.id}
            onClick={() => dispatch(pickCase(c))}
            active={c.id === selectedCase?.id}
          />
        ))}
      </div>
      {selectedCase && (
        <div>
          Выберите свитчи:{' '}
          {switches.map((c) => (
            <ProductCard
              product={c}
              key={c.id}
              onClick={() => dispatch(pickSwitch(c))}
              active={c.id === selectedSwitches?.id}
            />
          ))}
        </div>
      )}
      {selectedSwitches && (
        <div>
          Выберите кейкап:{' '}
          {keycaps.map((c) => (
            <ProductCard
              product={c}
              key={c.id}
              onClick={() => dispatch(pickKeycap(c))}
              active={c.id === selectedkeycaps?.id}
            />
          ))}
        </div>
      )}
      {selectedCase && selectedSwitches && selectedkeycaps && (
        <button type="button" onClick={handleClick}>
          {' '}
          Добавить в корзину{' '}
        </button>
      )}
    </div>
  );
}

export default KonsructorPage;

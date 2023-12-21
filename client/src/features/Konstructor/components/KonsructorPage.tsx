import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../../../store/store';
import { loadProducts } from '../../ProductList/productSlice';
import ProductCard from './ProductCard';
import { addToCart, pickCase, pickKeycap, pickSwitch } from '../konsructorSlice';
import CasesFilter from './CasesFilter';
import KeycapsFilter from './KeycapsFilter';
import SwitchFilter from './SwitchesFilter';
import { useNavigate } from 'react-router-dom';
import { load } from '../../CartPage/cartSlice';

function KonsructorPage(): JSX.Element {
  const products = useSelector((store: RootState) => store.product.products ?? []);
  const navigate = useNavigate();
  const casesFilter = useSelector((store: RootState) => store.konsructor.caseFilter);
  const keycapFilter = useSelector((store: RootState) => store.konsructor.keycapFilter);
  console.log(keycapFilter);
  const switchFilter = useSelector((store: RootState) => store.konsructor.switchFilter);
  const cases = products
    .filter((p) => p.Category?.name === 'KEYS')
    .filter((p) => {
      if ('size' in casesFilter && p.meta?.size !== casesFilter.size) {
        return false;
      }
      if ('color' in casesFilter && p.meta?.color !== casesFilter.color) {
        return false;
      }
      return true;
    });
  const switches = products
    .filter((p) => p.Category?.name === 'SWITCHES')
    .filter((p) => {
      if ('click' in switchFilter && p.meta?.click !== switchFilter.click) {
        return false;
      }
      return true;
    });

  const keycaps = products
    .filter((p) => p.Category?.name === 'KEYCAPS')
    .filter((p) => {
      if ('colorKeycape' in keycapFilter && p.meta?.colorKeycape !== keycapFilter.colorKeycape) {
        return false;
      }
      return true;
    });
  const selectedCase = useSelector((store: RootState) => store.konsructor.case);
  const selectedSwitches = useSelector((store: RootState) => store.konsructor.switch);
  const selectedkeycaps = useSelector((store: RootState) => store.konsructor.keycap);
  const dispatch = useAppDispatch();
  const handleClick = async () => {
    if (selectedCase && selectedSwitches && selectedkeycaps) {
      await dispatch(addToCart([selectedCase, selectedSwitches, selectedkeycaps]));
      navigate('/cart');
    }
  };
  useEffect(() => {
    void dispatch(loadProducts());
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>Выберите кейс:</h1> <CasesFilter />
      <div className="Cases">
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h1>Выберите свитчи:</h1>
          <SwitchFilter />{' '}
          <div className="Cases">
            {switches.map((c) => (
              <ProductCard
                product={c}
                key={c.id}
                onClick={() => dispatch(pickSwitch(c))}
                active={c.id === selectedSwitches?.id}
              />
            ))}
          </div>
        </div>
      )}
      {selectedSwitches && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h1>Выберите кейкап:</h1>
          <KeycapsFilter />{' '}
          <div className="Cases">
            {keycaps.map((c) => (
              <ProductCard
                product={c}
                key={c.id}
                onClick={() => dispatch(pickKeycap(c))}
                active={c.id === selectedkeycaps?.id}
              />
            ))}
          </div>
        </div>
      )}
      {selectedCase && selectedSwitches && selectedkeycaps && (
        <button className="DecorationButtonByu2" type="button" onClick={handleClick}>
          {' '}
          Добавить в корзину{' '}
        </button>
      )}
    </div>
  );
}

export default KonsructorPage;

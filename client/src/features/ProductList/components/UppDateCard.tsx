import React, { useState } from 'react';
import type { Product } from '../type/productType';
import { useAppDispatch } from '../../../store/store';
import { updateProduct } from '../productSlice';

type typeProps = {
  product: Product;
  setState: (perem: boolean) => void;
};
function UppDateCard({ product, setState }: typeProps): JSX.Element {
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [stock, setStock] = useState(product.price);
  const dispatch = useAppDispatch();

  const productUpdate = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    void dispatch(updateProduct({ id: product.id, name, description, stock, price }));
    setState(false);
  };

  return (
    <form onSubmit={productUpdate}>
      <input name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input
        name="description"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input name="price" type="number" value={price} onChange={(e) => setPrice(+e.target.value)} />
      <input name="stock" type="number" value={stock} onChange={(e) => setStock(+e.target.value)} />
      <button className="save" type="submit">
        Сохранить
      </button>
    </form>
  );
}

export default UppDateCard;

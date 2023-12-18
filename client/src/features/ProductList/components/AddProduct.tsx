import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../productSlice';
import { useParams } from 'react-router';

function AddProduct(): JSX.Element {
  const { categoryId } = useParams();
  const nameInput = useRef<HTMLInputElement>(null);
  const priceInput = useRef<HTMLInputElement>(null);
  const stockInput = useRef<HTMLInputElement>(null);
  const descriptionInput = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const productAdd = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const name = nameInput.current?.value;
    const price = priceInput.current?.value;
    const description = descriptionInput.current?.value;
    const stock = stockInput.current?.value;

    const formData = new FormData();

    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('stock', stock);
    formData.append('categoryId', categoryId);

    void dispatch(addProduct(formData));
  };
  return (
    <div>
      <form onSubmit={productAdd}>
        <input name="name" type="text" ref={nameInput} placeholder="name" />
        <input name="price" type="number" ref={priceInput} placeholder="price" />
        <input name="description" type="text" ref={descriptionInput} placeholder="description" />
        <input name="stock" type="number" ref={stockInput} placeholder="stock" />
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}

export default AddProduct;

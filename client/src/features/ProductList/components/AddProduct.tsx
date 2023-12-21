import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { addProduct } from '../productSlice';

function AddProduct(): JSX.Element {
  const { categoryId } = useParams();
  const nameInput = useRef<HTMLInputElement>(null);
  const priceInput = useRef<HTMLInputElement>(null);
  const stockInput = useRef<HTMLInputElement>(null);
  const descriptionInput = useRef<HTMLInputElement>(null);
  const imgInput = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const productAdd = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const name = nameInput.current?.value;
    const price = priceInput.current?.value;
    const description = descriptionInput.current?.value;
    const stock = stockInput.current?.value;
    const img = imgInput.current?.files;

    const formData = new FormData();

    for (const key in img) {
      formData.append('img', img[key]);
    }

    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('stock', stock);
    formData.append('categoryId', categoryId);

    void dispatch(addProduct(formData));
    e.target.reset();
  };
  return (
    <div className="preFoarm">
      <div className="addForm">
        <form style={{ minHeight: '425px' }} onSubmit={productAdd}>
          <input name="name" type="text" ref={nameInput} placeholder="name" />
          <input name="price" type="number" ref={priceInput} placeholder="price" />
          <input name="img" type="file" multiple ref={imgInput} />
          <input name="description" type="text" ref={descriptionInput} placeholder="description" />
          <input name="stock" type="number" ref={stockInput} placeholder="stock" />
          <button className="formButton" type="submit">
            ADD CARD
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;

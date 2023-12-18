import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addRepair } from './repairSlice';

function Repair(): JSX.Element {
  const nameInput = useRef<HTMLInputElement>(null);
  const telInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const descriptionInput = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const repairAdd = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const name = nameInput.current?.value;
    const tel = telInput.current?.value;
    const description = descriptionInput.current?.value;
    const email = emailInput.current?.value;

    const formData = new FormData();

    formData.append('name', name);
    formData.append('tel', tel);
    formData.append('email', email);
    formData.append('description', description);

    console.log(formData, '>>>>>>');

    dispatch(addRepair(formData));
  };
  return (
    <div>
      <form onSubmit={repairAdd}>
        <input type="text" name="name" placeholder="name" ref={nameInput} />
        <input type="tel" name="tel" placeholder="tel" ref={telInput} />
        <input type="text" name="email" placeholder="email" ref={emailInput} />
        <input type="text" name="description" placeholder="описание" ref={descriptionInput} />
        <button type="submit">оставать заявку</button>
      </form>
    </div>
  );
}

export default Repair;

import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRepair } from '../repairSlice';
import ModalWindow from './ModalWindow';

function Repair(): JSX.Element {
  const nameInput = useRef<HTMLInputElement>(null);
  const telInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const descriptionInput = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();
  const [active, setActive] = useState(false);

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

    dispatch(addRepair(formData));
    e.target.reset();
  };
  return (
    <div className='preFoarm'>
      <p>Привет!Здесь ты можешь оставить заявку на ремонт и мы свяжемся с тобой</p>
      <div className='registrationForm'>
        {active && <ModalWindow active={active} setActive={setActive} />}
        <form style={{ minHeight: '395px' }} onSubmit={repairAdd}>
          <input type="text" name="name" placeholder="name" required ref={nameInput} />
          <input type="tel" name="tel" placeholder="tel" required ref={telInput} />
          <input type="text" name="email" placeholder="email" required ref={emailInput} />
          <input type="text" name="description" placeholder="описание" required ref={descriptionInput} />
          <button className="formButton" type="submit" onClick={() => setActive(true)}>
            REPAIR KEYBOARD
          </button>
        </form>
      </div>
    </div>
  );
}

export default Repair;

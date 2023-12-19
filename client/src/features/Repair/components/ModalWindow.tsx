import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

function ModalWindow({
  active,
  setActive,
}: {
  active: boolean;
  setActive: (status: boolean) => void;
}): JSX.Element {
  const repair = useSelector((store: RootState) => store.repaire.repair);
//   console.log(repair, '>>>>>');

  return (
    <div>
      {repair?.name},Ваша заявка принята в работу!
      <button type="button" onClick={() => setActive(false)}>
        ок
      </button>
    </div>
  );
}

export default ModalWindow;

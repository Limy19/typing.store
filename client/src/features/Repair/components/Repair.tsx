import React from 'react';

function Repair(): JSX.Element {
  return (
    <div>
      <form>
        <input type="text" placeholder="name" />
        <input type="tel" placeholder="tel" />
        <input type="text" placeholder="email" />
        <input type="text" placeholder="описание" />
        <button type="submit">оставать заявку</button>
      </form>
    </div>
  );
}

export default Repair;

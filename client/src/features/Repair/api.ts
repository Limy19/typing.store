import type { Repair } from './type/repairType';

export const repairFetch = async (obj: Repair): Promise<Repair> => {
  const res = await fetch('/api/repair', {
    method: 'POST',
    // headers: { 'Content-Type': 'Application/json' },
    body: obj,
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw message;
  }
  const data = await res.json();
  // console.log(data);

  return data.remont;
};

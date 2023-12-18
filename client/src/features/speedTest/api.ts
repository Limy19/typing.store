const defaulTtext =
  'Шла Саша по шоссе и сосала сушку карл у клары украл кораллы а клара у карла украла кларнет';
export const FetchRandomText = async () => {
  try {
    const res = await fetch('https://fish-text.ru/get?number=1');
    const data = await res.json();
    if (data.status === 'success') {
      return data.text as string;
    }
    return defaulTtext;
  } catch (error) {
    return defaulTtext;
  }
};

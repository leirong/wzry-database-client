import * as heroService from '@/services/hero';
import { useEffect, useState } from 'react';

const useHeros = () => {
  const [heros, setHeros] = useState<API.Hero[]>([]);
  const [freeHeros, setFreeHeros] = useState<API.Hero[]>([]); // 周免
  const [noviceHeros, setNoviceHeros] = useState<API.Hero[]>([]); // 新手推荐
  useEffect(() => {
    heroService.queryHeros().then((res) => {
      setHeros(res.data);
      setFreeHeros(res.data.filter((item: API.Hero) => item.pay_type === 10));
      setNoviceHeros(res.data.filter((item: API.Hero) => item.pay_type === 11));
    });
  }, []);
  return {
    heros,
    freeHeros,
    noviceHeros,
  };
};

export default useHeros;

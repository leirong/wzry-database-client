import * as heroService from '@/services/hero';
import { useEffect, useState } from 'react';

const useHeros = () => {
  const [loading, setLoading] = useState(false);
  const [heros, setHeros] = useState<API.Hero[]>([]);
  const [freeHeros, setFreeHeros] = useState<API.Hero[]>([]); // 周免
  const [noviceHeros, setNoviceHeros] = useState<API.Hero[]>([]); // 新手推荐
  useEffect(() => {
    setLoading(true);
    heroService.queryHeros().then((res) => {
      setHeros(res.data);
      setFreeHeros(res.data.filter((item: API.Hero) => item.pay_type === 10));
      setNoviceHeros(res.data.filter((item: API.Hero) => item.pay_type === 11));
      setLoading(false);
    });
  }, []);
  return {
    heros,
    freeHeros,
    noviceHeros,
    loading,
  };
};

export default useHeros;

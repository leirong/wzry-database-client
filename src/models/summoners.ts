import * as summonerService from '@/services/summoner';
import { useEffect, useState } from 'react';

const useSummoners = () => {
  const [loading, setLoading] = useState(false);
  const [summoners, setSummoners] = useState<API.Summoner[]>([]);
  useEffect(() => {
    setLoading(true);
    summonerService.querySummoners().then((res) => {
      setSummoners(res.data);
      setLoading(false);
    });
  }, []);
  return {
    summoners,
    loading
  };
};

export default useSummoners;

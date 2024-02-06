import * as summonerService from '@/services/summoner';
import { useEffect, useState } from 'react';

const useSummoners = () => {
  const [summoners, setSummoners] = useState<API.Summoner[]>([]);
  useEffect(() => {
    summonerService.querySummoners().then((res) => {
      setSummoners(res.data);
    });
  }, []);
  return {
    summoners,
  };
};

export default useSummoners;

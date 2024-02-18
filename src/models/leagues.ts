import * as leagueService from '@/services/leagues';
import { useEffect, useState } from 'react';

const useLeagues = () => {
  const [loading, setLoading] = useState(false);
  const [leagues, setLeagues] = useState<API.League[]>([]);
  useEffect(() => {
    setLoading(true);
    leagueService.queryLeagues().then((res) => {
      setLeagues(res.data);
      setLoading(false);
    });
  }, []);
  return {
    leagues,
    loading,
  };
};

export default useLeagues;

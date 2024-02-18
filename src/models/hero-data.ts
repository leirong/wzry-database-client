import * as heroDataService from '@/services/hero-data';
import { useEffect, useState } from 'react';

const useHeroData = () => {
  const [loading, setLoading] = useState(false);
  const [leagueId, setLeagueId] = useState<string>('');
  const [heroData, setHeroData] = useState<API.HeroData[]>([]);
  useEffect(() => {
    if (!leagueId) return;
    setLoading(true);
    heroDataService.queryHeroData({ league_id: leagueId }).then((res) => {
      setHeroData(res.data);
      setLoading(false);
    });
  }, [leagueId]);
  return {
    heroData,
    loading,
    leagueId,
    setLeagueId,
  };
};

export default useHeroData;

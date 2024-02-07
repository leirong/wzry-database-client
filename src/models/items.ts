import * as itemService from '@/services/item';
import { useEffect, useState } from 'react';

const useItems = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<API.Item[]>([]);
  useEffect(() => {
    setLoading(true);
    itemService.queryItems().then((res) => {
      setItems(res.data);
      setLoading(false);
    });
  }, []);
  return {
    items,
    loading,
  };
};

export default useItems;

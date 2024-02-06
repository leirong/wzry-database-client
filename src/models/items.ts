import * as itemService from '@/services/item';
import { useEffect, useState } from 'react';

const useItems = () => {
  const [items, setItems] = useState<API.Item[]>([]);
  useEffect(() => {
    itemService.queryItems().then((res) => {
      setItems(res.data);
    });
  }, []);
  return {
    items,
  };
};

export default useItems;

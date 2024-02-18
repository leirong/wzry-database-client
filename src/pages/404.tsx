import { history, useSearchParams } from '@umijs/max';
import { Button, Result } from 'antd';
import React from 'react';

const NoFoundPage: React.FC = () => {
  const empty = <></>;
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page');
  const pathname = page as string;
  if (pathname === '/wzry-database-client/hero') {
    history.push('/hero');
    return empty;
  } else if (pathname === '/wzry-database-client/item') {
    history.push('/item');
    return empty;
  } else if (pathname === '/wzry-database-client/summoner') {
    history.push('/summoner');
    return empty;
  } else if (pathname.startsWith('/wzry-database-client/herodetail/')) {
    history.push('/herodetail/' + pathname.split('/')[3]);
    return empty;
  } else if (pathname.startsWith('/wzry-database-client/hero-data')) {
    history.push('/hero-data');
    return empty;
  }
  return (
    <Result
      status="404"
      title="404"
      extra={
        <Button type="primary" onClick={() => history.push('/')}>
          返回首页
        </Button>
      }
    />
  );
};

export default NoFoundPage;

import { history } from '@umijs/max';
import { Button, Result } from 'antd';

const NoFoundPage = () => {
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

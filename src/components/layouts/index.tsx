import { Outlet, useLocation } from '@umijs/max';
import { Fragment } from 'react';

export default () => {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
};

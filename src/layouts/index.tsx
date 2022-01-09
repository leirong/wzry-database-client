import React from 'react';
import { Layout, Menu } from 'antd';
import styles from './index.less';
import { Link, history } from 'umi';
const { Header, Content, Footer } = Layout;

const menuData = [
  {
    router: '/hero',
    name: '英雄',
  },
  {
    router: '/item',
    name: '局内道具',
  },
  {
    router: '/summoner',
    name: '召唤师技能',
  },
];

// interface BasicLayoutProps {
//     children: any;
// }

export default (props: any) => {
  //从属性中取出当前的路由
  const {
    children,
    location: { pathname },
  } = props;
  const paths = ['/', '/gh-pages/', '/wzry-database-client/gh-pages/'];
  const _pathname = paths.includes(pathname) ? '/hero' : pathname;
  if (paths.includes(pathname)) {
    history.push(_pathname);
  }
  return (
    <Layout
      style={{
        height: '100%',
      }}
    >
      <Header>
        <div className={styles.logo}>王者荣耀资料库 </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[_pathname]}
          style={{ lineHeight: '64px' }}
        >
          {menuData.map(({ router, name }) => (
            <Menu.Item key={router}>
              <Link to={router}>{name}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content style={{ padding: '0 24px', overflow: 'auto' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: '100%' }}>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        王者荣耀资料库 Created by leirong
      </Footer>
    </Layout>
  );
};

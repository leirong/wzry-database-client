import { useEffect } from 'react';
import styles from './index.less';
import { history } from 'umi';

export default function IndexPage() {
  useEffect(() => {
    history.push('/hero');
  }, []);
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}

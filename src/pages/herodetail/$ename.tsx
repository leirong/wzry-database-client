import { RollbackOutlined } from '@ant-design/icons';
import { history, useModel, useParams } from '@umijs/max';
import { FloatButton } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import styles from './ename.less';

const HeroDetail = () => {
  const { heros } = useModel('heros');
  const { ename } = useParams();
  const [skinIndex, setSkinIndex] = useState(1);
  const [heroItem, setHeroItem] = useState<API.Hero | undefined>(undefined);
  const onMouseEnter = (index: number) => {
    setSkinIndex(index + 1);
  };
  useEffect(() => {
    if (heros.length === 0 || !ename) {
      return;
    }
    const _heroItem = heros.find((item: API.Hero) => item.ename === +ename);
    setHeroItem(_heroItem);
  }, [ename, heros.length]);

  const skin_names = useMemo(() => {
    return heroItem && heroItem?.skin_name  ? heroItem.skin_name.split('|') : [];
  }, [heroItem]);

  const toHero = () => {
    history.push('/hero');
  };

  return (
    <div>
      <FloatButton
        className={styles.floatbtn}
        icon={<RollbackOutlined />}
        onClick={toHero}
      />
      <div
        className={styles.bg}
        style={{
          background: `url('https://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/${ename}/${ename}-bigskin-${skinIndex}.jpg') center center / cover no-repeat`,
        }}
      >
        <div className={styles.skinbox}>
          <ul>
            {skin_names.map((item: string, index: number) => (
              <li onMouseEnter={() => onMouseEnter(index)} key={index}>
                <img
                  className={
                    skinIndex === index + 1
                      ? styles.small_skin_img_active
                      : styles.small_skin_img
                  }
                  src={`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${ename}/${ename}-smallskin-${
                    index + 1
                  }.jpg`}
                />
                <p>{item}</p>
              </li>
            ))}
          </ul>
          <a>皮肤</a>
        </div>
      </div>
    </div>
  );
};

export default HeroDetail;

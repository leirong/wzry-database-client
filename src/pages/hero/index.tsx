import { PageContainer } from '@ant-design/pro-components';
import { history, useModel } from '@umijs/max';
import { Card, Col, Radio, Row } from 'antd';
import { useState } from 'react';
import FreeHeroItem from './components/hero-item';
import styles from './index.less';
const RadioGroup = Radio.Group;
const heroTypes = [
  { key: 0, value: '全部' },
  { key: 1, value: '战士' },
  { key: 2, value: '法师' },
  { key: 3, value: '坦克' },
  { key: 4, value: '刺客' },
  { key: 5, value: '射手' },
  { key: 6, value: '辅助' },
];

const ColProps = {
  xs: 12,
  sm: 8,
  md: 6,
  lg: 4,
  xl: 3,
};

const HomePage: React.FC = () => {
  const { heros, freeHeros, noviceHeros } = useModel('heros');

  const [fHover, setFHover] = useState(0);
  const [nHover, setNHover] = useState(0);

  const [heroType, setHeroType] = useState(0);

  const onChange = (e: any) => {
    setHeroType(e.target.value);
  };

  const onFreeItemHover = (thisIndex: number) => {
    setFHover(thisIndex);
  };

  const onNewbieItemHover = (thisIndex: number) => {
    setNHover(thisIndex);
  };

  const toHerodetail = (ename: number) => {
    history.push(`/herodetail/${ename}`);
  };
  return (
    <PageContainer ghost>
      <Card className={styles.card}>
        <RadioGroup onChange={onChange} value={heroType}>
          {heroTypes.map(({ key, value }, index) => (
            <Radio value={key} key={index}>
              {value}
            </Radio>
          ))}
        </RadioGroup>
      </Card>
      <Row>
        {heros
          .filter(
            (item: API.Hero) => heroType === 0 || item.hero_type === heroType,
          )
          .reverse()
          .map(({ ename, cname }: API.Hero) => (
            <Col {...ColProps} key={ename} className={styles.heroitem}>
              <img
                src={`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${ename}/${ename}.jpg`}
                onClick={() => toHerodetail(ename)}
              />
              <p>{cname}</p>
            </Col>
          ))}
      </Row>
      <div className={styles.normal}>
        <div className={styles.info}>
          <Row className={styles.freehero}>
            <Col span={24}>
              <p>周免英雄</p>
              <div>
                {freeHeros.map((data: API.Hero, index: number) => (
                  <FreeHeroItem
                    data={data}
                    itemHover={fHover}
                    onItemHover={onFreeItemHover}
                    thisIndex={index}
                    key={index}
                  />
                ))}
              </div>
            </Col>
          </Row>
        </div>
        <div className={styles.info}>
          <Row className={styles.freehero}>
            <Col span={24}>
              <p>新手推荐</p>
              <div>
                {noviceHeros.map((data: API.Hero, index: number) => (
                  <FreeHeroItem
                    data={data}
                    itemHover={nHover}
                    onItemHover={onNewbieItemHover}
                    thisIndex={index}
                    key={index}
                  />
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </PageContainer>
  );
};

export default HomePage;

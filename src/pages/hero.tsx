import React, { FC, useState } from 'react';
import styles from './hero.less';
import { connect, HeroModelState, ConnectProps, HeroProps, history } from 'umi';
import { Row, Col, Radio, Card } from 'antd';
import FreeHeroItem from '@/components/FreeHeroItem';

const RadioGroup = Radio.Group;

interface PageProps extends ConnectProps {
  hero: HeroModelState;
}

const heroTypes = [
  { key: 0, value: '全部' },
  { key: 1, value: '战士' },
  { key: 2, value: '法师' },
  { key: 3, value: '坦克' },
  { key: 4, value: '刺客' },
  { key: 5, value: '射手' },
  { key: 6, value: '辅助' },
];

const Hero: FC<PageProps> = (props: any) => {
  const {
    hero: {
      name,
      heros,
      heroType,
      freeheros,
      freeItemHover,
      newbieheros,
      newbieItemHover,
      heroItem,
    },
    dispatch,
  } = props;
  const onChange = (e: any) => {
    dispatch({ type: 'hero/save', payload: { heroType: e.target.value }})
  }

  const onFreeItemHover = (thisIndex: number) => {
    dispatch({ type: 'hero/save', payload: { freeItemHover: thisIndex }})
  }

  const onNewbieItemHover = (thisIndex: number) => {
    dispatch({ type: 'hero/save', payload: { newbieItemHover: thisIndex }})
  }

  const toHerodetail = (ename: number) => {
    // const _heroItem = heros.find((item: HeroProps) => item.ename === ename);
    // dispatch({ type: 'hero/save', payload: { heroItem: _heroItem }})
    history.push(`herodetail/${ename}`);
  }

  return (
    <div>
      {/* <h1 className={styles.title}>Page {name}</h1> */}
      {/* <h2>This is {JSON.stringify(heros)}</h2> */}
      <Card className={styles.card}>
        <RadioGroup onChange={onChange} value={heroType}>
          {
            heroTypes.map(({key, value}, index) => (
              <Radio value={key} key={index}>{value}</Radio>
            ))
          }
        </RadioGroup>
      </Card>
      <Row>
        {
          heros.filter((item: HeroProps) => heroType === 0 || item.hero_type === heroType).reverse().map(({ename, cname}: HeroProps) => (
            <Col span={3} key={ename} className={styles.heroitem}>
              <img src={`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${ename}/${ename}.jpg`} onClick={() => toHerodetail(ename)}/>
              <p>{cname}</p>
            </Col>
          ))
        }
      </Row>
      <div className={styles.normal}>
        <div className={styles.info}>
          <Row className={styles.freehero}>
            <Col span={24}>
              <p>周免英雄</p>
              <div>
                {freeheros.map((data: HeroProps,index: number) => (
                  <FreeHeroItem
                    data={data}
                    itemHover={freeItemHover}
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
                {newbieheros.map((data: HeroProps,index: number) => (
                  <FreeHeroItem
                    data={data}
                    itemHover={newbieItemHover}
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
    </div>
  );
}

export default connect(({ hero }: { hero: HeroModelState }) => ({ hero }))(Hero);

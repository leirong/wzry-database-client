import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Col, Row } from 'antd';
import { FC, useEffect, useState } from 'react';
import styles from './index.less';

const ColProps = {
  xs: 12,
  // sm: 8,
  md: 8,
  lg: 6,
  // xl: 3
};

const Summoner: FC = () => {
  const { summoners } = useModel('summoners');
  const [summonerItem, setSummonerItem] = useState<API.Summoner | undefined>();

  useEffect(() => {
    if (!summoners.length) {
      return;
    }
    setSummonerItem(summoners[0]);
  }, [summoners]);

  const onClick = (summonerObj: API.Summoner) => {
    setSummonerItem(summonerObj);
  };
  return (
    <PageContainer ghost>
      <div className={styles.main}>
        <Row className={styles.summoner_left}>
          {summoners.map((item: API.Summoner, index: number) => (
            <Col
              {...ColProps}
              key={index}
              className={
                item.summoner_id === summonerItem?.summoner_id
                  ? styles[`summoneritem-active`]
                  : styles.summoneritem
              }
            >
              <img
                src={`https://game.gtimg.cn/images/yxzj/img201606/summoner/${item.summoner_id}.jpg`}
                alt={item.summoner_name}
                onClick={() => onClick(item)}
              />
              <p>{item.summoner_name}</p>
            </Col>
          ))}
        </Row>
        <div className={styles.summoner_right}>
          <img
            src={`https://game.gtimg.cn/images/yxzj/img201606/summoner/${summonerItem?.summoner_id}-big.jpg`}
          />
          <h4>{summonerItem?.summoner_name}</h4>
          <p>{summonerItem?.summoner_rank}</p>
          <div className={styles.summoner_desc}>
            {summonerItem?.summoner_description}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Summoner;

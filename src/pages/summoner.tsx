import React, { FC, useState, useEffect } from 'react';
import styles from './summoner.less';
import { connect, SummonerModelState, ConnectProps, SummonerProps } from 'umi';
import { Row, Col, Space, Divider } from 'antd';

interface PageProps extends ConnectProps {
  summoner: SummonerModelState;
}

const ColProps = {
  xs: 12,
  // sm: 8,
  md: 8,
  lg: 6,
  // xl: 3
};

const Summoner: FC<PageProps> = (props) => {
  const {
    summoner: { name, summoners },
  } = props;
  const [summonerItem, setSummonerItem] = useState<SummonerProps | undefined>();

  useEffect(() => {
    if (!summoners.length) {
      return;
    }
    setSummonerItem(summoners[0]);
  }, [summoners]);

  const onClick = (summonerObj: SummonerProps) => {
    setSummonerItem(summonerObj);
  };
  return (
    <div className={styles.main}>
      {/* <h1 className={styles.title}>Page {name}</h1>
      <h2>This is {JSON.stringify(summoners)}</h2> */}
      <Row className={styles.summoner_left}>
        {summoners.map((item: SummonerProps, index: number) => (
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
  );
};

export default connect(({ summoner }: { summoner: SummonerModelState }) => ({
  summoner,
}))(Summoner);

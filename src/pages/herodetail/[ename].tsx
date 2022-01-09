import React, { ReactNode, useEffect, useMemo, useState } from 'react';
import styles from './ename.less';
import styled from 'styled-components';
import { connect, HeroModelState, HeroProps, history } from 'umi';
import { Button } from 'antd';

interface HeroDetailWrapperProps {
  ename: number;
  skinIndex: number;
  children: ReactNode;
}

const HeroDetailWrapper = styled.div`
  width: 100%;
  height: 700px;
  position: relative;
  background: url('https://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/${(props: HeroDetailWrapperProps) => props.ename}/${(props: HeroDetailWrapperProps) =>props.ename}-bigskin-${(props: HeroDetailWrapperProps) => props.skinIndex}.jpg') center 0px;
`;

const HeroDetail = ({
  match: {
    params: {
      ename
    }
  },
  dispatch,
  hero: {
    heros,
  }
}: any) => {
  
  const [ skinIndex, setSkinIndex ] = useState(1);
  const [ heroItem, setHeroItem ] = useState<HeroProps | undefined>(undefined);
  const onMouseEnter = (index: number) => {
    setSkinIndex(index + 1);
  }
  useEffect(() => {
    if (heros.length === 0 || !ename) {
      return;
    }
    const _heroItem = heros.find((item: HeroProps) => item.ename === +ename);
    setHeroItem(_heroItem);
  }, [ename, heros.length])

  const skin_names = useMemo(() => {
    return heroItem ? heroItem.skin_name.split('|') : [];
  }, [heroItem])

  const toHero = () => {
    history.push('/hero');
  }

  return (
    <div>
      <Button type='link' onClick={toHero} >{'<<返回英雄列表'}</Button>
      <HeroDetailWrapper
        ename={ename}
        skinIndex={skinIndex}
      >
        {/* <h1 className={styles.title}>Page herodetail/{ename}</h1> */}
        <div
            className={styles.skinbox}
          >
            <a>皮肤</a>
            <ul>
              {
                skin_names.map((item: string, index: number) => (
                  <li
                    onMouseEnter={() => onMouseEnter(index)}
                    key={index}
                  >
                    <img className={skinIndex === index + 1 ? styles.small_skin_img_active : styles.small_skin_img} src={`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${ename}/${ename}-smallskin-${index + 1}.jpg`} />
                  <p>{item}</p>
                  </li>
                ))
              }
            </ul>
          </div>
        
      </HeroDetailWrapper>
    </div>
    
  );
}

export default connect(({ hero }: { hero: HeroModelState }) => ({ hero }))(HeroDetail);

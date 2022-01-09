import React from 'react';
import { HeroProps } from 'umi';
import styles from './index.less';

interface FreeHeroItemProps {
    data: HeroProps;
    itemHover: number;
    onItemHover: (thisIndex: number) =>  void;
    thisIndex: number;
}

export default ({
    data,
    itemHover,
    onItemHover,
    thisIndex,
}: FreeHeroItemProps) => {
    const isHover = itemHover === thisIndex
    const imgName = isHover ? '-freehover.png' : '.jpg'
    return (
        <img
            className={isHover ? styles['freehero-item-active'] : styles['freehero-item']}
            onMouseEnter={() => {
                !isHover && onItemHover(thisIndex);
            }}
            // style={{
            //     borderRadius: '5px',
            //     height: '69px',
            //     margin: '5px',
            //     width: isHover ? '224px' : '69px',
            // }}
            src={`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${data.ename}/${data.ename}${imgName}`}
        />
    )
};

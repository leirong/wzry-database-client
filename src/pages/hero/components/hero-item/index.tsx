import classNames from 'classnames';
import styles from './index.less';

interface HeroItemProps {
  data: API.Hero;
  itemHover: number;
  onItemHover: (thisIndex: number) => void;
  thisIndex: number;
}

export default ({ data, itemHover, onItemHover, thisIndex }: HeroItemProps) => {
  const isHover = itemHover === thisIndex;
  const imgName = isHover ? '-freehover.png' : '.jpg';
  const onMouseEnter = () => {
    if (!isHover) {
      onItemHover(thisIndex);
    }
  };
  return (
    <span
      className={classNames(styles['freehero-item'], {
        [styles['active']]: isHover,
      })}
      onMouseEnter={onMouseEnter}
    >
      <img
        className={styles['small']}
        src={`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${data.ename}/${data.ename}${imgName}`}
      />
      <img
        className={styles['large']}
        src={`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${data.ename}/${data.ename}${imgName}`}
      />
    </span>
  );
};

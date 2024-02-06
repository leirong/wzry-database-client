import styles from './index.less';

interface FreeHeroItemProps {
  data: API.Hero;
  itemHover: number;
  onItemHover: (thisIndex: number) => void;
  thisIndex: number;
}

export default ({
  data,
  itemHover,
  onItemHover,
  thisIndex,
}: FreeHeroItemProps) => {
  const isHover = itemHover === thisIndex;
  const imgName = isHover ? '-freehover.png' : '.jpg';
  return (
    <img
      className={
        isHover ? styles['freehero-item-active'] : styles['freehero-item']
      }
      onMouseEnter={() => {
        !isHover && onItemHover(thisIndex);
      }}
      src={`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${data.ename}/${data.ename}${imgName}`}
    />
  );
};

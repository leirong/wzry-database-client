import React, { FC } from 'react';
import styles from './item.less';
import { connect, ItemModelState, ConnectProps, ItemProps } from 'umi';
import { Row, Col, Card, Radio } from 'antd';
const RadioGroup = Radio.Group;

interface PageProps extends ConnectProps {
  item: ItemModelState;
}

const itemTypes = [
  { key: 0, value: '全部' },
  { key: 1, value: '攻击' },
  { key: 2, value: '法术' },
  { key: 3, value: '防御' },
  { key: 4, value: '移动' },
  { key: 5, value: '打野' },
  { key: 7, value: '辅助' },
];

const ColProps = {
  xs: 12,
  sm: 8,
  md: 6,
  lg: 4,
  xl: 3,
};

const Item: FC<PageProps> = (props) => {
  const {
    item: { name, items, itemType },
    dispatch,
  } = props;
  const onChange = (e: any) => {
    dispatch({ type: 'item/save', payload: { itemType: e.target.value } });
  };
  return (
    <div>
      {/* <h1 className={styles.title}>Page {name}</h1>
      <h2>This is {JSON.stringify(items)}</h2> */}
      <Card className={styles.card}>
        <RadioGroup onChange={onChange} value={itemType}>
          {itemTypes.map(({ key, value }, index) => (
            <Radio value={key} key={index}>
              {value}
            </Radio>
          ))}
        </RadioGroup>
      </Card>
      <Row>
        {items
          .filter(
            (item: ItemProps) => itemType === 0 || item.item_type === itemType,
          )
          .reverse()
          .map(({ item_id, item_name }: ItemProps, index: number) => (
            <Col {...ColProps} key={index} className={styles.itemitem}>
              <img
                src={`https://game.gtimg.cn/images/yxzj/img201606/itemimg/${item_id}.jpg`}
              />
              <p>{item_name}</p>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default connect(({ item }: { item: ItemModelState }) => ({ item }))(
  Item,
);

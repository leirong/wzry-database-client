import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Card, Col, Radio, Row } from 'antd';
import { FC, useState } from 'react';
import styles from './index.less';
const RadioGroup = Radio.Group;

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

const Item: FC = () => {
  const { items } = useModel('items');
  const [itemType, setItemType] = useState(0);
  const onChange = (e: any) => {
    setItemType(e.target.value);
  };
  return (
    <PageContainer ghost>
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
            (item: API.Item) => itemType === 0 || item.item_type === itemType,
          )
          .reverse()
          .map(({ item_id, item_name }: API.Item, index: number) => (
            <Col {...ColProps} key={index} className={styles.itemitem}>
              <img
                src={`https://game.gtimg.cn/images/yxzj/img201606/itemimg/${item_id}.jpg`}
              />
              <p>{item_name}</p>
            </Col>
          ))}
      </Row>
    </PageContainer>
  );
};

export default Item;

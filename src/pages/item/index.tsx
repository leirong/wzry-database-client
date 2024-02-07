import { itemTypes } from '@/constants/item';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Card, Col, Radio, Row, Tooltip } from 'antd';
import { FC, useState } from 'react';
import styles from './index.less';
const RadioGroup = Radio.Group;

const ColProps = {
  xs: 12,
  sm: 8,
  md: 6,
  lg: 4,
  xl: 3,
};

const Item: FC = () => {
  const { items, loading } = useModel('items');
  const [itemType, setItemType] = useState(0);
  const onChange = (e: any) => {
    setItemType(e.target.value);
  };
  const renderTitle = (item: API.Item) => {
    const descs = Object.keys(item).filter((key) => key.startsWith('des'));
    return (
      <div style={{ display: 'flex', padding: 10 }}>
        <div style={{ marginRight: 10, width: 150 }}>
          <img
            src={`https://game.gtimg.cn/images/yxzj/img201606/itemimg/${item.item_id}.jpg`}
          />
          {descs.map((desc, i) => (
            <div
              key={i}
              style={{ color: '#4BA8F9' }}
              dangerouslySetInnerHTML={{ __html: item[desc as keyof API.Item] }}
            />
          ))}
        </div>
        <div>
          <p style={{ color: '#3BFD40', fontSize: 20, fontWeight: 'bold' }}>
            {item.item_name}
          </p>
          <p style={{ color: '#DA9D36' }}>售价：{item.price}</p>
          <p style={{ color: '#DA9D36' }}>总价：{item.total_price}</p>
        </div>
      </div>
    );
  };
  return (
    <PageContainer ghost loading={loading}>
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
          .map((item: API.Item, index: number) => (
            <Col {...ColProps} key={index} className={styles.itemitem}>
              <Tooltip
                title={renderTitle(item)}
                overlayInnerStyle={{ width: 300 }}
              >
                <img
                  src={`https://game.gtimg.cn/images/yxzj/img201606/itemimg/${item.item_id}.jpg`}
                />
                <p>{item.item_name}</p>
              </Tooltip>
            </Col>
          ))}
      </Row>
    </PageContainer>
  );
};

export default Item;

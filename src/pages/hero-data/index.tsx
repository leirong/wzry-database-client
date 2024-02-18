import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import type { TableProps } from 'antd';
import { Select, Table } from 'antd';
import { FC, useEffect } from 'react';

const columns: TableProps<API.HeroData>['columns'] = [
  {
    title: '排名',
    dataIndex: 'index',
    key: 'index',
    render: (text, item, index) => index + 1,
  },
  {
    title: '英雄',
    dataIndex: 'hero_info',
    key: 'hero_info',
    render: (_, item) => (
      <div>
        <img
          src={item.hero_info.hero_icon}
          style={{ width: 26, height: 26, borderRadius: 26 }}
        />
        &nbsp;
        <span>{item.hero_info.hero_name}</span>
      </div>
    ),
  },
  {
    title: '出场次数',
    dataIndex: 'battle_count',
    key: 'battle_count',
    render: (_, item) => <span>{item.statistics_info.battle_count}</span>,
    sorter: (a, b) =>
      a.statistics_info.battle_count - b.statistics_info.battle_count,
  },
  {
    title: '出场率',
    dataIndex: 'pick_rate',
    key: 'pick_rate',
    render: (_, item) => (
      <span>
        {parseInt(item.bp_statistics_info.pick_rate * 1000 + '') / 10}%
      </span>
    ),
    sorter: (a, b) =>
      a.bp_statistics_info.pick_rate - b.bp_statistics_info.pick_rate,
  },
  {
    title: '被禁率',
    dataIndex: 'ban_rate',
    key: 'ban_rate',
    render: (_, item) => (
      <span>
        {parseInt(item.bp_statistics_info.ban_rate * 1000 + '') / 10}%
      </span>
    ),
    sorter: (a, b) =>
      a.bp_statistics_info.ban_rate - b.bp_statistics_info.ban_rate,
  },
  {
    title: '胜率',
    dataIndex: 'win_rate',
    key: 'win_rate',
    render: (_, item) => (
      <span>{parseInt(item.statistics_info.win_rate * 1000 + '') / 10}%</span>
    ),
    sorter: (a, b) => a.statistics_info.win_rate - b.statistics_info.win_rate,
  },
];

const HeroData: FC = () => {
  const { leagues } = useModel('leagues');
  const options = leagues.map((item) => ({
    label: item.league_name,
    value: item.league_id,
  }));

  const { heroData, loading, leagueId, setLeagueId } = useModel('hero-data');
  useEffect(() => {
    if (leagueId || !options.length) return;
    setLeagueId(options[0].value); // 默认选中第一个
  }, [leagueId, options]);
  return (
    <PageContainer ghost loading={loading}>
      <Select
        style={{ width: 200 }}
        options={options}
        onChange={setLeagueId}
        value={leagueId}
      ></Select>
      <Table
        columns={columns}
        dataSource={heroData}
        rowKey={(row) => row.hero_info.hero_id}
        pagination={false}
      />
    </PageContainer>
  );
};

export default HeroData;

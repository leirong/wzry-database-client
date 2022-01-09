import { Effect, Reducer, Subscription, request } from 'umi';

export interface HeroProps {
    ename: number;
    cname: string;
    title: string;
    new_type: number;
    hero_type: number;
    pay_type: number;
    skin_name: string;
}
export interface HeroModelState {
    name: string;
    heros: HeroProps[];
    heroType: number;
    freeheros: HeroProps[];
    freeItemHover: number;
    newbieheros: HeroProps[];
    newbieItemHover: number;
}

export interface HeroModelType {
    namespace: 'hero';
    state: HeroModelState;
    effects: {
      query: Effect;
      fetch: Effect;
    };
    reducers: {
      save: Reducer<HeroModelState>;
    };
    subscriptions: { setup: Subscription };
}

const HeroModel: HeroModelType = {
    namespace: 'hero',
    state: {
      name: 'hero',
      heros: [],
      heroType: 0,
      freeheros: [], // 本周免费
      freeItemHover: 0, //因为周免英雄列表里面有一个一直是详情图，所以这里给一个标记
      newbieheros: [], // 新手推荐
      newbieItemHover: 0,
    },
    effects: {
      *query({ payload }, { call, put }) {

      },
      *fetch({ type, payload }, { put, call, select }) {
        // mock
        // const options = {
        //     method: 'post',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json; charset=utf-8',
        //     },
        //     body: JSON.stringify({
        //         ename: 110,
        //     }),
        // }
        // const data = yield request('/web201605/js/herolist.json', options);
        const data = yield request('/web201605/js/herolist.json');
        const localData = [
          {
            ename: 105,
            cname: '廉颇',
            title: '正义爆轰',
            new_type: 0,
            hero_type: 3,
            skin_name: '正义爆轰|地狱岩魂',
          },
          {
            ename: 106,
            cname: '小乔',
            title: '恋之微风',
            new_type: 0,
            hero_type: 2,
            skin_name: '恋之微风|万圣前夜|天鹅之梦|纯白花嫁|缤纷独角兽',
          },
        ];
        yield put({
          type: 'save',
          payload: {
            heros: data || localData,
            freeheros: data.filter((item: HeroProps) => item.pay_type === 10),
            newbieheros: data.filter((item: HeroProps) => item.pay_type === 11),
          },
        });
      },
    },
    reducers: {
      save(state, action) {
        return {
          ...state,
          ...action.payload,
        };
      },
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                if (pathname === '/hero' || pathname.indexOf('/herodetail/') > -1) {
                    dispatch({
                        type: 'fetch'
                    });
                }
            });
        }
    },
  };
  
  export default HeroModel;
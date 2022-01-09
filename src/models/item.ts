import { Effect, Reducer, Subscription, request } from 'umi';

export interface ItemProps {
    item_id: number;
	item_name: string;
	item_type: number;
	price: number
	total_price: number;
	des1: string;
}

export interface ItemModelState {
    name: string;
    items: ItemProps[];
    itemType: number;
}

export interface ItemModelType {
    namespace: string;
    state: ItemModelState;
    effects:  {
        query: Effect;
        fetch: Effect;
    };
    reducers: {
        save: Reducer<ItemModelState>;
    },
    subscriptions: { setup: Subscription };
}

const ItemModel: ItemModelType = {
    namespace: 'item',
    state: {
        name: 'item',
        items: [],
        itemType: 0,
    },
    effects: {
        *query({ payload }, { call, put }) {
  
        },
        *fetch({ type, payload }, { put, call, select }) {
            const data = yield request('/web201605/js/item.json');
            const localData: any = [];
            yield put({
              type: 'save',
              payload: {
                items: data || localData,
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
                if (pathname === '/item') {
                    dispatch({
                        type: 'fetch'
                    })
                }
            });
        }
    },
}

export default ItemModel;
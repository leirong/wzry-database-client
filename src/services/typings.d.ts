declare namespace API {
  interface Hero {
    ename: number;
    cname: string;
    title: string;
    new_type: number;
    hero_type: number;
    pay_type: number;
    skin_name: string;
  }
  interface Item {
    item_id: number;
    item_name: string;
    item_type: number;
    price: number;
    total_price: number;
    des1: string;
  }
  interface Summoner {
    summoner_id: number;
    summoner_name: string;
    summoner_rank: string;
    summoner_description: string;
  }
}

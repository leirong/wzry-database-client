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
  interface League {
    status: number;
    league_type_name: string;
    league_id: string;
    start_time: string;
    league_icon: string;
    is_top: number;
    end_time: string;
    league_name: string;
    season: number;
    year: number;
    cc_league_id: string;
    live_room_address: string;
  }
  interface HeroInfo {
    hero_id: number;
    hero_name: string;
    hero_icon: string;
  }
  interface StatisticsInfo {
    battle_count: number;
    victory_battle_count: number;
    defeated_battle_count: number;
    win_rate: number;
    avg_kill_num: number;
    avg_assist_num: number;
    avg_death_num: number;
    avg_kda: number;
    avg_gold: number;
    avg_game_duration: number;
  }
  interface BpStatisticsInfo {
    ban_num: number;
    ban_rate: number;
    pick_num: number;
    pick_rate: number;
  }
  interface HeroData {
    hero_info: HeroInfo;
    statistics_info: StatisticsInfo;
    bp_statistics_info: BpStatisticsInfo;
  }
}

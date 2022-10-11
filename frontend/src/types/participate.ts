export type participate_product = {
  ended_time: string;
  goal_num: number;
  state_num: number;
  title: string;
  image_uri: string;
  base_price?: number;
  unit: number;
};

export type participate_Info = {
  base_price: number;
  goal_num: number;
  product_id: number;
  state_num: number;
};

export type participateProduct = { [i: string]: number };

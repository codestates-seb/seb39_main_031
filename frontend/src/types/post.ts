// 썸네일, 대표 이미지 등
export interface Image {
  image: string;
}

//Progress Bar
export interface Progress {
  state_num: number;
  goal_num: number;
}
export interface FilledBar {
  width: string;
}

//Preview
export interface Preview {
  product_id: number;
  user_id: number;
  image_uri: string;
  title: string;
  user_name: string;
  town: string;
  goal_num: number;
  state_num: number;
  ended_time: string;
}

//Post
export type DetailType = {
  user_id: number;
  user_name: string;
  score: number;
  profileImage_uri: string;
  product_id: number;
  region: string;
  town: string;
  category: string;
  goal_num: number;
  state_num: number;
  image_uri: string;
  title: string;
  body: string;
  generated_time: string;
  ended_time: string;
  status: string;
  unit: string;
  base_price: number;
  enteredUser?: {
    amount: number;
    totalPrice: number;
    username: string;
  }[];
};

// Edit Post
export interface EditType {
  user_id: number;
  product_id: number;
  category: string;
  image_uri: string;
  title: string;
  goal_num: number;
  generated_time: string;
  ended_time: string;
  region: string;
  town: string;
  body: string;
}

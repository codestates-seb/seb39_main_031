// TODO: 타입 정리
// Preview
export interface Preview {
  image_uri: string;
  title: string;
  id: number;
  user_id: number;
  user_name: string;
  town: string;
  goal_num: number;
  state_num: number;
  ended_time: string;
}

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
export interface DetailType {
  user_id: number;
  user_name: string;
  score: number;
  profileImage_uri: string;
  product_id: number;
  town: string;
  goal_num: number;
  state_num: number;
  goal_price: number;
  state_price: number;
  image_uri: string;
  title: string;
  body: string;
  generated_time: string;
  ended_time: string;
  status: string;
}

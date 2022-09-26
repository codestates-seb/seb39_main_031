// Preview
export interface Preview {
  image_uri: string;
  title: string;
  user_name: string;
  town: string;
  goal_num: number;
  state_num: number;
  ended_time: string;
}
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

export type regions = {
  value: string;
  name: string;
}[];

export type towns = { [S: string]: regions }[];

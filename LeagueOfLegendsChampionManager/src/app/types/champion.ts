export interface Champion {
  _id: string;
  name: string;
  position: string;
  photo: string;
  likes?: number;
  biography?: string;  // Optional biography
}

export type IShow = {
  id: number;
  ended: string;
  genres: string[];
  image: { [key: string]: string };
  language: string;
  name: string;
  network: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
    officialSite: string;
  };
  officialSite: string;
  premiered: string;
  rating: { average: number };
  runtime: number;
  schedule: { time: string; days: string[] };
  status: string;
  summary: string;
};

export type ShowData = {
  score: number;
  show: IShow;
};

export interface InputFocusEvent extends FocusEvent {
  target: HTMLInputElement;
}

export interface InputInputEvent extends InputEvent {
  target: HTMLInputElement;
}

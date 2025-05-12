export type Trader = {
  id: string;
  imageLink: string | null;
  name: string;
  normalizedName: string;
  levels: {
    id: string;
    imageLink: string | null;
    level: number;
  }[];
};

export type NormTrader = { [key: string]: Trader | null | undefined };

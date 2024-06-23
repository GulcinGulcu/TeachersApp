export interface ListData {
  content: string;
  type: string;
  id: number;
  date: {
    month: string;
    day: string;
  };
}

export interface ListSliceState {
  list: ListData[];
}

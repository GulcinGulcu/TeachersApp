export interface ListData {
  content: string;
  type: string;
  id: string;
  date: {
    month: string;
    day: string;
  };
}

export interface ListSliceState {
  list: ListData[];
}

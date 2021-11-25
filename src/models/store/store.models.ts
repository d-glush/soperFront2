export type DataParams = {
  error: boolean;
  fieldHeight: number;
  fieldWidth: number;
  minesCount: number;
  openedMinesCount: number;
  gameStatus: Status;
  field: Array<Array<Cell>>;
};

export type Status = {
  value: number;
};

export type LoginStatus = {
  status: number;
};

export type Auth = {
  login: string;
  password: string;
};

export type Tables = {
  top: Array<TopTableCol>;
  me: MyTableCol
};

export type MyTableCol = {
  login: string;
  complexity: string;
  date: string;
  gameTime: number;
  stepsCount: number;
  topPlace: number;
};

export type TopTableCol = Omit<MyTableCol, "topPlace">;

export type Cell = {
  cellValue: {
    value: number;
  };
  cellStatus: {
    value: number;
  };
};

export type CellData = {
  x: number;
  y: number;
  type: string;
};

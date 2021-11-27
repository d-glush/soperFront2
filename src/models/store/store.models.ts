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
  saveStatus: number;
};

export type Auth = {
  login: string;
  password: string;
};

export type Tables = {
  topEasy: Array<TopTableCol>;
  topMedium: Array<TopTableCol>;
  topHard: Array<TopTableCol>;
  me: MyTableCol;
};

export type MyTableCol = {
  id: number;
  userId: number;
  login: string;
  complexity: string;
  date: string;
  gameTime: number;
  stepsCount: number;
  position: number,
};

export type TopTableCol = Omit<MyTableCol, "topPlace" | "position">;

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

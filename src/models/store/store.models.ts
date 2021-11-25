export type DataParams = {
  error: boolean;
  fieldHeight: number;
  fieldWidth: number;
  minesCount: number;
  openedMinesCount: number;
  gameStatus: Status;
  field: Array<Array<Cell>>
};

export type Status = {
  value: number,
}


export type LoginStatus = {
  status: number;
}

export type Auth = {
  login: string;
  password: string;
}

export type Cell = {
  cellValue: {
    value: number
  }
  cellStatus: {
    value: number
  }
}

export type CellData = {
  x: number;
  y: number;
  type: string;
}
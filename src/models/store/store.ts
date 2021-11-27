import { ChangeEvent } from "react";
import {
  makeObservable,
  observable,
  action,
  runInAction,
  computed,
} from "mobx";

import service from "./store.service";
import { CellData, DataParams } from "./store.models";
import { Auth, LoginStatus, Tables } from ".";

const initialStoreValues = {
  loginStatus: 0,
  value: "easy",
  data: {
    error: true,
    fieldHeight: 1,
    fieldWidth: 1,
    minesCount: 1,
    openedMinesCount: 1,
    gameStatus: {
      value: 0,
    },
    field: [[{ cellStatus: { value: 1 }, cellValue: { value: 1 } }]],
  },
  tables: {
    topEasy: [{id: 1,userId: 1,login: "",complexity: "",date: "",gameTime: 1,stepsCount: 1},],
    topMedium: [{id: 1,userId: 1,login: "",complexity: "",date: "",gameTime: 1,stepsCount: 1},],
    topHard: [{id: 1,userId: 1,login: "",complexity: "",date: "",gameTime: 1,stepsCount: 1},],
    me: {id: 1,userId: 1,login: "",complexity: "",date: "",gameTime: 1,stepsCount: 1, position: 0},
  }
};

class DatasetStore {
  data: DataParams = initialStoreValues.data;

  value: string = initialStoreValues.value;

  loginStatus: number = initialStoreValues.loginStatus;

  tables: Tables = initialStoreValues.tables;

  constructor() {
    makeObservable(this, {
      data: observable,
      value: observable,
      tables: observable,
      loginStatus: observable,
      updateValue: action.bound,
      loadTable: action.bound,
      loadData: action.bound,
      updateData: action.bound,
      setLoginStatus: action.bound,
      dataItems: computed,
    });
  }

  async loadTable() {
    try {
      const tbls: Tables = await service.getTable();
      runInAction(() => {
        if (tbls) {
          this.tables = tbls;
        }
      });
    } catch (error) {
      console.error(error);
    }
  }
  async loadData(complexity: string) {
    try {
      const date: void | DataParams = await service.getData(complexity);
      runInAction(() => {
        if (date) {
          this.data = date;
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  async setLoginStatus(data: Auth) {
    try {
      const loginStatus: LoginStatus = await service.getLogin(data);
      runInAction(() => {
        this.loginStatus = loginStatus.saveStatus;
      });
    } catch (error) {
      console.log(error);
    }
  }

  updateValue(value: string) {
    switch (value) {
      case "Лёгкий":
        this.value = "easy";
        break;
      case "Средний":
        this.value = "medium";
        break;
      case "Сложный":
        this.value = "hard";
        break;

      default:
        break;
    }
  }

  async updateData(parametrs: CellData) {
    try {
      const date: void | DataParams = await service.updateData(parametrs);
      console.log(date);
      runInAction(() => {
        if (date) {
          this.data = date;
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  get dataItems(): DataParams {
    return this.data;
  }
}

export default new DatasetStore();

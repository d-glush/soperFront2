import { ChangeEvent } from "react";
import {
  makeObservable,
  observable,
  action,
  runInAction,
  computed
} from "mobx";

import service from "./store.service";
import { CellData, DataParams } from './store.models'
import { Auth, LoginStatus } from ".";

const initialStoreValues = {
  loginStatus: 0,
  value: 'easy',
  data: {
    error: true,
    fieldHeight: 1,
    fieldWidth: 1,
    minesCount: 1,
    openedMinesCount: 1,
    gameStatus: {
      value: 0
    },
    field: [
      [{cellStatus: {value: 1}, cellValue: {value: 1}}],
    ]
  },
};

class DatasetStore {
  data: DataParams = initialStoreValues.data;

  value: string = initialStoreValues.value;

  loginStatus: number = initialStoreValues.loginStatus;

  constructor() {
    makeObservable(this, {
      data: observable,
      value: observable,
      loginStatus: observable,
      updateValue: action.bound,
      loadData: action.bound,
      updateData: action.bound,
      setLoginStatus: action.bound,
      dataItems: computed,
    });
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
      console.log(loginStatus);
    } catch (error) {
      
    }
  }

  updateValue(value: string) {
    switch (value) {
      case 'Лёгкий':
        this.value = 'easy';
        break;
      case 'Средний':
        this.value = 'medium';
        break;
      case 'Сложный':
        this.value = 'hard';
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

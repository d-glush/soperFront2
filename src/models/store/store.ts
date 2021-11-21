import { ChangeEvent } from "react";
import {
  makeObservable,
  observable,
  action,
  runInAction,
  computed
} from "mobx";

import service from "./store.service";
import { DataParams } from './store.models'

const initialStoreValues = {
  data: {
    error: true,
    fieldHeight: 1,
    fieldWidth: 1,
    minesCount: 1,
    openedMinesCount: 1,
    gameStatus: {
      value: ''
    },
    field: [
      [{cellStatus: {value: 1}, cellValue: {value: 1}}],
    ]
  },
};

class DatasetStore {
  data: DataParams = initialStoreValues.data;


  constructor() {
    makeObservable(this, {
      data: observable,
      loadData: action.bound,
      dataItems: computed,
    });
  }

  async loadData(complexity: string) {
    try {
      const date: void | DataParams = await service.getData(complexity);
      console.log('date', date);
      runInAction(() => {
        if (date) {
          console.log('jifbhehudnowufhdnoeuhdbjx');
          this.data = date;
          console.log(this.data, 'this.data');
        }
      });
    } catch (error) {
      console.error(error);
    }
  }
  async updateData(parametrs: string) {
    try {
      const date: void | DataParams = await service.updateData(parametrs);
      console.log('date', date);
      runInAction(() => {
        if (date) {
          // console.log('jifbhehudnowufhdnoeuhdbjx');
          // this.data = date;
          // console.log(this.data, 'this.data');
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

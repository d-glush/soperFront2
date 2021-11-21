import axios from "axios";
import { CellData, DataParams } from "./store.models";

const service = {
  getData(data: string): Promise<DataParams | void> {
    const bodyFormData = new FormData();
    bodyFormData.append("gameSettings", data);
    return axios({
      method: "post",
      url: "http://localhost/soper-api/game/start-new-game",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => res.data)
  },
  updateData(data: string): Promise<DataParams | void> {
    const bodyFormData = new FormData();
    bodyFormData.append("gameSettings", data);
    return axios({
      method: "post",
      url: "http://localhost/soper-api/game/make-step",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => res.data)
  },
};

export default service;

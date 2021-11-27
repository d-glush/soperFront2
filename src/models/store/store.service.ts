import axios from "axios";
import { LoginStatus } from ".";
import { CellData, DataParams, Auth } from "./store.models";

const service = {
  getData(data: string): Promise<DataParams | void> {
    const bodyFormData = new FormData();
    bodyFormData.append("gameSettings", `{"complexity": "custom", "fieldHeight": 6, "fieldWidth": 6, "minesCount": 3}`);
    return axios({
      method: "post",
      url: "http://localhost/soper-api/game/start-new-game",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
    })
      .then((res) => res.data)
  },
  updateData(data: CellData): Promise<DataParams | void> {
    const bodyFormData = new FormData();
    bodyFormData.append("x", `${data.x}`);
    bodyFormData.append("y", `${data.y}`);
    bodyFormData.append("type", `${data.type}`);
    return axios({
      method: "post",
      url: "http://localhost/soper-api/game/make-step",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
    })
      .then((res) => res.data)
  },
  getLogin(data: Auth): Promise<LoginStatus> {
    const bodyFormData = new FormData();
    bodyFormData.append("login", `${data.login}`);
    bodyFormData.append("password", `${data.password}`);
    return axios({
      method: "post",
      url: "http://localhost/soper-api/save_result",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
    })
      .then((res) => res.data)
  },
};


export default service;

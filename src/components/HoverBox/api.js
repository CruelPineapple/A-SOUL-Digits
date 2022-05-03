import axios from "axios";

const server = "http://sakurajimama1.ltd";
// const server = "/api"

export function getFans(vmid) {
  return axios.get(server + "/asd/", {
    params: {
      vmid: vmid,
    },
  });
}

export function getLastweek(name) {
  return axios.get(server + "/asd/w", {
    params: {
      name: name,
    },
  });
}

export function getYesterday(name) {
  return axios.get(server + "/asd/y", {
    params: {
      name: name,
    },
  });
}

export function getToday(name) {
  return axios.get(server + "/asd/t", {
    params: {
      name: name,
    },
  });
}

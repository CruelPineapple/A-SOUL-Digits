import axios from "axios";

const server = "http://sakurajimama1.ltd"
// const server = "/api"
const Api = {
    getFans(vmid){
        return axios.get(server + "/asd/",{
            params:{
              vmid: vmid
            }
          })
    },
    getLastweek(name){
        return axios.get(server + "/asd/w",{
            params:{
              name: name
            }
          })
    },
    getYesterday(name){
        return axios.get(server + "/asd/y",{
            params:{
              name: name
            }
          })
    },
    getToday(name){
        return axios.get(server + "/asd/t",{
            params:{
              name: name
            }
          })
    }
}
export default Api
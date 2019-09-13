import axios from 'axios';
export const callAPI = (method,end_point,param) => {
    return axios({
        method: method,
        url: end_point,
        data: param
      });
} 
    


export default callAPI;
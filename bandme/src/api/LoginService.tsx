import axios from 'axios';

const authLoginService = () => {
  return axios.create({
    baseURL: 'http://192.168.0.170:8080/api/v1/login', //'http://192.168.0.56:8089/api/v1/login'
  });
};
export default authLoginService;

import http from "k6/http";
import { sleep } from "k6";

export const options = {
  vus: 10,
  duration: "30s",
};

export default function () {
    const url = ('https://dummyjson.com/auth/login');
    const payload = JSON.stringify({
        username:'kminchelle',
        password: '0lelplR',
    });
    
    const params = {
        headers:{
            'Content-Type' : 'applicaiton/json',
        }

    }

    http.post('https://dummyjson.com/auth/login');
}
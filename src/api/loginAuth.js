import axios from "axios";
import Api from "../Constant/ApiConstant";

const loginAuth = (payload) => {
  return axios.post(
    `${Api.baseUrl}auth/login`,
    payload, //return promise

    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
export default loginAuth;

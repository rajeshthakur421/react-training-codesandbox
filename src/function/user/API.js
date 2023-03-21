import axios from "axios";
import { API } from "../../config";

//https://2q4urh-3000.preview.csb.app/users/create

export const createUser = async (data) =>
  await axios.post(`https://2q4urh-3000.preview.csb.app/users/create`, data, {
    // headers: {
    //   authtoken,
    // },
  });

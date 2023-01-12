import axios from "axios";
import { API } from "../../config";

const User = () => {
  const createUser = async (user) =>
    await axios.post(`${API}/create`, user, {
      headers: {
        authtoken: "",
      },
    });
};

export default User;

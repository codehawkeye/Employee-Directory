import from Axios from "axios";

export default {
    // gett all users
    getUsers: function () {
        return axios.get("https://randomuser.me/api/?results=5000")
    }
};

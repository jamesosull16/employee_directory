import axios from "axios";

const BASEURL =
  "https://randomuser.me/api/?results=25&inc=name,picture,email,phone,dob";

export default {
  search: function (query) {
    return axios.get(BASEURL + query);
  },
};

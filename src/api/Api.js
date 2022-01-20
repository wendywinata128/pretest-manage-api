import axios from "axios";

const API = async () => {
  const request = axios.create({
    baseURL: "https://mitramas-test.herokuapp.com",
  });

  let token = localStorage.getItem("token");
  const expired = localStorage.getItem("expired");
  const dateNowInSecond = Math.round(Date.now() / 1000);

  // Pengecekan manual token apakah sudah expired atau belum
  if (token == null || expired == null || dateNowInSecond - expired >= 0) {
    const { data } = await request.post("/auth/login", {
      email: "wendy@mig.id",
      password: "123456",
    });

    const { access_token, expires_in } = data;

    const dateNowInSecond = Math.round(Date.now() / 1000);
    token = access_token;
    localStorage.setItem("token", access_token);
    localStorage.setItem("expired", dateNowInSecond + expires_in);
  }

  //  Set Token
  request.defaults.headers.common["Authorization"] = token;

  return request;
};

export default API;

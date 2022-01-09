import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "c7ff315d21mshb2f6c3b13919252p15b607jsn876cf6f9e251",
    },
  });

  return data;
};

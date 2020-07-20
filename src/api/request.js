const API_KEY = "8331c0e63f02372a473a46db041c13db";

const request = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOri: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
};

export default request;

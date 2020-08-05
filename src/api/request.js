const API_KEY = "8331c0e63f02372a473a46db041c13db";

const request = {
  fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
  fetchTrendingMovie: `/trending/movie/week?api_key=${API_KEY}`,
  fetchTrendingTV: `/trending/tv/week?api_key=${API_KEY}`,
  fetchNetflixOri: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchMoviePlaying: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
  fetchMovieUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
};

export default request;

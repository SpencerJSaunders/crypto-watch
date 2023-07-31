import axios from "axios";

// Create Axios instance
export const CoinGeckoClient = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/",
});

export const fetchMarketInfo = async (displayAmount) => {
  const response = await CoinGeckoClient.get("/coins/markets", {
    params: {
      vs_currency: "usd",
      per_page: displayAmount,
    },
  });

  return response.data;
};

export const fetchCoinInfo = async (coinId) => {
  const response = await CoinGeckoClient.get(`coins/${coinId}`);
  return response.data;
};

export const getCoinHistory = async (coinId, numberOfDaysInPast, interval) => {
  const response = await CoinGeckoClient.get(`/coins/${coinId}/market_chart`, {
    params: {
      vs_currency: "usd",
      days: numberOfDaysInPast,
      interval,
    },
  });
  return response.data;
};

import baseAxios from "../baseAxios";

async function getTickers(search: string) {
  const { data } = await baseAxios({
    method: 'GET',
    url: '/vX/reference/tickers',
    params: {
      search
    }
  });
  return data;
}

async function getTickerDetails(ticker: string) {
  const { data } = await baseAxios({
    method: 'GET',
    url: `/vX/reference/tickers/${ticker}`,
  });
  return data;
}

async function getDailyStats(ticker: string, date: string) {
  const { data } = await baseAxios({
    method: 'GET',
    url: `/v1/open-close/${ticker}/${date}`,
    params: {
      unadjusted: true
    }
  });
  return data;
}



export {
  getTickers,
  getTickerDetails,
  getDailyStats,
}
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
const baseUrl = "https://kiwirail-survey-cms.herokuapp.com";

export const useGetSurvey = (api) => {
  if (!api) {
    throw new Error("API endpoint is required");
  }

  const url = baseUrl + api;

  const { error, data: data } = useSWR(url, fetcher);

  return { error, data };
};

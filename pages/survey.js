import { useGetSurvey } from "../hooks/GetSurvey";
import { getSessionStorage } from "../hooks/BrowserStorage";
import Head from "next/head";
import Layout from "../components/Layout";
import Progress from "../components/Progress";
import SurveySlider from "../components/SurveySlider";

export default function Survey() {
  const survey = getSessionStorage("survey");
  console.log(survey);
  const api = `/api/${survey}-survey-questions`;
  const { error, data: data } = useGetSurvey(api);

  console.log(data);

  return (
    <>
      {error && (
        <div>
          <p>Code: ${error.status}</p>
          <p>Message: ${error.statusText}</p>
        </div>
      )}
      {!data && <div>Loading...</div>}
      {data && <SurveySlider data={data} />}
    </>
  );
}

Survey.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Head>
        <title>KiwiRail Customer Survey</title>
        <meta property="og:title" content="KiwiRail Customer Survey" key="title" />
      </Head>
      {page}
    </Layout>
  );
};

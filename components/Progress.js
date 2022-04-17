import { getSessionStorage } from "../hooks/BrowserStorage";
import { toTitleCase } from "../hooks/TitleCaseConverter";
import styles from "../styles/survey.module.css";

export default function Progress({ count, length }) {
  const survey = getSessionStorage("survey");
  const surveyHeading = toTitleCase(survey);

  // console.log(surveyHeading);

  return (
    <div className={styles.progress_container}>
      {count === length ? (
        <h1 className={styles.progress_counter}>{surveyHeading} Survey Complete</h1>
      ) : (
        <h1 className={styles.progress_counter}>
          {surveyHeading} Survey Question {count + 1}/{length}
        </h1>
      )}

      <div className={styles.progress_bar_container}>
        <hr className={styles.progress_bar_bg} />
        <hr className={styles.progress_bar} style={{ width: `${(100 / length) * count}%` }} />
      </div>
    </div>
  );
}

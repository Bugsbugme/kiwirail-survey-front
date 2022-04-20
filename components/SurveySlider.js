import { useState } from "react";
import ReactMarkdown from "react-markdown";
import Progress from "../components/Progress";
import styles from "../styles/survey.module.css";

export default function SurveySlider({ data }) {
  const [current, setCurrent] = useState(0);
  const length = data.data.length;

  // console.log(length);
  // console.log(current);

  const nextSlide = () => {
    if (current !== length) {
      setCurrent(current + 1);
    }
  };

  const prevSlide = () => {
    if (current !== 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <>
      <Progress count={current} length={length} />
      <section className={styles.survey}>
        {data.data.map((question, index) => (
          <div
            key={question.index}
            data-testid={question.id}
            className={index === current ? `${styles.survey_slide} ${styles.active}` : `${styles.survey_slide}`}>
            <article className={styles.question_container}>
              <h2 className={styles.question_heading}>{question.attributes.Heading}</h2>
              <ReactMarkdown className={styles.question_body}>{question.attributes.Question}</ReactMarkdown>
            </article>
            <form className={styles.answer_container}>
              <textarea
                className={styles.answer_body}
                type="text"
                name="Answer"
                id="answer_body"
                placeholder="Enter your answer here..."
                required
              />
            </form>
          </div>
        ))}
        <div
          key="survey-complete"
          data-testid="survey-complete"
          className={current === length ? `${styles.complete_page} ${styles.active}` : `${styles.complete_page}`}>
          <article className={styles.complete_container}>
            <div className={styles.complete_body}>
              <p className={styles.complete_heading}>
                You've reached the end of the survey <br />
                Thanks for your time!
              </p>
            </div>
          </article>
          <form className={styles.feedback_container}>
            <p>Do you have any other feedback for us? (optional) </p>
            <textarea
              className={styles.feedback_body}
              type="text"
              name="Feedback"
              id="feedback_body"
              placeholder="Enter your feedback here..."
            />
            <p>Would you like us to contact you about any of the feedback you've given today? (optional)</p>
            <div className={styles.email_container}>
              <input type="text" name="Name" id="user-name" placeholder="Name" />
              <input type="email" name="Email" id="user-email" placeholder="Email" />
            </div>
          </form>
        </div>
        <div className={styles.button_container}>
          <button
            className={current !== length - length ? `${styles.button_active}` : null}
            onClick={current !== length - length ? prevSlide : null}>
            Back
          </button>
          <button
            // className={current < length - 1 ? `${styles.button_active}` : null}
            className={styles.button_active}
            onClick={nextSlide}>
            {current < length - 1 ? <>Next</> : <>Finish</>}
          </button>
        </div>
      </section>
    </>
  );
}

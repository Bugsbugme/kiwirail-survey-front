import { useEffect, useState } from "react";
import Image from "next/image";
import SVG_BannerLogo from "./SVG_BannerLogo";
import { SliderData } from "./SliderData";
import styles from "../styles/slideshow.module.css";

/**
 * It's a slideshow that displays images from an array of objects.
 */
export default function SlideShow() {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;
  const interval = 20000;

  /* It's a function that is called every 20 seconds. It checks if the current slide is the last
  slide. If it is, it will set the current slide to the first slide. If it is not, it will set the
  current slide to the next slide. */
  useEffect(() => {
    const loop = setInterval(() => {
      if (current === length - 1) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    }, interval);
    return () => clearInterval(loop);
  }, [current]);

  /* This is a conditional statement that checks if the SliderData is an array and if the length is
greater than 0. If it is not an array or the length is less than 0, it will return an error message. */
  if (!Array.isArray(SliderData) || length <= 0) {
    return (
      <section className={styles.slide_show}>
        <h2>Error: Cannot retrieve images</h2>
        <SVG_BannerLogo />
      </section>
    );
  }

  /* It's returning a div with a class name of "slide active" if the index is equal to the
  current slide. If the index is not equal to the current slide, it will return a div with a
  class name of "slide". It's also returning an image with the class name of "slide-image". */
  return (
    <section className={styles.slide_show}>
      <div className={styles.slide_container}>
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? `${styles.slide} ${styles.active}` : `${styles.slide}`}
              key={index}
              style={{ transform: `translateY(-${slide.offset}%)` }}>
              <Image
                src={slide.image}
                className={styles["slide-image"]}
                title={slide.title}
                alt=""
                width={slide.width}
                height={slide.height}
                layout="responsive"
                quality={90}
                priority
              />
            </div>
          );
        })}
      </div>
      <a href="https://www.kiwirail.co.nz/media/category/image-library" target="_blank" rel="noreferrer">
        <SVG_BannerLogo />
      </a>
    </section>
  );
}

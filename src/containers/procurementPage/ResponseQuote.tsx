"use client";
import React, { useState } from "react";
import styles from "../../styles/quote.module.scss";
import RequestInfo from "./RequestInfo";
import Terms from "./Terms";
import Review from "./Review";

const ResponseQuote = () => {
  const [step, setStep] = useState(0);

  return (
    <section className={styles.quotes}>
      <div className={styles.quotes_container}>
        <p className={styles.title}>
          <span className={styles.title_span}>Quotes</span> /{" "}
          <span>Quote Response</span>
        </p>

        <header>
          <div
            className={`${styles.step} ${
              step === 0
                ? styles.activeStep
                : step > 0
                ? styles.completedStep
                : ""
            }`}
          >
            <h1>1</h1>
            <div>
              <b>Request Information</b>
              <small>Provide details about the RFQ</small>
            </div>
          </div>

          <div
            className={`${styles.step} ${
              step === 1
                ? styles.activeStep
                : step > 1
                ? styles.completedStep
                : ""
            }`}
          >
            <h1>2</h1>
            <div>
              <b>Terms and Attachments</b>
              <small>Payment and delivery terms</small>
            </div>
          </div>

          <div
            className={`${styles.step} ${
              step === 2
                ? styles.activeStep
                : step > 2
                ? styles.completedStep
                : ""
            }`}
          >
            <h1>3</h1>
            <div>
              <b>Review</b>
              <small>Confirm all information provided</small>
            </div>
          </div>
        </header>

        <div>
          {step === 0 && <RequestInfo step={step} setStep={setStep} />}
          {step === 1 && <Terms step={step} setStep={setStep} />}
          {step === 2 && <Review />}
        </div>
      </div>
    </section>
  );
};

export default ResponseQuote;

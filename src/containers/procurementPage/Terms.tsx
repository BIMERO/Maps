import React from "react";
import Image from "next/image";
import styles from "../../styles/quote.module.scss";

const Terms = ({
  step,
  setStep,
}: {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <section className={styles.terms}>
      <div className={styles.terms_container}>
        <div className={styles.request_title}>
          <h2>Terms and Attachments</h2>
          <p>Provide detailed information on payment and delivery terms</p>
        </div>

        <div className={styles.terms_inputs}>
          <div className={styles.inputs}>
            <label htmlFor="">Payment Terms</label>
            <div>
              <input
                type="text"
                name="payment"
                id="payment"
                value={"Net 30"}
                readOnly
              />
              <Image
                src={"/icons/dropdown.svg"}
                alt="dropdown"
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className={styles.inputs}>
            <label htmlFor="">Delivery Schedule</label>
            <div>
              <input
                type="text"
                name="delivery"
                id="delivery"
                value={"Immediate delivery"}
                readOnly
              />
              <Image
                src={"/icons/dropdown.svg"}
                alt="dropdown"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>

        <div className={styles.terms_inputs}>
          <div className={styles.inputs}>
            <label htmlFor="">Shipping Method</label>
            <div>
              <input
                type="text"
                name="shipping"
                id="shipping"
                value={"Courier Services"}
                readOnly
              />
              <Image
                src={"/icons/dropdown.svg"}
                alt="dropdown"
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className={styles.inputs}>
            <label htmlFor="">Lead time</label>
            <div>
              <input
                type="text"
                name="leading"
                id="leading"
                value={"10"}
                readOnly
              />
              <span>
                Days{" "}
                <Image
                  src={"/icons/dropdown.svg"}
                  alt="dropdown"
                  width={20}
                  height={20}
                />
              </span>
            </div>
          </div>
        </div>

        <div className={styles.terms_upload}>
          <div className={styles.request_title}>
            <h3>Attachments</h3>
            <p>Attach all necessary files or documents</p>
          </div>

          <div className={styles.attachments}>
            <figure>
              <Image
                src={"/icons/upload.svg"}
                alt="upload"
                width={20}
                height={20}
              />
            </figure>
            <p className={styles.fileName}>
              <span>Click to upload</span> or drag and drop
            </p>
            <p className={styles.fileType}>
              SVG, PNG, JPG or GIF (max. 800x400px)
            </p>

            <div className={styles.divider}>
              <span></span>
              <p>OR</p>
            </div>

            <button>Browse Files</button>
          </div>
        </div>

        <div className={styles.request_btns}>
          <button className={styles.cancel}>Cancel</button>
          <button className={styles.save}>Save as draft</button>
          <button className={styles.continue} onClick={() => setStep(step + 1)}>
            Continue
          </button>
        </div>
      </div>
    </section>
  );
};

export default Terms;

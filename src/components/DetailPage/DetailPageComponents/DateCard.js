import React from "react";
import { BsCalendarCheck } from "react-icons/bs";
import styles from "./DateCard.module.css";
import cardImage from "./../../../images/card-image.jpg";
import Card from "../../Card/Card";
import Links from "../../Links/Links";
import Button from "../../Button/Button";

function DateCard() {
  return (
    <div className={`${styles.date_card} container`}>
      <div className="row">
        <div className={`col-sm-6 col-lg-7 p-2 p-md-4 px-md-0`}>
          <img src={cardImage} alt="banner" />
        </div>

        <div className={`col-sm-6 col-lg-5 p-2 p-md-4`}>
          <Card>
            <div>
              <section className="d-flex flex-column justify-content-center gap-3">
                <div
                  className={`${styles.webinar__date} d-flex gap-3 gap-md-2 gap-lg-3 px-0`}
                >
                  <BsCalendarCheck className={styles.calenderCheckIcon} />
                  <section className="d-flex flex-column align-items-start ">
                    <p className="m-0">15 November, 2022</p>
                    <span>17.00-19.00 CET</span>
                  </section>
                </div>
                <p className={styles.title}>
                  Le rôle des différents outils d’évaluation de la
                  polyneuropa-thie démyélinisante inflammatoire chronique (PIDC)
                </p>
                <p className={styles.title}>
                  Speakers:<br></br>
                  <Links>Geneviève Matte</Links>
                </p>
                <Button>Register</Button>
                <div className="d-flex gap-2 px-0">
                  <Button>E-mail</Button>
                  <Button>Share</Button>
                  <Button>Save</Button>
                </div>
              </section>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default DateCard;

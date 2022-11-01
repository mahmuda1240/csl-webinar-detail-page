import React from "react";
import { BsClock } from "react-icons/bs";
import { MdCloudDownload } from "react-icons/md"
import styles from "./DetailPage.module.css";
import speakerImage from "./../../images/speaker.jpg"
import Links from "../Links/Links";
import Card from "../Card/Card";
import DateCard from "./DetailPageComponents/DateCard";
import Button from "../Button/Button";

function DetailPage() {
  return (
    <div className={`${styles.webinar}`}>
      <div className={`${styles.webinar__header} d-flex justify-content-between align-items-center mx-auto container`}>
        <h2 className="mb-0 py-3">Webinars</h2>
        <Links to="/">Show all webinars</Links>
      </div>

      <DateCard></DateCard>

      <div className={`${styles.webinarDetail} col-12 col-md-9 col-lg-8 mx-auto p-4`}>
        <h3>
          Le role des differents outils<br/>
          d'evalutation de la polyneuropathie<br/>
          demyelinisante inflammatoire<br/>
          chronique (PIDC)
        </h3>
        <p className="py-4">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
        <p className="fs-6 fw-normal">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.                 
        </p>
        <h4 className="pt-4">Speakers</h4>
        <div className={`${styles.speakerCard} col-md-3`}>
          <Card>
            <img src={speakerImage} className="img-fluid" alt="speaker"/>
            <div>
              <h4>Geneviève Matte</h4>
              <p className="py-2">Professeure adjointe de clinique Département de neurosciences, Faculté de médecine, Université de Montréal</p>
              <Links>learn more</Links>
            </div>
          </Card>
        </div>
      </div>

      <div className={`${styles.webinarAgenda} container py-5 d-flex flex-column flex-md-row gap-5 w-100`}>

        <div className={`${styles.agendaCol} p-4`}>
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="pb-3">Agenda</h3>
            <BsClock className={`${styles.clockIcon}`}/>
          </div>
          <ul className="p-0 lh-lg">
            <li >17.00-17.15 - Introduction</li>
            <li>17.15-17.30 - Webinar</li>
            <li>17.30-18.30 - Discussion</li>
            <li>18.30-19.00 - Q&A Session</li>
          </ul>                
        </div>
        <div className={`${styles.downloadCol} p-4`}>
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="pb-3">Download</h3>
            <MdCloudDownload className={`${styles.clockIcon}`}/>
          </div>
          <Links>Webinar PPT Presentation</Links>                
        </div>
        {/* <div className="row ">
          <div className="col-md-6">
            <Card>
              
            </Card>
          </div>
          <div className="col-md-6 ">
            <Card>
              <div>
                <div className="d-flex justify-content-between align-items-center">
                  <h3>Download</h3>
                  <MdCloudDownload className={`${styles.clockIcon}`}/>
                </div>
                <div>
                  <Links>Webinar PPT Presentation</Links>
                </div>                
              </div>
            </Card>
          </div>
        </div> */}
      </div>

      <div className="col-10 col-md-6 col-lg-3 mx-auto">
        <Button>ALl Webinars</Button>
      </div>  
      


    </div>
  );
}

export default DetailPage;

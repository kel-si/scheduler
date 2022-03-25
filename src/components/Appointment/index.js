import React from "react";
import "./styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";

export default function Appointment({time, interview}) {
  // const {time} = props;
  return (
    <>
      <article className="appointment">
        {time ? `${time}`: 'No Appointments'}
      </article>
      <header>
        {interview ? 
          <Show 
            student={interview.student}
            interviewer={interview.interviewer.name} 
          /> 
          : <Empty /> }
      </header>
    </>
  )
}
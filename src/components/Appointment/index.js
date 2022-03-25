import React from "react";
import "./styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";

export default function Appointment(props) {
  console.log("propsAppt", props)
  const {time} = props;
  return (
    <>
      <article className="appointment">{time ? `${time}`: 'No Appointments'}</article>
      <header>{props.interview ? <Show student={props.student} interviewer={props.interviewer} /> : <Empty /> }</header>
    </>
  )
}
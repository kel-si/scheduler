import React from "react";
import "./styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import useVisualMode from "hooks/useVisualMode";

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  return (
    <>
      <article className="appointment">
        {props.time ? `${props.time}` : "No Appointments"}
      </article>
      <header>
        {/* {props.interview ? (
          <Show
            student={props.interview.student}
            interviewer={props.interview.interviewer.name}
          />
        ) : (
          <Empty />
        )} */}
        {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
        {mode === SHOW && (
          <Show
            student={props.interview.student}
            interview={props.interview.interviewer}
          />
        )}
      </header>
    </>
  );
}

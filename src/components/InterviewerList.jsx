import React from "react";
import "components/InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";

export default function InterviewerList(props) {

  const interviewListComponents = props.interviewers.map(item => {
    return (
      <InterviewerListItem 
        key={item.id}
        name={item.name}
        avatar={item.avatar}
        selected={props.interviewer === item.id}
        setInterviewer={() => props.setInterviewer(item.id)}
      />
    );
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewListComponents}</ul>
    </section>
  )
}
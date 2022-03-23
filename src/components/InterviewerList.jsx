import React from "react";
import "components/InterviewerListItem.scss";
import InterviewerListItem from "./InterviewerListItem";

export default function InterviewerList() {
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list"></ul>
    </section>
  )
}
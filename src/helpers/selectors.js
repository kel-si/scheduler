export function getAppointmentsForDay(state, day) {
  const arr = state.days.find((element) => day === element.name);

  if (!arr) {
    return [];
  }

  return arr.appointments.map((appointment) => state.appointments[appointment]);
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  const copyInterview = Object.assign({}, interview);
  const interviewerInfo = state.interviewers[interview.interviewer];
  copyInterview.interviewer = interviewerInfo;
  return copyInterview;
}

export function getAppointmentsForDay(state, day) {
  const arr = state.days.find((element) => day === element.name);

  if (!arr) {
    return [];
  }

  return arr.appointments.map((appointment) => state.appointments[appointment]);
}

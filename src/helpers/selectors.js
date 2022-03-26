export function getAppointmentsForDay(state, day) {
  const arr = state.days.find((element) => day === element.name);

  if (!arr) {
    return [];
  }

  const data = arr.appointments.map(
    (appointment) => state.appointments[appointment]
  );
  return data;
}

import { useEffect, useState } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.put(`/api/appointments/${id}`, { interview }).then(() =>
      setState({
        ...state,
        appointments,
        days,
      })
    );
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    return axios.delete(`/api/appointments/${id}`).then(() =>
      setState({
        ...state,
        appointments,
        days,
      })
    );
  }

  useEffect(() => {
    axios
      .all([
        axios.get("/api/days"),
        axios.get("/api/appointments"),
        axios.get("/api/interviewers"),
      ])
      .then((all) => {
        setState((prev) => ({
          ...prev,
          days: all[0].data,
          appointments: all[1].data,
          interviewers: all[2].data,
        }));
      });
  }, []);
  const days = updateSpots(state, appointments, id);

  function getSpotsForDay(day, appointments) {
    let spots = 0;

    // iterate the days appt ids
    for (const id of day.appointments) {
      const appointment = appointments[id];
      if (!appointment.interview) {
        spots++;
      }
    }
    return spots;
  }

  function updateSpots(state, appointments, id) {
    const dayObj = state.days.find((day) => day.name === state.day);

    const spots = getSpotsForDay(dayObj, appointments);

    const day = { ...dayObj, spots };

    return state.days.map((d) => (d.name === state.day ? day : d));
  }

  return { state, setDay, bookInterview, cancelInterview };
}

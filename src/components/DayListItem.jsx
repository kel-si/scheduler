import React from "react";
import classNames from 'classnames';
import "components/DayListItem.scss";

const formatSpots = (spots) => {
  if (spots === 0) {
    return "no spots remaining";
  }
  if (spots === 1) {
    return "1 spot remaining";
  }
  return `${spots} spots remaining`;
};

export default function DayListItem(props) {
  const dayClass = classNames('day-list__item', {'day-list__item--selected': props.selected}, {'day-list__item--full': !props.spots});

  const availability = formatSpots(props.spots);

  return (
    <li onClick={() => props.setDay(props.name)}>
      <h2 className={dayClass}>{props.name}</h2> 
      <h3 className={dayClass}>
        {availability}
      </h3>
    </li>
  );
}

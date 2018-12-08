import React from "react";

export default function IncidentDescription(props) {
  return (
    <div className="IncidentDescription">
      <h2>Инцидент №{props.incident.id}</h2>
      <ul>
        <li>Описание: {props.incident.description}</li>
        <li>Источник: {props.incident.source}</li>
        <li>Дата: {props.incident.date}</li>
      </ul>
    </div>
  );
}

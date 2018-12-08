import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default class IncidentDescription extends React.Component {
  state = {
    value: "",
    copied: false
  };

  render() {
    const { id, description, source, date } = this.props.incident;

    return (
      <div className="IncidentDescription">
        <h2>Инцидент №{id}</h2>
        <ul>
          <li>Описание: {description}</li>
          <li>Источник: {source}</li>
          <li>Дата: {date}</li>
        </ul>

        <CopyToClipboard
          text={description}
          onCopy={() => this.setState({ copied: true })}
        >
          <button>Copy to clipboard with button</button>
        </CopyToClipboard>

        {this.state.copied ? <span>Copied.</span> : null}
      </div>
    );
  }
}

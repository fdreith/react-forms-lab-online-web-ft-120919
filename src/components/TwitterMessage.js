import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      remainingChars: 280
    };
  }

  handleChange = (event) => {
    this.setState({
      remainingChars: (this.props.maxChars) - event.target.value.length,
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          onChange={this.handleChange}
          value={this.state.message} />
        <p>{this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;

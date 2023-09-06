import React, { Component } from "react";

export default class DemoForm4 extends Component {
  // Bước 1: Khai báo state
  constructor() {
    super();
    this.state = {
      checkboxs: {
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      checkboxs: {
        ...this.state.checkboxs,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let submitValue = [];

    for (const key in this.state.checkboxs) {
      //   console.log(this.state.checkboxs[key]);
      if (this.state.checkboxs[key] === "on") {
        console.log("Thành công");
        submitValue.push(key);
      }
    }

    console.log(submitValue);
  };

  render() {
    return (
      <div onSubmit={this.handleSubmit}>
        <h1>Demo Form 4 - Checkbox</h1>
        <form>
          <label>
            <input
              type='checkbox'
              name='checkbox1'
              checked={this.state.checkboxs.checkbox1}
              onChange={this.handleChange}
            />
            Checkbox 1
          </label>
          <br />
          <label>
            <input
              type='checkbox'
              name='checkbox2'
              checked={this.state.checkboxs.checkbox2}
              onChange={this.handleChange}
            />
            Checkbox 2
          </label>
          <br />
          <label>
            <input
              type='checkbox'
              name='checkbox3'
              checked={this.state.checkboxs.checkbox3}
              onChange={this.handleChange}
            />
            Checkbox 3
          </label>
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";

export default class StatefulTabSelect
  extends Component
{

  static propTypes = {
    initialValue: PropTypes.string,
    value: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func
  };

  state = { value: null };

  static defaultProps = {
    value: null,
    options: [],
    onChange: () => {}
  };

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log("get derived", nextProps, prevState);

  //   return {
  //     ...prevState,
  //     value: nextProps.value || nextProps.initialValue
  //   };
  // }

  handleSelect = (selected) => {
    console.log(selected)
    this.setState({ value: selected });
    this.props.onChange(selected);
  };

  render() {
    console.log("render", this.state);
    const { value } = this.state;
    const { options } = this.props;
    return (
      <div className="tab-selector">
        <ul>
          {
            options.map((opt) => (
              <li
                key={opt.value}
                className={`tab-item ${
                  opt.value === value
                    ? "selected"
                    : ""
                }`}
                style={
                  opt.value === value
                    ? {backgroundColor: value}
                    : {}
                }
                onClick={() =>
                  this.handleSelect(opt.value)
                }
              >
                {opt.name}
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

// mock data
const options = [
  { name: "Red", value: "red" },
  { name: "Blue", value: "blue" },
  { name: "Orange", value: "orange" }
];

export class StatefulTabSelectSample
  extends PureComponent 
{
  render() {
    return (
      <div>
        Select color:
        <StatefulTabSelect
          options={options}
          initialValue="red"
        />
      </div>
    );
  }
}

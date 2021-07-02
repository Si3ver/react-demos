/**
 * 非受控组件
 * 状态由子组件内部自己维护
 */

import React, { Component, PureComponent } from "react";
import PropTypes from "prop-types";

export default class StatefulTabSelect
  extends Component {

  static propTypes = {
    initialValue: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func
  };

  state = { value: null };

  static defaultProps = {
    initialValue: null,
    options: [],
    onChange: () => { }
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("默认值", nextProps, prevState);

    return {
      value: prevState.value || nextProps.initialValue,
    };
  }

  handleSelect = (selected) => {
    this.setState({ value: selected });
    this.props.onChange(selected);  // 作用：通知父组件～
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
                className={`tab-item ${opt.value === value
                    ? "selected"
                    : ""
                  }`}
                style={
                  opt.value === value
                    ? { backgroundColor: value }
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
  extends PureComponent {
  handleChange = (value) => {
    console.log(`当前值: ${value}`)
  }

  render() {
    return (
      <div>
        Select color:
        <StatefulTabSelect
          options={options}
          initialValue="red"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

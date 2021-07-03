/**
 * 受控组件
 * 状态来自外部，需要传入 value 和 onChange
 */

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./TabSelector.css";

class TabSelector extends PureComponent {
  static propTypes = {
    value: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func
  };

  static defaultProps = {
    value: null,
    options: [],
    onChange: () => { }
  };

  render() {
    const { options, value, onChange } = this.props;

    return (
      <div className="tab-selector">
        <ul>
          {options.map(opt => (
            <li
              key={opt.value}
              className={`tab-item ${opt.value === value
                  ? "selected"
                  : ""
                }`}
              style={
                opt.value === value ? {
                  backgroundColor: opt.value
                } : {}
              }
              onClick={() =>
                onChange(opt.value)
              }
            >
              {opt.name}
            </li>
          ))}
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

class TabSelectorSample extends PureComponent {
  state = {
    color: null
  };

  render() {
    return (
      <div>
        Select color:{" "}
        <TabSelector
          options={options}
          value={this.state.color}
          onChange={c => this.setState({ color: c })}
        />
      </div>
    );
  }
}

export { TabSelectorSample }

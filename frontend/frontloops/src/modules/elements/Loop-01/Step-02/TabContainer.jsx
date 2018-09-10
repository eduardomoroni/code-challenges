import React, { Component, Fragment } from "react";
import "./TabContainer.css";

const TabButton = props => {
  const { title, id } = props;
  const isActive = id === props.selectedTab;
  return (
    <div
      className={`tabs__button ${isActive ? "tabs__button--active" : ""}`}
      key={id}
      onClick={e => props.onClick(e, id)}
    >
      {title}
    </div>
  );
};

const TabContent = props => {
  const isActive = props.id === props.selectedTab;
  return (
    <div
      className={`tabs__content ${isActive ? "tabs__content--active" : ""}`}
      key={props.id}
    >
      {props.content}
    </div>
  );
};

export class TabContainer extends Component {
  static Tab = props => <Fragment {...props} />;
  state = {
    selectedTab: "1",
    tabInput: null
  };

  updateSelectedTab = (e, value) => {
    e.preventDefault();
    this.setState({ selectedTab: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ ...this.state, selectedTab: this.state.tabInput });
  };

  handleChange = event => {
    this.setState({ tabInput: event.target.value });
  };

  mapProps = ({ props }) => ({
    ...props,
    selectedTab: this.state.selectedTab,
    onClick: this.updateSelectedTab
  });
  toButton = child => <TabButton {...this.mapProps(child)} />;
  toContent = child => <TabContent {...this.mapProps(child)} />;

  render() {
    const { children } = this.props;

    return (
      <div className="tabs-container">
        <form className="tabs__change-form" onSubmit={this.handleSubmit}>
          <input
            className="input"
            type="number"
            name="tabInput"
            placeholder="Enter tab index"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <div className="tabs__change-button">
            <button className="button">Change tab</button>
          </div>
        </form>

        <div className="tabs__buttons">
          {React.Children.map(children, this.toButton)}
        </div>

        {React.Children.map(children, this.toContent)}
      </div>
    );
  }
}

import React, {Component, Fragment} from 'react';
import "./SegmentedControl.css";

const SegmentedControlButton = (props) => {
  const isActive = props.selectedValue === props.value ? "segmented-control__button--active" : "";
  return (
    <button className={`segmented-control__button ${isActive}`}
            data-value={props.value}
            onClick={(e) => props.onClick(e, props.value)}>
      {props.text}
    </button>
  );
};

const SegmentedControlOption = (props) => <option value={props.value}>{props.text}</option>;

export class SegmentedControl extends Component {
  static Item = () => <Fragment/>;
  state = {
    selectedValue: "1",
  };

  updateSelectedValue = (e, value) => {
    e.preventDefault();
    this.setState({selectedValue: value || e.target.value});
  };

  mapProps = (props) => ({ ...props,  selectedValue: this.state.selectedValue, onClick: this.updateSelectedValue });
  toRow = ({props}) => <SegmentedControlButton {...this.mapProps(props)} />;
  toOption = ({props}) => <SegmentedControlOption {...this.mapProps(props)} />;

  render() {
    const {children} = this.props;
    return (
      <div className="segmented-control">
        <div className="segmented-control__row">
          {React.Children.map(children, this.toRow)}
        </div>
        <select className="segmented-control__select" value={this.state.selectedValue} onChange={this.updateSelectedValue}>
          {React.Children.map(children, this.toOption)}
        </select>
      </div>
    );
  }
}

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

const SegmentedControlOption = (props) => {
  const isSelected = props.selectedValue === props.value;
  return (
    <option value={props.value}
            selected={isSelected}>{props.text}</option>
  );
};

const SegmentedControlItem = () => (
  <Fragment/>
);

export class SegmentedControl extends Component {
  static Item = SegmentedControlItem;
  state = {
    selectedValue: "1",
  };

  updateSelectedValue = (e, value) => {
    e.preventDefault();
    this.setState({selectedValue: value});
  };

  toRow = ({props}) => <SegmentedControlButton {...props} selectedValue={this.state.selectedValue}
                                               onClick={this.updateSelectedValue}/>;
  toOption = (element) => (<SegmentedControlOption {...element.props} selectedValue={this.state.selectedValue}
                                                   onClick={this.updateSelectedValue}/>);

  render() {
    const {children} = this.props;
    return (
      <div className="segmented-control">
        <div className="segmented-control__row">
          {React.Children.map(children, this.toRow)}
        </div>
        <select className="segmented-control__select">
          {React.Children.map(children, this.toOption)}
        </select>
      </div>
    );
  }
}

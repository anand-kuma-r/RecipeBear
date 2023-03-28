import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import "./Sort.css";

const options = [{ value: '1', label: 'Popular' }, { value: '2', label: 'Best' }, { value: '3', label: 'Worst' }];
  
  const arrowClosed = (
    <span className="arrow-closed" />
  )
  const arrowOpen = (
    <span className="arrow-open" />
  )
  
  class SortButton extends Component {
    constructor (props) {
      super(props)
      this.state = {
        selected: ''
      }
    }
    handleDropdownChange = (event) => {
    const selectedValue = event.value;
    console.log(`Selected value: ${selectedValue}`);
    this.setState({
      selected: selectedValue
    });
  }
    render () {
      const defaultOption = this.state.selected
  
      return (
        <section>
          <Dropdown
            arrowClosed={arrowClosed}
            arrowOpen={arrowOpen}
            options={options}
            value={defaultOption}
            placeholder="Sort"
            onChange={this.handleDropdownChange}
          />
        </section>
      )
    }
  }
  
  export default SortButton
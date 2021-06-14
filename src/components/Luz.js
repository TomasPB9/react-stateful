import React from 'react';
import '../css/Luz.css';
import PropTypes from "prop-types";


class Luz extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      color: 'pink',
    }
  }

  render(){
    console.log(this.state.color);
    console.log(this.props.colorLuz);
    return(
      <div style={{backgroundColor: this.props.colorLuz || this.state.color}} className="luz"></div>
    )
  }
};

Luz.propTypes = {
  colorLuz: PropTypes.string,
}

export default Luz;
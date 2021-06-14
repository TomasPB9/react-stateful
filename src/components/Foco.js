import React from 'react';
import '../css/Foco.css';
import Luz from './Luz';
import PropTypes from "prop-types";


const Foco = (props) => {
  return(
    <div className="foco">
      <Luz colorLuz={props.colorLuz}/>
    </div>
  )
}

Foco.propTypes = {
  colorLuz: PropTypes.string,
}


// class Foco extends React.Component {

//   constructor(props){
//     super(props);
//     this.state = {
//       color: 'red',
//     }
//   }

//   render() {
//     return (
//       <div className="foco">
//         <Luz colorLuz={this.props.colorLuz} />
//       </div>
//     );
//   }
// };

export default Foco;
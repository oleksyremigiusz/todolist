import React from 'react';
import {connect} from 'react-redux';

const ToDoList = (props) => {
    return ( 
        <div>
            czes {props.title}
        </div>
     );
}
 
const mapStateToProps = state => {
    return{
      title: state.title
    }
  }

export default connect(mapStateToProps)(ToDoList);
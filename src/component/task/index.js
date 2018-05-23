import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteTask} from '../../actions/';


class Task extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log('this.props')
        console.log(this.props)
        return(       
            <tr>
                <td>{this.props.task}</td>
                <td>
                    <button onClick={()=>{this.props.deleteTask(this.props.id)}}>Delete Task</button>
                </td>                
            </tr>
            
        );
    }
};


const mapDispatchToProp =(dispatch)=>{
    return{
        deleteTask:(id)=>{
       dispatch(deleteTask(id))
      }
    }
   }
export default connect(()=>{return{}},mapDispatchToProp)(Task)
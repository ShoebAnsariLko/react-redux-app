import React, { Component } from 'react';
import TaskList from './component/tasklist/';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTask} from './actions';

class App extends Component {
  render() {
    return (
      <div>
       <div>
          <h1>Header</h1>
          <input type="text" ref="task" placeholder="add employee"/>
          <button onClick={()=>this.props.addTask(this.refs.task.value)}>ADD Task</button>
        </div>
      <TaskList/>
      </div>
    );
  }
}

const mapDispatchToProp =(dispatch)=>{
 return{
   addTask:(a)=>{
    dispatch(addTask(a))
   }
 }
}
export default connect(()=>{return {};},mapDispatchToProp)(App)

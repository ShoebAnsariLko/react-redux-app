import React from 'react';
import {connect} from 'react-redux';
import Task from '../task/'
class TaskList extends React.Component{
    render(){
        return(
            <table>
                    <thead>
                        <tr>
                            <th>Task </th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.tasks.map((task,index)=><Task id={index} key={index} task={task} />)}
                    </tbody>
            </table>
        )
    }
}
const  mapStateToProp=(state)=>{
    return {
        tasks:state.tasks
    }
}
export default connect(mapStateToProp)(TaskList)
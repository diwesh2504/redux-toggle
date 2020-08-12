import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../../actions/todoActionCreator'
import TodoList from './TodoList';
const TodoForm =(props)=>{
    
    const [input,setInput]=React.useState("");
    const handleSubmit=(e)=>{
        props.addTodo(input);
        setInput("");
    }
    return(
        <div className="container" style={{marginTop:"10px"}}>
            <div className="row">
                <div className="col"></div>
                <div className="col-6">
                <div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter tasks to be done.." value={input} onChange={(e)=>setInput(e.target.value)}></input>
                    </div>
                   <div className="form-group"> <button className="btn btn-success" onClick={handleSubmit}>Add Todo</button></div>
                    </div>
                <TodoList/>
                </div>
                <div className="col"></div>
             
            </div>
        </div>
    );
}
const mapDispatchToProps=(dispatch)=>{
    return{
      addTodo:(itemStr)=>dispatch(addTodo(itemStr))
    }
  }
  export default connect(null,mapDispatchToProps)(TodoForm);
import React from 'react';
import {connect} from 'react-redux';
import {deleteTodo} from '../../actions/todoActionCreator';
const TodoList=(props)=>{
    const[status,setStatus]=React.useState(false);
    const [completed,setCompleted]=React.useState(0);
    const handleDelete=(e)=>{
        props.deleteTodo(+e.target.id)
        
    }
    const handleComplete=(e)=>{
      if(status===false)
      {e.target.style.textDecoration="line-through";
      setStatus(true);
      setCompleted(completed+1);
      }
      else{
      e.target.style.textDecoration="";
      setStatus(false);
      setCompleted(completed-1);
      }
    }
    
    
    return(
        <>
        <h4>No.of Tasks:{props.todos.length}</h4>
        <ul className="list-group">
           {props.todos.map((item,index)=>{
               return(
                
                <li key={item.id} onClick={handleComplete}className="list-group-item">{item.title}
                <span className="float-right"><button id={item.id} className="btn btn-outline-danger" onClick={handleDelete}>Delete</button></span>
                </li>
               );
            })}   
        </ul>
          <h6>Completed:{completed}</h6>
        </>
    );
}
const mapStateToProps=(state)=>{
    return{
      todos:state.todos
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
      deleteTodo:(id)=>dispatch(deleteTodo(id))
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
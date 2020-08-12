import React from 'react';
import {connect} from 'react-redux';
import TodoForm from './TodoForm';


const TodoMain=(props)=>{
    
    
    return (
     <> 
    <TodoForm/>
    
    </>
    )

}



export default connect()(TodoMain)
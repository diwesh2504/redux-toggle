import React from 'react';
import {connect} from 'react-redux';
const Comments=(props)=>{
    const [display,setDisplay]=React.useState();
    
    
    React.useEffect(()=>{
        setDisplay(props.posts.map((item)=>{
            if(item.id==props.id){
                return {...item}
            }
        }))
        
    },[props.posts,props.id])
    return(
        <div className="card" >
        <ul className="list-group list-group-flush">
            
        </ul>
            
        </div>
    )

}

const matchStateToProps=(state)=>{
    return{
        posts:state.status
    }
}

export default connect(matchStateToProps,null)(Comments)
import React from 'react';
import {connect} from 'react-redux';
import {addLikes} from '../../actions/facebookActionCreator';
import {addComments} from '../../actions/facebookActionCreator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import Comments from './Comments'
import '../../styles.css'
const Posts=(props)=>{
   
    
    const [input,setInput]=React.useState({});
    const handleLikes=(e)=>{
        let id=+e.target.id;
        props.addLikes(id);

    }
    const handleInput=(e)=>{
        const {id, value} = e.target;
        setInput({...input,[id]:value})
        
    }
    const handleComment=(e,id)=>{
        let idx=+e.target.id;
        props.addComments(idx,input[id]);
        setInput({...input,[id]:""})

    }
    return(
        <div>
        {props.posts.map((item,index)=>{

            return(
                <div className="card" style={{marginTop:"10px"}}>
                    
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">Status {index+1}&nbsp;</h6>
                        <p className="for-status">{item.status}</p>
                        <button id={item.id} onClick={handleLikes}className="btn btn-outline-info btn-sm"><FontAwesomeIcon icon={faThumbsUp}/></button>
                        <p className="for-subscript">{item.likes} people like this</p>
                        <div style={{fontSize:"14px"}}>
                        {
                            item.comments.map((comm)=>{
                            return (
                                <ul className="list-group">
                                   <li className="list-group-item">{comm}</li>
                                </ul>
                            )
                            })
                        }
                        </div>
                    </div>
                    <div className="form-row" style={{marginTop:"10px"}}>
                    <div className="col-8" style={{marginLeft:"20px",marginBottom:"10px"}}><input id={index}  type="text" value={input[index]} className="form-control form-control-sm" onChange={handleInput} ></input></div>
                    <div className="col"style={{marginLeft:"5px"}}><button id={item.id} className="btn btn-outline-success btn-sm" onClick={(e)=>handleComment(e,index)}>Comment</button></div>
                </div>
                </div>
            )
        })}
        </div>
    );
}
const mapStateToProps=(state)=>{
    return{
        posts:state.status 
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        addLikes:(id)=>dispatch(addLikes(id)),
        addComments:(id,comm)=>dispatch(addComments(id,comm))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Posts);
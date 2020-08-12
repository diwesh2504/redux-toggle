import React from 'react';
import {connect} from 'react-redux';
import {addStatus} from '../../actions/facebookActionCreator';
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Composer=(props)=>{
    const [input,setInput]=React.useState("");
    const handleSubmit=()=>{
        console.log(input);
        props.addStatus(input);
        setInput("");
    }
    return(
        <div className="card">
        
        <div className="card-body">
          <h5 className="card-title"><FontAwesomeIcon icon={faFacebookSquare} color="blue"/>&nbsp;What's on your mind?</h5>
          <div className="form-group">
            <textarea className="form-control" type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Let the world know..:)"></textarea>

          </div>
          
          <button className="btn btn-outline-dark" onClick={handleSubmit}>Add Status</button>
        </div>
      </div>
    );
}
const mapDispatchToProps=(dispatch)=>{
    return{
    addStatus:(str)=>dispatch(addStatus(str))
    }
}
export default connect(null,mapDispatchToProps)(Composer);
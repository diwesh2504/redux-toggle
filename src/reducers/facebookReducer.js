export const facebookReducer=(state=[],action)=>{
    switch(action.type){
        case "ADD_STATUS":
          const id=Math.floor(Math.random()*1000)+1;
          const obj={id:id,status:action.status,likes:0,comments:[]}
          return [...state,obj];
        case "ADD_LIKES":
            return [...state].filter((item)=>{
                if(item.id===action.id){
                    item.likes+=1
                    return {...item}
                }else{
                    return {...item}
                }
                })
        case "ADD_COMMENTS":
            return [...state].filter((item)=>{
                if(item.id===action.id){
                    item.comments.push(action.comment)
                    return {...item}
                }else{
                    return {...item}
                }
                })

          default:
              return state;

    }

}
export const addStatus=(str)=>{
    return {type:"ADD_STATUS",status:str};
}
export const addLikes=(id)=>{
    return {type:"ADD_LIKES",id}
}
export const addComments=(id,comm)=>{
    return {type:"ADD_COMMENTS",id,comment:comm}
}
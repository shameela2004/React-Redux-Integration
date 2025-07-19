const initialstate=0
const counterReducer=(state=initialstate,action)=>{
    switch(action.type){
        case "increment":
            return state+1 
        case "decrement":
            return state>0?state-1:state 
        default:
            return state        
    }
}
export default counterReducer
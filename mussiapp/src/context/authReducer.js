export const authReducer =(state,action)=>{
    switch(action.type){
        case 'LOGIN':
            return {...state,user:action.payload}
        case 'LOGOUT':
            return{...state,authIsReady:null,user:null}   
        case 'AUTH_READY':
            return {authIsReady:true, user:action.payload}
        default:
            return state    
    }
}
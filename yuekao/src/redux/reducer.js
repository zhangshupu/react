let init={
    list:[]
}

const handleList=(state,action)=>{ 
    let data=[...state];
    switch(action.type){
        case 'NEWLIST':
            return action.palyload;
        case 'LIST_INDEX':
            data.forEach((item)=>{
                if(item.id==action.palyload){
                    item.reade=true
                }
            })
            return data
        default:
            return state
    }
}
export default (state=init,action)=>{
    return {
        list:handleList(state.list,action)
    }
}
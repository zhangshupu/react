let init ={
    list:[],
    isLogine:false,
    isCover:false
}
const handleList=(state,action)=>{
    let data=[...state]
    switch(action.type){
        case 'NEWOBJ':
            return action.playload.list;
        case 'SHOWGOU':
            data.forEach((item)=>{
                if(item.id==action.playload){
                    item.isSelect=true;
                    item.num=1
                }
            })
            return data
        case 'MINUS':
            data.forEach((item)=>{
                if(item.id==action.playload){
                    item.num-=1;
                    if(item.num<=0){
                        item.num=0;
                        item.isSelect=false
                    }
                }
            })
            return data
        case 'PLUS':
            data.forEach((item)=>{
                if(item.id==action.playload){
                    item.num+=1;
                }
            })
        default:
            return state
    }
}
const handleLogine=(state,action)=>{
    switch(action.type){
        case 'NEWOBJ':
            return action.playload.isLogine;
        case 'LOGINE':
            return true;
        default:
            return state
    }
}
const HandleisCover=(state,action)=>{
    switch(action.type){
        case 'NEWOBJ':
            return action.playload.isCover;
        case 'COVER':
            return !state
        default:
            return state
    }
}
export default (state=init,action)=>{
    console.log(state)
    return {
        list:handleList(state.list,action),
        isLogine:handleLogine(state.isLogine,action),
        isCover:HandleisCover(state.isCover,action)
    }
}
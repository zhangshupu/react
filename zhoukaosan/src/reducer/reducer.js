let init={
    list:[
        {
            "icon":'icon-zanting',
            "name":'暂停',
            "isSlece":false
        },{
            "icon":'icon-zanting1',
            "name":'暂停',
            "isSlece":false
        },{
            "icon":'icon-tianmao',
            "name":'天猫',
            "isSlece":false
        },{
            "icon":'icon-suijibofang',
            "name":'随机播放',
            "isSlece":false
        },{
            "icon":'icon-28',
            "name":'空间',
            "isSlece":false
        },{
            "icon":'icon-50',
            "name":'安全',
            "isSlece":false
        },{
            "icon":'icon-suijibofang1',
            "name":'随机播放',
            "isSlece":false
        }
    ]
}
const handleList=(state,action)=>{
    let data=[...state]
    switch(action.type){
        case 'NEWLIST':
            data[action.playload].isSlece=!data[action.playload].isSlece
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
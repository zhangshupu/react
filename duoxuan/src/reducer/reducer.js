let init = {
    list: [{
            "name": "旋螺邯钢",
            "isSelect": false
        }, {
            "name": "热镀锌",
            "isSelect": false
        }, {
            "name": "角钢",
            "isSelect": false
        }, {
            "name": "知槽钢",
            "isSelect": false
        }, {
            "name": "工业线材",
            "isSelect": false
        }, {
            "name": "元培",
            "isSelect": false
        }, {
            "name": "钢管制品",
            "isSelect": false
        }, {
            "name": "彩涂",
            "isSelect": false
        }

    ],
    isSelectAll:false
}
const handleList = (state, action) => {
    let list=[...state]
    switch (action.type) {
        case 'CLICK_LIST':
            if(action.palyload[1]){
                list.forEach((item,index)=>{
                    if(index==action.palyload[0]){
                        item.isSelect=!item.isSelect
                    }
                })
            }else{
                list.forEach((item,index)=>{
                    if(index==action.palyload[0]){
                        item.isSelect=!item.isSelect
                    }else{
                        item.isSelect=false
                    }
                })
            }
            return list;
        case 'NEWLIST':
            list.forEach((item,index)=>{
                if(index==0){
                    item.isSelect=true
                }else{
                    item.isSelect=false
                }
            })
            return list;
        case 'CLEARALL':
            list.forEach((item,index)=>{
                item.isSelect=false
            })
            return list;
        default: return state;
    }
}
const handleAll = (state, action) => {
    switch (action.type) {
        case 'SELECTALL':
            return !state 
        default: 
            return state
    }
}
export default (state = init, action) => {
    return {
        list: handleList(state.list, action),
        isSelectAll:handleAll(state.isSelectAll,action)
    }
}
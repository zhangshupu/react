let initialState={
    list:[],
    countryIndex:0,
    provinceIndex:0
}
const handleList=(state,action)=>{
    switch(action.type){
        case 'INITIAL_LIST':
            return action.payload;
        default:
            return state
    }
}
const handleCountry=(state,action)=>{
    switch(action.type){
        case 'COUNTRY_LIST':
            return action.payload
        default:
            return state
    }
}
const handleprovince=(state,action)=>{
    switch(action.type){
        case 'PROVINCES_LIST':
            return action.payload
        default:
            return 0
    }
}
export default (state=initialState,action)=>{
    return {
        list:handleList(state.list,action),
        countryIndex:handleCountry(state.countryIndex,action),
        provinceIndex:handleprovince(state.provinceIndex,action)
    }
}
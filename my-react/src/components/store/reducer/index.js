import {INCREASE,DECREASE,SET} from '../action'

const initialState = [
    {name:'ch',age:13,id:1412},
    {name:"wmq",age:13,id:1241}
]
    

// reducer 必须也必须是一个没有副作用的纯函数，和action一样，所以不能直接改变参数的值
export default function reducer(state = initialState, {type, payload}) {
    console.log(state,'-------------s')
    switch(type) {
        case INCREASE:
            return [ ...state, payload ]
        case DECREASE:
            return state.filter(item => item.id !== payload.id)
        case SET:
            return state.map(item => item.id === payload.id ? { ...item, ...payload } : item)
    }
}
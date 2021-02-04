// import {StoreCreator} from "redux"
import { createStore } from 'redux'
import reducer from "./reducer"
import { createActionIncrease } from "./action"

const store = createStore(reducer)
console.log(store)
const user = {
    name:'chiles',
    age:12,
    id:1211
}
console.log(store.getState())
store.dispatch(createActionIncrease(user))
console.log(store.getState())
store.dispatch(createActionIncrease({name:'13'}))
console.log(store.getState())


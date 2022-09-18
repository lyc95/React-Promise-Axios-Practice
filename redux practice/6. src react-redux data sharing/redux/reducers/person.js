import { ADD_PERSON } from "../constant";

//initialize the persons array
const initState = [{id:'001', name:'tom', age:18}]
export default function PersonReducer(prevState = initState, action) {
    const {type, data} = action
    switch (type) {
        case ADD_PERSON:
            return [data, ...prevState]
        default:
            return prevState;
    }
}
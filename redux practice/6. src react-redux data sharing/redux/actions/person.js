import { ADD_PERSON } from "../constant";
//create an action for adding person
export const createAddPersonAction = p => ({type:ADD_PERSON, data:p})
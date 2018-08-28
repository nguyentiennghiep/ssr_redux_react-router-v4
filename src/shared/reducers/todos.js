import * as types from "../constant/index";
const ini = {
    todos: []
};

const todoRedu = (state = ini, action) => {
    switch (action.type) {
        case types.ALL :{
            console.log(action);
            return action.todos;
        }
        default: return { ...state };
    }
}

export default todoRedu;
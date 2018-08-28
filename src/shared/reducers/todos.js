import * as types from "../constant/index";
const ini = {
    todos: [{
        id: "1",
        name : "name"
    }]
};

const todoRedu = (state = ini, action) => {
    switch (action.type) {
        case types.ALL :{
            state.todos = action.todos;
            return {...state};
        }
        default: return { ...state };
    }
}

export default todoRedu;
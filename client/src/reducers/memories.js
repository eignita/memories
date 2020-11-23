import { CREATE, UPDATE, FETCH_ALL } from '../constants/constant';

const memories = (state = [], action) => {
    switch(action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...memories, action.payload];
        case UPDATE:
            return memories.map((memory) => memory._id === action.payload._id ? action.payload : memory);
        default:
            return state;
    }
}

export default memories;
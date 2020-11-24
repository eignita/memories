import { CREATE, UPDATE, FETCH_ALL, DELETE, LIKE } from "../constants/actionTypes";

//const initialState = [{ title: '', message: '', creator: '', tags: '', selectedFile: ''}];
const memoriesReducer = (memories = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...memories, action.payload];
    case UPDATE:
    case LIKE:
      return memories.map((memory) => memory._id === action.payload._id ? action.payload : memory);
    case DELETE:
      return memories.filter((memory) => memory._id !== action.payload);
    default:
      return memories;
  }
};

export default memoriesReducer;

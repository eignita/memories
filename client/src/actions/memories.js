import * as api from "../api";

const FETCH_ALL = "FETCH_ALL";
const CREATE = "CREATE";

// Action creators
export const getMemories = () => async (dispatch) => {
  try {
    const { data } = await api.fetchMemories();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createMemory = (newMemory) => async (dispatch) => {
  try {    
    const { data } = await api.createMemory(newMemory);
    dispatch({type: CREATE, payload: data});
  } catch (error) {
    console.log(error);
  }
};

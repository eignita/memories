import axios from "axios";

//const url = "http://localhost:5000/memories";
const url = "https://wow-memories.herokuapp.com/memories";

export const fetchMemories = () => axios.get(url);
export const createMemory = (newMemory) => axios.post(url, newMemory);
export const updateMemory = (id, Memory) => axios.patch(`${url}/${id}`, Memory);
export const deleteMemory = (id) => axios.delete(`${url}/${id}`);
export const likeMemory = (id) => axios.patch(`${url}/${id}/likememory`);
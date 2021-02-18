import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000"});

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
})

//const url = "https://wow-memories.herokuapp.com/memories";

export const fetchMemories = () => API.get('/memories');
export const createMemory = (newMemory) => API.post('/memories', newMemory);
export const updateMemory = (id, Memory) => API.patch(`/memories/${id}`, Memory);
export const deleteMemory = (id) => API.delete(`/memories/${id}`);
export const likeMemory = (id) => API.patch(`/memories/${id}/likememory`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

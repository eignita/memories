const memories = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...memories, action.payload];
        default:
            return state;
    }
}

export default memories;

export const bookReducer = (state, action) => {
    switch(action.type){
        case 'ADD_BOOK':
            return [
                ...state,
                {
                    title:action.book.title,
                    author: action.book.author,
                    id: '_' + Math.random().toString(36).substr(2,9)
                }
            ]
        case 'REMOVE_BOOK':
            return state.filter(book => book.id !== action.id)
        default:
            return state
    }
}
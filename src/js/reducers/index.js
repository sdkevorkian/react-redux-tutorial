import { ADD_ARTICLE, DATA_LOADED } from "../constants/action-types";

const initalState = {
    articles: [{
        title: 'test',
        id: 1
    }],
    remoteArticles: []
};

function rootReducer(state = initalState, action){
    if(action.type===ADD_ARTICLE){
        if(!action.payload.id){
            action.payload.id = state.articles[state.articles.length - 1].id + 1
        }
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }
    if(action.type === DATA_LOADED){
        return Object.assign({}, state, {
            remoteArticles: state.remoteArticles.concat(action.payload)
        })
    }
    return state;
}

export default rootReducer;
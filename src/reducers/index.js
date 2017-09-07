import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';
import SelectedPostsReducer from './reducer_selected_posts';

const rootReducer = combineReducers({
    posts: PostsReducer,
    form: formReducer,
    selectedPostIds: SelectedPostsReducer,
});

export default rootReducer;

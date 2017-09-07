import { createSelector } from 'reselect';

const postsSelector = state => state.posts;
const selectedPostsSelector = state => state.selectedPostIds;

const getPosts = (posts, selectedPostIds) => {
    return _.filter(
        posts,
        post => _.contains(selectedPostIds, post.id)
    );
}

export default createSelector(
    postsSelector,
    selectedPostsSelector,
    getPosts
);


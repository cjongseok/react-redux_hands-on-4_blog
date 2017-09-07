import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts, selectPost, deselectPost } from '../actions';
import { selectedPostsSelector } from '../selectors/selected_posts';

class PostsIndex extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    onPostSelectionChange(event, id) {
        if (event.target.checked) {
            this.props.selectPost(id)
        } else {
            this.props.deselectPost(id);
        }
    }

    renderSelectedPosts() {
        return _.map(this.props.selectedPosts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
            );
        });
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    <input
                        type="checkbox"
                        defaultChecked={this.props.selectedPostIds[post.id]? true : false}
                        key={post.id}
                        onClick={(event) => this.onPostSelectionChange(event, post.id)}/>
                    <Link to={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a Post
                    </Link>
                </div>
                <h3>Selected Posts</h3>
                <ul className="list-group">
                    {this.renderSelectedPosts()}
                </ul>
                <hr/>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts,
        selectedPostIds: state.selectedPostIds,
        selectedPosts: selectedPostsSelector(state),
    }
}

export default connect(mapStateToProps, { fetchPosts, selectPost, deselectPost })(PostsIndex);
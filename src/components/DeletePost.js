import React, {Component} from 'react';
import {deletePost} from "../graphql/mutations";
import {API, graphqlOperation} from 'aws-amplify';

class DeletePost extends Component {

  handleDeletePost = async (post, currentUserId) => {
    if (currentUserId != post.postOwnerId) {
      alert("You cannot delete other's post!");
      return;
    } else {

      const input = {
        id: post.id
      }

      await API.graphql(graphqlOperation(deletePost, {input}))
    }

  }

  render() {
    const post = this.props.post
    const currentUserId = this.props.currentUserId

    return (
      <button onClick={ () => this.handleDeletePost(post, currentUserId)}>
        Delete
      </button>
    )
  }

}

export default DeletePost;
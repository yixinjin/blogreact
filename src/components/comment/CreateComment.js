import React, { Component } from 'react';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import {createComment} from '../../graphql/mutations';

class CreateComment extends Component {

  state = {
    commentOwnerId: "",
    commentOwnerUsername: "",
    content: ""
  }

  componentDidMount = async () => {
    await Auth.currentUserInfo()
      .then(user => {
        this.setState({
          commentOwnerId: user.attributes.sub,
          commentOwnerUsername: user.username
        })
      })
  }

  handleChangeContent = event => this.setState({
    [event.target.name]: event.target.value
  })

  handleAddComment = async event => {
    event.preventDefault();

    // alert(this.props.postId);
    const input = {
      // commentPostId is kinda weird, you cannot find the definition
      // in the mutation, but this point to the post that this comment belongs to
      // it actually means postId, but you cannot call it postId in the input object.
      commentPostId: this.props.postId,
      commentOwnerId: this.state.commentOwnerId,
      commentOwnerUsername: this.state.commentOwnerUsername,
      content: this.state.content,
      createdAt: new Date().toISOString()
    }

    await API.graphql(graphqlOperation(createComment, {input}));

    this.setState({
      content: "",
    })
  }

  render() {
    return (
      <form className="add-comment"
        onSubmit={this.handleAddComment}
      >
        <textarea
          type="text"
          name="content"
          rows="3"
          cols="80"
          required
          placeholder="Add your comment"
          value={this.state.content}
          onChange={this.handleChangeContent}
        />

        <input
          type="submit"
          size="10"
          style={{font: '17px'}}
          value="Add Comment"
        />

      </form>
    )
  }
}

export default CreateComment;
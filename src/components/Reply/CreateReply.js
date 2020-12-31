import React, { Component } from 'react';
import {API, graphqlOperation, Auth} from 'aws-amplify';
import {createReply} from '../../graphql/mutations';

class CreateReply extends Component {

  state = {
    replyOwnerId: "",
    replyOwnerUsername: "",
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

  handleAddReply = async event => {
    event.preventDefault();

    const input = {
      replyCommentId: this.props.commentId,
      replyOwnerId: this.state.commentOwnerId,
      replyOwnerUsername: this.state.commentOwnerUsername,
      content: this.state.content,
      createdAt: new Date().toISOString()
    }

    await API.graphql(graphqlOperation(createReply, {input}));

    this.setState({
      content: "",
    })
  }

  render() {
    return (
      <form className="add-comment"
        onSubmit={this.handleAddReply}
      >
        <textarea
          type="text"
          name="content"
          rows="2"
          cols="40"
          required
          placeholder="Add your reply"
          value={this.state.content}
          onChange={this.handleChangeContent}
        />

        <input className="replyButton"
          type="submit"
          value="Reply"
        />

      </form>
    )
  }
}

export default CreateReply;
import React, { Component } from 'react';

class CommentDetail extends Component {
  render() {
    const {content, commentOwnerUsername, createdAt} = this.props.commentDetail
    return (
      <div className="comment">
        <span style={{ fontStyle: "italic", color: "#0ca5e297"}}>
          {"Commented by: " } { commentOwnerUsername} {" on "}

          <time style={{ fontStyle: "italic"}}>
            {" "}{ new Date(createdAt).toDateString()}
          </time>
        </span>
        <p>{ content }</p>
      </div>
    )
  }
}

export default CommentDetail;
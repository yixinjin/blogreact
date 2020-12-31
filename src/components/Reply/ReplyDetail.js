import React, { Component } from 'react';

class ReplyDetail extends Component {
  render() {
    const {content, replyOwnerUsername, createdAt} = this.props.replyDetail
    return (
      <div className="comment">
        <span style={{color: "#0ca5e297"}}>
          {"Replied by: " } { replyOwnerUsername} {" on "}

          <time>
            {" "}{ new Date(createdAt).toDateString()}
          </time>
        </span>
        <p>{ content }</p>
      </div>
    )
  }
}

export default ReplyDetail;
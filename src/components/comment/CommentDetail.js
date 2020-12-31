import React, { Component } from 'react';
import CreateReply from "../Reply/CreateReply";
import ReplyDetail from "../Reply/ReplyDetail";

class CommentDetail extends Component {

  render() {

    const {content, commentOwnerUsername, createdAt, id, replies} = this.props.commentDetail
    // console.log(this.props.commentDetail.replies);

    return (
      <div className="comment">
        <span style={{ fontStyle: "italic", color: "#0ca5e297"}}>
          {"Commented by: " } { commentOwnerUsername} {" on "}

          <time style={{ fontStyle: "italic"}}>
            {" "}{ new Date(createdAt).toDateString()}
          </time>
        </span>
        <p>{ content }</p>

        <CreateReply commentId={id} />
        {/*/!*Display comments*!/*/}

        {replies.items.length > 0 && <span style={{fontSize:"19px", color:"gray"}}> Replies:</span>}
        {replies.items.map((reply, index) => <ReplyDetail key={index} replyDetail={reply}/>)}

      </div>
    )
  }
}

export default CommentDetail;
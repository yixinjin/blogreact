import React, {Component} from 'react';
import {listPosts} from '../graphql/queries';
import {API, Auth, graphqlOperation} from 'aws-amplify';
import DeletePost from "./DeletePost";
import EditPost from "./EditPost";
import {onCreatePost, onDeletePost, onUpdatePost, onCreateComment, onCreateReply} from "../graphql/subscriptions";
import CreateComment from "./comment/CreateComment";
import CommentDetail from "./comment/CommentDetail";


class DisplayPosts extends Component {

  state = {
    posts: [],
    currentUserId: ''
  }

  componentDidMount = async () => {
    this.getPosts();
    this.createPostListener = API.graphql(graphqlOperation(onCreatePost))
      .subscribe({
        next: postData => {
          const newPost = postData.value.data.onCreatePost
          const prevPosts = this.state.posts.filter(post => post.id !== newPost.id)
          const updatedPosts = [newPost, ...prevPosts]
          this.setState({posts: updatedPosts})
        }
    });

    this.deletePostListener = API.graphql(graphqlOperation(onDeletePost))
      .subscribe({
        next: postData => {
          const deletedPost = postData.value.data.onDeletePost
          const updatedPosts = this.state.posts.filter(post => post.id !== deletedPost.id)
          this.setState({posts: updatedPosts})
        }
      });

    this.updatePostListener = API.graphql(graphqlOperation(onUpdatePost))
      .subscribe({
        next: postData => {
          const {posts} = this.state
          const updatedPost = postData.value.data.onUpdatePost
          const index = posts.findIndex(post => post.id === updatedPost.id)
          const updatedPosts = [...posts.slice(0, index), updatedPost, ...posts.slice(index + 1)]
          this.setState({posts: updatedPosts})
        }
      });

    this.createCommentListener = API.graphql(graphqlOperation(onCreateComment))
      .subscribe({
        next: commentData => {
          const createdComment = commentData.value.data.onCreateComment
          let posts = [...this.state.posts]

          for (let post of posts) {
            if (createdComment.post.id === post.id) {
              post.comments.items.push(createdComment)
            }
          }
          this.setState({posts})
        }
      })

    this.createReplyListener = API.graphql(graphqlOperation(onCreateReply))
      .subscribe({
        next: replyData => {
          const createdReply = replyData.value.data.onCreateReply
          let posts = [...this.state.posts]

          for (let post of posts) {
            let comments = post.comments.items

            if (comments !== undefined && comments.length > 0) {
              for (let comment of comments) {
                console.log(comment);
                if (createdReply.comment.id === comment.id) {
                  comment.replies.items.push(createdReply)
                }
              }
            }
          }
          this.setState({posts})
        }
      })

    await Auth.currentUserInfo()
      .then(user => {
        this.setState({
          currentUserId: user.attributes.sub
        })
      })
  }

  componentWillUnmount() {
    this.createPostListener.unsubscribe();
    this.deletePostListener.unsubscribe();
    this.updatePostListener.unsubscribe();
    this.createCommentListener.unsubscribe();
  }

  getPosts = async () => {
    const result = await API.graphql(graphqlOperation(listPosts));
    this.setState({
      posts: result.data.listPosts.items
    })
  }

  showDeleteButton = (post) => {
    return (
      <DeletePost post={post} />
    );
  }

  render() {
    const { posts } = this.state

    return posts.map((post) => {
      return (
        <div className="posts" style={rowStyle} key={post.id}>
          <h1 >{post.postTitle}</h1>
          <span style={{fontStyle: "italic", color: "#4C90E2"}}>
            {"Wrote by: "} {post.postOwnerUsername}
            {" on "}
            <time style={{fontStyle: "italic"}}>
              {" "}
              {new Date(post.createdAt).toDateString()}
            </time>
          </span>
          <p>
            {post.postBody}
          </p>

          <br />
          <span>
            {post.postOwnerId === this.state.currentUserId
              ?  <DeletePost post={post} currentUserId = {this.state.currentUserId} />
              : null}

            {post.postOwnerId === this.state.currentUserId
              ?  <EditPost post={post} postBody={post.postBody} postTitle={post.postTitle} postId={post.id}/>
              : null}

          </span>
          <span>
            <CreateComment postId={post.id} />
            {/*/!*Display comments*!/*/}
            {post.comments.items.length > 0 && <span style={{fontSize:"19px", color:"gray"}}> Comments:</span>}
            {post.comments.items.map((comment, index) => <CommentDetail key={index} commentDetail={comment}/>)}

          </span>
        </div>
      )
    })
  }
}

const rowStyle = {
  background: '#f4f4f4',
  padding: '10px',
  border: '1px #ccc, dotted',
  margin: '14px'
}


export default DisplayPosts;
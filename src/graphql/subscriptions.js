/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      postOwnerId
      postOwnerUsername
      postTitle
      postBody
      createdAt
      comments {
        items {
          id
          commentOwnerId
          commentOwnerUsername
          content
          createdAt
          post {
            id
            postOwnerId
            postOwnerUsername
            postTitle
            postBody
            createdAt
            updatedAt
          }
          replies {
            nextToken
          }
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          numberLikes
          likeOwnerId
          likeOwnerUsername
          post {
            id
            postOwnerId
            postOwnerUsername
            postTitle
            postBody
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      postOwnerId
      postOwnerUsername
      postTitle
      postBody
      createdAt
      comments {
        items {
          id
          commentOwnerId
          commentOwnerUsername
          content
          createdAt
          post {
            id
            postOwnerId
            postOwnerUsername
            postTitle
            postBody
            createdAt
            updatedAt
          }
          replies {
            nextToken
          }
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          numberLikes
          likeOwnerId
          likeOwnerUsername
          post {
            id
            postOwnerId
            postOwnerUsername
            postTitle
            postBody
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      postOwnerId
      postOwnerUsername
      postTitle
      postBody
      createdAt
      comments {
        items {
          id
          commentOwnerId
          commentOwnerUsername
          content
          createdAt
          post {
            id
            postOwnerId
            postOwnerUsername
            postTitle
            postBody
            createdAt
            updatedAt
          }
          replies {
            nextToken
          }
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          numberLikes
          likeOwnerId
          likeOwnerUsername
          post {
            id
            postOwnerId
            postOwnerUsername
            postTitle
            postBody
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      commentOwnerId
      commentOwnerUsername
      content
      createdAt
      post {
        id
        postOwnerId
        postOwnerUsername
        postTitle
        postBody
        createdAt
        comments {
          items {
            id
            commentOwnerId
            commentOwnerUsername
            content
            createdAt
            updatedAt
          }
          nextToken
        }
        likes {
          items {
            id
            numberLikes
            likeOwnerId
            likeOwnerUsername
            createdAt
            updatedAt
          }
          nextToken
        }
        updatedAt
      }
      replies {
        items {
          id
          replyOwnerId
          replyOwnerUsername
          comment {
            id
            commentOwnerId
            commentOwnerUsername
            content
            createdAt
            updatedAt
          }
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      commentOwnerId
      commentOwnerUsername
      content
      createdAt
      post {
        id
        postOwnerId
        postOwnerUsername
        postTitle
        postBody
        createdAt
        comments {
          items {
            id
            commentOwnerId
            commentOwnerUsername
            content
            createdAt
            updatedAt
          }
          nextToken
        }
        likes {
          items {
            id
            numberLikes
            likeOwnerId
            likeOwnerUsername
            createdAt
            updatedAt
          }
          nextToken
        }
        updatedAt
      }
      replies {
        items {
          id
          replyOwnerId
          replyOwnerUsername
          comment {
            id
            commentOwnerId
            commentOwnerUsername
            content
            createdAt
            updatedAt
          }
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      commentOwnerId
      commentOwnerUsername
      content
      createdAt
      post {
        id
        postOwnerId
        postOwnerUsername
        postTitle
        postBody
        createdAt
        comments {
          items {
            id
            commentOwnerId
            commentOwnerUsername
            content
            createdAt
            updatedAt
          }
          nextToken
        }
        likes {
          items {
            id
            numberLikes
            likeOwnerId
            likeOwnerUsername
            createdAt
            updatedAt
          }
          nextToken
        }
        updatedAt
      }
      replies {
        items {
          id
          replyOwnerId
          replyOwnerUsername
          comment {
            id
            commentOwnerId
            commentOwnerUsername
            content
            createdAt
            updatedAt
          }
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike {
    onCreateLike {
      id
      numberLikes
      likeOwnerId
      likeOwnerUsername
      post {
        id
        postOwnerId
        postOwnerUsername
        postTitle
        postBody
        createdAt
        comments {
          items {
            id
            commentOwnerId
            commentOwnerUsername
            content
            createdAt
            updatedAt
          }
          nextToken
        }
        likes {
          items {
            id
            numberLikes
            likeOwnerId
            likeOwnerUsername
            createdAt
            updatedAt
          }
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike {
    onUpdateLike {
      id
      numberLikes
      likeOwnerId
      likeOwnerUsername
      post {
        id
        postOwnerId
        postOwnerUsername
        postTitle
        postBody
        createdAt
        comments {
          items {
            id
            commentOwnerId
            commentOwnerUsername
            content
            createdAt
            updatedAt
          }
          nextToken
        }
        likes {
          items {
            id
            numberLikes
            likeOwnerId
            likeOwnerUsername
            createdAt
            updatedAt
          }
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike {
    onDeleteLike {
      id
      numberLikes
      likeOwnerId
      likeOwnerUsername
      post {
        id
        postOwnerId
        postOwnerUsername
        postTitle
        postBody
        createdAt
        comments {
          items {
            id
            commentOwnerId
            commentOwnerUsername
            content
            createdAt
            updatedAt
          }
          nextToken
        }
        likes {
          items {
            id
            numberLikes
            likeOwnerId
            likeOwnerUsername
            createdAt
            updatedAt
          }
          nextToken
        }
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateReply = /* GraphQL */ `
  subscription OnCreateReply {
    onCreateReply {
      id
      replyOwnerId
      replyOwnerUsername
      comment {
        id
        commentOwnerId
        commentOwnerUsername
        content
        createdAt
        post {
          id
          postOwnerId
          postOwnerUsername
          postTitle
          postBody
          createdAt
          comments {
            nextToken
          }
          likes {
            nextToken
          }
          updatedAt
        }
        replies {
          items {
            id
            replyOwnerId
            replyOwnerUsername
            content
            createdAt
            updatedAt
          }
          nextToken
        }
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateReply = /* GraphQL */ `
  subscription OnUpdateReply {
    onUpdateReply {
      id
      replyOwnerId
      replyOwnerUsername
      comment {
        id
        commentOwnerId
        commentOwnerUsername
        content
        createdAt
        post {
          id
          postOwnerId
          postOwnerUsername
          postTitle
          postBody
          createdAt
          comments {
            nextToken
          }
          likes {
            nextToken
          }
          updatedAt
        }
        replies {
          items {
            id
            replyOwnerId
            replyOwnerUsername
            content
            createdAt
            updatedAt
          }
          nextToken
        }
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteReply = /* GraphQL */ `
  subscription OnDeleteReply {
    onDeleteReply {
      id
      replyOwnerId
      replyOwnerUsername
      comment {
        id
        commentOwnerId
        commentOwnerUsername
        content
        createdAt
        post {
          id
          postOwnerId
          postOwnerUsername
          postTitle
          postBody
          createdAt
          comments {
            nextToken
          }
          likes {
            nextToken
          }
          updatedAt
        }
        replies {
          items {
            id
            replyOwnerId
            replyOwnerUsername
            content
            createdAt
            updatedAt
          }
          nextToken
        }
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;

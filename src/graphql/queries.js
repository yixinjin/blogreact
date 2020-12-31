/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
            items {
              id
              replyOwnerId
              replyOwnerUsername
              content
              createdAt
              comment {
                id
                commentOwnerId
                commentOwnerUsername
                content
                createdAt
                updatedAt
              }
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
            replies {
              items {
                id
                replyOwnerId
                replyOwnerUsername
                content
                createdAt
                updatedAt
              }
            }
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
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
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
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          comments {
            nextToken
          }
          likes {
            nextToken
          }
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getReply = /* GraphQL */ `
  query GetReply($id: ID!) {
    getReply(id: $id) {
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
export const listReplys = /* GraphQL */ `
  query ListReplys(
    $filter: ModelReplyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReplys(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

import fire from '../../config/fire';

const setPostsLoading = (message) => ({
  type: "SET_POSTS_LOADING",
  payload: message,
});
const setPosts = (data) => ({
  type: "SET_POSTS",
  payload: data,
});

export const getPosts = () => async (dispatch) => {
  dispatch(setPostsLoading(true));

  const posts = await fire.firestore().collection("wpPost").get();

  const allPosts = [];

  posts.forEach((post) => {
    if (post.id !== "27g9Q1JzQmEZbQ8AxaBg") {
      allPosts.push({ post: post.data(), postId: post.id });
    }
  });

  dispatch(setPostsLoading(false));
  dispatch(setPosts(allPosts));
};










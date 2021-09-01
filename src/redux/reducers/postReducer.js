import {
  SET_POSTS,
  SET_POSTS_LOADING,
} from "../actions/postActions";

const initialState = {
  postsLoading: true,
  posts: [],
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case SET_POSTS:
      state = { ...state, posts: action.payload };
      return state;
    case SET_POSTS_LOADING:
      state = { ...state, postsLoading: action.payload };
      return state;
    default:
      return state;
  }
}

import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {sanitize} from 'dompurify';
import { getPosts } from "../redux/actionCreators/postsActionCreator";
import '../css/SeePost.css';
import Suggestions from "../components/Suggestions";

const SeePost = () => {
  const { id } = useParams();

  const { posts, postsLoading } = useSelector(
    (state) => ({
      posts: state.posts.posts,
      postsLoading: state.posts.postsLoading,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  const currentPost = posts.find((post) => post.postId === id && post);
  useEffect(() => {
    if (postsLoading) {
      dispatch(getPosts());
    }
    window.scrollTo(0, 0);
  }, [dispatch,
    postsLoading]);

  return (
    <div className="seePost">
      <div className="container">
        {postsLoading ? (
          <h1 className="text-center">Post Loading...</h1>
        ) : currentPost ? (
          <div>
            <div className="seePostTitle" dangerouslySetInnerHTML={{__html:sanitize(currentPost.post.title)}}></div>
            <div className="seePostDate"><span className="h5">Released on :</span> {currentPost.post.date.substring(0,10)}</div>
            <div className="seePostImage">
              <img
                src={currentPost.post.image}
                alt={currentPost.post.title} 
              />
            </div>
            <div className="seePostContent">
                <span dangerouslySetInnerHTML={{__html:sanitize(currentPost.post.content.substring(0, 1000000))}} className="BlogPostContent"></span>
            </div>
            <hr />
            <div className="seePostThank">Thanks for reading.</div>
            <Suggestions/>
          </div>
        ): (
          <h1 className="text-center">
            Post with id <span className="text-primary">{id}</span> does not
            exists
          </h1>
        )}{" "}
      </div>
    </div>
  );
};

export default SeePost;

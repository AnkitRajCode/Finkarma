import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {sanitize} from 'dompurify';
import { getPosts } from "../redux/actionCreators/postsActionCreator";
import '../css/SeePost.css';
import Suggestions from "../components/Suggestions";
import PostAnimation from "../components/postAnimation";
import { Helmet } from 'react-helmet';

const SeePost = () => {
  const { call } = useParams();
  const { posts, postsLoading } = useSelector(
    (state) => ({
      posts: state.posts.posts,
      postsLoading: state.posts.postsLoading,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  const currentPost = posts.find((post) => post.post.call === call);
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
          <PostAnimation/>
        ) : currentPost ? (
          <div>
            <Helmet>
              <title>Finkarma - {currentPost.post.call}</title>
              <meta
                  name="description"
                  content={currentPost.post.call} 
              />
            </Helmet>
            <div className="seePostTitle" dangerouslySetInnerHTML={{__html:sanitize(currentPost.post.title)}}></div>
            <div className="seePostDate"><span className="h5">Released on :</span> {currentPost.post.date.substring(0,10)}</div>
            <div className="seePostImage">
              <img
                src={currentPost.post.image}
                alt={currentPost.post.title} 
              />
            </div>
            <div className="seePostContent">
                <span dangerouslySetInnerHTML={{__html:sanitize(currentPost.post.content.substring(8, 1000000))}} className="BlogPostContent"></span>
            </div>
            <hr />
            <div className="seePostThank">Thanks for reading.</div>
            <Suggestions/>
          </div>
        ): (
          <h1 className="text-center">
            Post with id <span className="text-primary">{call}</span> does not
            exists
          </h1>
        )}{" "}
      </div>
    </div>
  );
};

export default SeePost;

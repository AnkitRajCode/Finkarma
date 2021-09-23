import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {sanitize} from 'dompurify';
import { getPosts } from "../redux/actionCreators/postsActionCreator";
import '../css/SeePost.css';
import Suggestions from "../components/Suggestions";
import PostAnimation from "../components/postAnimation";
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router';
import ReactGA from "react-ga";
import PostSubscription from "../components/PostSubscription";
ReactGA.initialize( process.env.React_App_Tracking_Code );
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
    ReactGA.pageview(window.location.pathname + window.location.search);
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
              <meta property="og:title" content={currentPost.post.title} />
              <meta property="og:description" content={currentPost.post.excerpt.substring(8, 100)} />
              <meta property="og:image" content={currentPost.post.image} />
              <meta property="og:url" content={`https://finkarma.in/${currentPost.post.call}`} />
              <meta name="twitter:card" content="summary_large_image"/>
              <meta name="twitter:image:alt" content={currentPost.post.title} />
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
            <PostSubscription/>
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

export default withRouter( SeePost);

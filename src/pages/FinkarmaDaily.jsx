import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import '../css/Finkarmadaily.css';
import {sanitize} from 'dompurify';
import { getPosts } from "../redux/actionCreators/postsActionCreator";

const FinkarmaDaily = () => {
  const { posts, postsLoading} = useSelector(
    (state) => ({
      posts: state.posts.posts,
      postsLoading: state.posts.postsLoading,
    }),
    shallowEqual
  );
  const latestPosts = posts;
  latestPosts.sort((a, b) => {
    const postA = new Date(a.post.date);
    const postB = new Date(b.post.date);

    if (postA < postB) return 1;
    if (postA > postB) return -1;
    return 0;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    if (postsLoading) {
      dispatch(getPosts());
    }
  }, );
  
  return (
    <div className="finkarmaDaily">
      <div className="container">
        <div className="jumbotron pb-4 pb-md-3 pl-2 pl-md-5">
            <h2>Finkarma Daily</h2>
        </div>
        <div className="row">
        {postsLoading
              ? <h1>Loading Posts...</h1>
              : latestPosts.map((post, id) => (
                <div className="col-sm-4" key={id} >
                  <Link to={`/finkarma/${post.postId}`} 
                      className="card mb-5 shadow FinkarmaDailyCard"
                  >
                    <img
                      src={post.post.image}
                      alt={post.post.title}
                      className="card-img-top border-bottom"
                      style={{height:"220px"}}
                    />
                    <div className="card-body">
                        <h5 className="card-title text-capitalize text-dark mb-1">
                            {post.post.title}
                        </h5>

                        <p className="small text-muted">{post.post.date.substring(0, 10)}</p>

                        <p className="card-text text-dark">
                            <span className="font-weight-light" dangerouslySetInnerHTML={{__html:sanitize(post.post.excerpt.substring(8, 110))}}></span>
                        </p>
                    </div>
                  </Link>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FinkarmaDaily;
import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {sanitize} from 'dompurify';
import { getPosts } from "../redux/actionCreators/postsActionCreator";
import LoadingAnimation from "./LoadingAnimation";

const Suggestions = () => {
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
    window.scrollTo(0, 0);
  });

  const num = Math.floor(Math.random() * 15);
  return (
    <div className="inforgraphicslanding py-4">
        <div className="container">
            <h1>Suggestions</h1>
        <div className="row">
        {postsLoading
              ? <LoadingAnimation/>
              : latestPosts.map((post, id) => (
                <div className="col-sm-4" key={id} >
                  <Link to={`/${post.post.call}`}
                      className="card mb-5 shadow CatagoryCard"
                  >
                    <img
                      src={post.post.image}
                      alt={post.post.title}
                      className="card-img-top border-bottom"
                      style={{height:"220px"}}
                    />
                    <div className="card-body">
                        <h5 className="card-title text-capitalize text-dark mb-1"  dangerouslySetInnerHTML={{__html:sanitize(post.post.title)}}></h5>

                        <p className="small text-muted">{post.post.date.substring(0, 10)}</p>

                        <p className="card-text text-dark">
                            <span className="font-weight-normal" dangerouslySetInnerHTML={{__html:sanitize(post.post.excerpt.substring(0, 150))}}></span>
                        </p>
                    </div>
                  </Link>
                </div>
            )).slice(num,num + 3)}
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
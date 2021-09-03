import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import '../css/CatagorySection.css';
import {sanitize} from 'dompurify';
import { getPosts } from "../redux/actionCreators/postsActionCreator";
import LoadingAnimationBroad from "../components/LoadingAnimationBroad";

const PersonalFinance = () => {
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
  
  return (
    <div className="CatagorySection">
        <div className="container">
            <div className="jumbotron pb-4 pb-md-3">
                <h2>Personal Finance</h2>
            </div>
        <div className="row py-4">
        {postsLoading
              ? <LoadingAnimationBroad/>
              : latestPosts.map((post, id) => (
                <div className="col-md-6" key={id} >
                    <Link to={`/finkarma/${post.postId}`} 
                        className="card mb-5 shadow CatagoryCard"
                    >
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img
                                src={post.post.image}
                                alt={post.post.title}
                                className="EachCatagoryCardImage"
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title text-dark mb-1">
                                    {post.post.title}
                                </h5>

                                <p className="small text-muted">{post.post.date.substring(0, 10)}</p>

                                <p className="card-text text-dark">
                                    <span className="font-weight-light" dangerouslySetInnerHTML={{__html:sanitize(post.post.excerpt.substring(8, 150))}}></span>
                                </p>
                            </div>
                        </div>
                        </div>
                  </Link>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalFinance;
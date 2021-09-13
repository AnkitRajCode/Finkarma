import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import '../css/Infographics.css';
import {sanitize} from 'dompurify';
import { getPosts } from "../redux/actionCreators/postsActionCreator";
import LoadingAnimation from "../components/LoadingAnimation";
import { Helmet } from 'react-helmet';

const Infographics = () => {
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
  }, );
  
  return (
    <div className="inforgraphics">
        <Helmet>
            <title>Finkarma - Infographics</title>
            <meta
                name="description"
                content="Infographics" 
            />
        </Helmet>
        <div className="container">
            <div className="jumbotron pb-4 pb-md-3 pl-2 pl-md-5">
                <h2>Infographics</h2>
            </div>
        <div className="row">
        {postsLoading
              ? <LoadingAnimation/>
              : latestPosts.filter((post) => 
                post.post.categories === "34" ||  
                post.post.categories === "4,34" ||  
                post.post.categories === "4,32,34" ||
                post.post.categories === "32,34" 
              ).map((post, id) => (
                <div className="col-sm-4" key={id} >
                  <Link to={`${post.post.call}`}
                      className="card mb-5 shadow inforgraphicsCard"
                  >
                    <img
                      src={post.post.image}
                      alt={post.post.title}
                      className="card-img-top border-bottom"
                      style={{height:"200px"}}
                    />
                    <div className="card-body">
                      <h5 className="card-title text-capitalize text-dark mb-1"  dangerouslySetInnerHTML={{__html:sanitize(post.post.title)}}></h5>

                      <p className="small text-muted">{post.post.date.substring(0, 10)}</p>

                    </div>
                  </Link>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Infographics;
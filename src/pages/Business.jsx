import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import '../css/CatagorySection.css';
import {sanitize} from 'dompurify';
import { getPosts } from "../redux/actionCreators/postsActionCreator";
import LoadingAnimation from "../components/LoadingAnimation";
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router';
import ReactGA from "react-ga";
ReactGA.initialize( process.env.React_App_Tracking_Code );

const Business = () => {
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
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  
  return (
    <div className="CatagorySection">
        <Helmet>
           <title>Finkarma - Business</title>
           <meta
            name="description"
            content="Finkarma-Business" 
           />
         </Helmet>
        <div className="container">
            <div className="jumbotron pb-4 pb-md-3">
                <h2>Business</h2>
            </div>
        <div className="row py-4">
          {postsLoading
            ? <LoadingAnimation/>
              : latestPosts.map((post, id) => (
                <div className="col-sm-4" key={id} >
                  <Link to={`${post.post.call}`}
                      className="card mb-5 shadow CatagoryCard"
                  >
                    <img
                      src={post.post.image}
                      alt={post.post.title}
                      className="card-img-top border-bottom catagoryCardImageHeight"
                    />
                    <div className="card-body">
                        <h5 className="card-title text-capitalize text-dark mb-1">
                            <span dangerouslySetInnerHTML={{__html:sanitize(post.post.title.substring(0, 74))}}></span>
                        </h5>

                        <p className="small text-muted">{post.post.date.substring(0, 10)}</p>

                        <p className="card-text text-dark">
                            <span className="font-weight-normal" dangerouslySetInnerHTML={{__html:sanitize(post.post.excerpt.substring(8, 134))}}></span>
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

export default withRouter(Business);
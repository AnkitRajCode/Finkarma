import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import '../css/CatagorySection.css';
import '../css/Finkarmadaily.css';
import {sanitize} from 'dompurify';
import { getPosts } from "../redux/actionCreators/postsActionCreator";

const Finkarmadaily = () => {
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
      });
    return (
        <div className="finkarmaDailyLanding pt-5">
            <div className="container">
                <div className="row fdFlex">
                    <div className="col-md-6">
                        <Link to="/finkarmaBytes" className="fdTitle">Finkarma Bytes</Link>
                        {/* <div className="fdAbout">Incisive articles and stories about the economy with emphasis on financial world. The brief untangled roundups would take just a few minutes to grasp.</div> */}
                        <div className="fdContent">Incisive articles and stories about the economy with emphasis on financial world. Our frequent updates would envelop a wide range from the market technicals to the economy as a whole. We believe in multi-faceted approach when it comes to money management. Our brief untangled roundups would take just a few minutes to grasp. </div>
                    </div>
                    <div className="col-md-6">
                    {postsLoading
                        ? <div>
                            <div className="list-group landingPageAnimationCard">
                                <div className="list-group-item list-group-item-action ">
                                    <div className="row">
                                        <div className=" col-sm-4 ">
                                            <div className="heightImageSeletonLanding skeleton"></div>
                                        </div>
                                        <div className="col-sm-8 mt-3">
                                        <div className="skeleton-text"></div>
                                            <div className="skeleton-text"></div>
                                            <div className="skeleton-date my-3"></div>
                                            <div className="skeleton-text"></div>
                                            <div className="skeleton-text"></div>
                                            <div className="skeleton-text"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-group-item list-group-item-action ">
                                    <div className="row">
                                        <div className=" col-sm-4 ">
                                            <div className="heightImageSeletonLanding skeleton"></div>
                                        </div>
                                        <div className="col-sm-8 mt-3">
                                        <div className="skeleton-text"></div>
                                            <div className="skeleton-text"></div>
                                            <div className="skeleton-date my-3"></div>
                                            <div className="skeleton-text"></div>
                                            <div className="skeleton-text"></div>
                                            <div className="skeleton-text"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-group-item list-group-item-action ">
                                    <div className="row">
                                        <div className=" col-sm-4 ">
                                            <div className="heightImageSeletonLanding skeleton"></div>
                                        </div>
                                        <div className="col-sm-8 mt-3">
                                        <div className="skeleton-text"></div>
                                            <div className="skeleton-text"></div>
                                            <div className="skeleton-date my-3"></div>
                                            <div className="skeleton-text"></div>
                                            <div className="skeleton-text"></div>
                                            <div className="skeleton-text"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : latestPosts.map((post, id) => (
                            <div className="list-group" key={id} >
                              <Link to={`/${post.post.call}`}
                                  className="list-group-item list-group-item-action mt-4 mt-sm-2 text-decoration-none"
                                  
                              >
                                <div className="row">
                                    <div className="col-sm-4">
                                        <img
                                            src={post.post.image}
                                            alt={post.post.title}
                                            className="card-img-top border-bottom pt-2"
                                        />
                                    </div>
                                    <div className="col-sm-8 mt-2">
                                        <h5 className="card-title text-capitalize text-dark mb-1">
                                            <span dangerouslySetInnerHTML={{__html:sanitize(post.post.title)}}></span>
                                        </h5>
                        
                                        <p className="small text-muted">{post.post.date.substring(0, 10)}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        )).slice(0,3)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Finkarmadaily;




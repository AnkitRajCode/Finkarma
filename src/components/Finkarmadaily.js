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
                        <div className="fdTitle">Finkarma Daily</div>
                        <div className="fdAbout">Every great design begin with an even better story</div>
                        <div className="fdContent">Since beginning my journey as a freelancer designer nearly 4 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use, I am quietly confident, naturally curious.</div>
                    </div>
                    <div className="col-md-6">
                    {postsLoading
                        ? <h1>Loading Posts...</h1>
                        : latestPosts.map((post, id) => (
                            <div key={id} >
                                <Link to={`/finkarma/${post.postId}`} 
                                    className="card mb-md-3 mb-4 shadow DailyCard"
                                >
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img
                                            src={post.post.image}
                                            alt={post.post.title}
                                            className="DailyCardImage"
                                        />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title text-dark mb-1">
                                                {post.post.title}
                                            </h5>

                                            <p className="small text-muted">{post.post.date.substring(0, 10)}</p>

                                            <p className="card-text text-dark">
                                                <span className="font-weight-light" dangerouslySetInnerHTML={{__html:sanitize(post.post.excerpt.substring(8, 110))}}></span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        )).slice(0,2)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Finkarmadaily;



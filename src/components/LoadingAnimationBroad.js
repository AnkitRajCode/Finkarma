import '../css/LoadingAnimation.css';
const LoadingAnimationBroad = () => {
    return ( 
        <div className="loadingAnimation">
            <div className="row">
                <div className="col-md-6" >
                    <div className="card mb-5 shadow CatagoryCard" >
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <div className="skeleton EachCatagoryCardImage"></div>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title text-dark mb-1">
                                        <div className="skeleton-text"></div>
                                        <div className="skeleton-text"></div>
                                    </h5>

                                    <p className="small text-muted mt-3">
                                        <div className="skeleton-date"></div>
                                    </p>

                                    <p className="card-text text-dark">
                                        <div className="skeleton-text"></div>
                                        <div className="skeleton-text"></div>
                                        <div className="skeleton-text"></div>
                                        <div className="skeleton-text"></div>
                                        <div className="skeleton-text"></div>
                                        <div className="skeleton-text"></div>
                                        <div className="skeleton-text"></div>
                                        <div className="skeleton-text"></div>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6" >
                    <div className="card mb-5 shadow CatagoryCard" >
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <div className="skeleton EachCatagoryCardImage"></div>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title text-dark mb-1">
                                        <div className="skeleton-text"></div>
                                        <div className="skeleton-text"></div>
                                    </h5>

                                    <p className="small text-muted mt-3">
                                        <div className="skeleton-date"></div>
                                    </p>

                                    <p className="card-text text-dark">
                                        <div className="skeleton-text"></div>
                                        <div className="skeleton-text"></div>
                                        <div className="skeleton-text"></div>
                                        <div className="skeleton-text"></div>
                                        <div className="skeleton-text"></div>
                                        <div className="skeleton-text"></div>
                                        <div className="skeleton-text"></div>
                                        <div className="skeleton-text"></div>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
 
export default LoadingAnimationBroad;
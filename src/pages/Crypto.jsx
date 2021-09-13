import '../css/CatagorySection.css';
import { Helmet } from 'react-helmet';

const  Crypto = () => {
  window.scrollTo(0, 0);
  return (
    <div className="CatagorySection">
        <Helmet>
            <title>Finkarma - Crypto</title>
            <meta
                name="description"
                content="Finkarma-Crypto" 
            />
        </Helmet>
        <div className="container">
            <div className="jumbotron pb-4 pb-md-3">
                <h2>Crypto</h2>
            </div>
            <div className="comingSoon">Coming Soon...</div>
      </div>
    </div>
  );
};

export default  Crypto;
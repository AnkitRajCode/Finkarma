import '../css/Catagory.css';
import { Link } from "react-router-dom";
import vector from '../images/headerCover.jpg';

const Catagory = () => {
    return (
        <div className="catagory">
            <div className="container">
                <div className="jumbotron pb-4 pb-md-3">
                    <h2>Catagory</h2>
                </div>
                <div className="row pb-5 catagoryFlex">
                    <div className="col-md-6">
                        <Link to="/TechnicalAnalysis"><img src={vector} alt="catagory" className="catagoryImage"/></Link>
                    </div>
                    <div className="col-md-6">
                        <Link to="/TechnicalAnalysis" className="catagoryTitle">Technical Analysis</Link>
                        <div className="catagoryAbout">Every great design begin with an even better story</div>
                        <div className="catagoryContent">Since beginning my journey as a freelancer designer nearly 4 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use, I am quietly confident, naturally curious.</div>
                    </div>
                </div>
                <div className="row pb-5">
                    <div className="col-md-6">
                        <Link to="/FundamentalAnalaysis"><img src={vector} alt="catagory" className="catagoryImage"/></Link>
                    </div>
                    <div className="col-md-6">
                        <Link to="/FundamentalAnalaysis" className="catagoryTitle">Fundamental Analaysis</Link>
                        <div className="catagoryAbout">Every great design begin with an even better story</div>
                        <div className="catagoryContent">Since beginning my journey as a freelancer designer nearly 4 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use, I am quietly confident, naturally curious.</div>
                    </div>
                </div>
                <div className="row pb-5 catagoryFlex">
                    <div className="col-md-6">
                        <Link to="/Business"><img src={vector} alt="catagory" className="catagoryImage"/></Link>
                    </div>
                    <div className="col-md-6">
                        <Link to="/Business" className="catagoryTitle">Business</Link>
                        <div className="catagoryAbout">Every great design begin with an even better story</div>
                        <div className="catagoryContent">Since beginning my journey as a freelancer designer nearly 4 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use, I am quietly confident, naturally curious.</div>
                    </div>
                </div>
                <div className="row pb-5">
                    <div className="col-md-6">
                        <Link to="/Infographics"><img src={vector} alt="catagory" className="catagoryImage"/></Link>
                    </div>
                    <div className="col-md-6">
                        <Link to="/Infographics" className="catagoryTitle">Infographics</Link>
                        <div className="catagoryAbout">Every great design begin with an even better story</div>
                        <div className="catagoryContent">Since beginning my journey as a freelancer designer nearly 4 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use, I am quietly confident, naturally curious.</div>
                    </div>
                </div>
                <div className="row pb-5 catagoryFlex">
                    <div className="col-md-6">
                        <Link to="/PersonalFinance"><img src={vector} alt="catagory" className="catagoryImage"/></Link>
                    </div>
                    <div className="col-md-6">
                        <Link to="/PersonalFinance" className="catagoryTitle">Personal Finance</Link>
                        <div className="catagoryAbout">Every great design begin with an even better story</div>
                        <div className="catagoryContent">Since beginning my journey as a freelancer designer nearly 4 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use, I am quietly confident, naturally curious.</div>
                    </div>
                </div>
                <div className="row pb-5">
                    <div className="col-md-6">
                        <Link to="/Crypto"><img src={vector} alt="catagory" className="catagoryImage"/></Link>
                    </div>
                    <div className="col-md-6">
                        <Link to="/Crypto" className="catagoryTitle">Crypto</Link>
                        <div className="catagoryAbout">Every great design begin with an even better story</div>
                        <div className="catagoryContent">Since beginning my journey as a freelancer designer nearly 4 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use, I am quietly confident, naturally curious.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catagory;
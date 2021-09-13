import { Link } from "react-router-dom";
import '../css/Catagory.css';
import team from '../images/team.png'
import statistics from '../images/statistics.png'
import analysis from '../images/analysis.png'
import pieChart from '../images/pie-chart.png'
import personal from '../images/personal.png'
import bitcoin from '../images/bitcoin.png'

const Catagory = () =>{
    return (
        <div className="catagoryLanding pt-md-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="catagoryTitle">Category</div>
                        <div className="catagoryContent">We classify our razor-sharp writeups under separate sections for a quicker access to your likings. We not only have technical and fundamental analysis to keep you on the right side of the market but also personal finance that keeps you on the right edge of your financial goals. The most relevant Infographics would also catch your interest.</div>
                    </div>
                    <div className="col-md-6">
                        <div className="main">
                            <Link to="/TechnicalAnalysis" className="catagoryBox">
                                <img src={analysis} alt="analysis" />
                                <div className="catagoryBoxName">Technical Analysis</div>
                            </Link>
                            <Link to="/FundamentalAnalysis" className="catagoryBox">
                                <img src={statistics} alt="statistics" />
                                <div className="catagoryBoxName">Fundamental Analaysis</div>
                            </Link>
                            <Link to="/Business" className="catagoryBox">
                                <img src={team} alt="team" />
                                <div className="catagoryBoxName">Business</div>
                            </Link>
                            <Link to="/Infographics" className="catagoryBox">
                                <img src={pieChart} alt="pieChart" />
                                <div className="catagoryBoxName">Infographics</div>
                            </Link>
                            <Link to="/PersonalFinance" className="catagoryBox">
                                <img src={personal} alt="personal" />
                                <div className="catagoryBoxName">Personal Finance</div>
                            </Link>
                            <Link to="/Crypto" className="catagoryBox">
                                <img src={bitcoin} alt="bitcoin" />
                                <div className="catagoryBoxName">Crypto</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catagory;
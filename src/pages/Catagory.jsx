import '../css/Catagory.css';
import { Link } from "react-router-dom";
import handshake from '../images/handshake.gif';
import Brainstorm from '../images/Brainstorm.gif';
import signIn from '../images/sign_in.gif';
import trackStatistic from '../images/track_statistic.gif';
import easyMoney from '../images/easy_money.gif';
import FinancialReport from '../images/Financial_report.gif';
import { Helmet } from 'react-helmet';

const Catagory = () => {
    return (
        <div className="catagory">
            <Helmet>
                <title>Finkarma - Category</title>
                <meta
                    name="description"
                    content="Finkarma-Category" 
                />
            </Helmet>
            <div className="container">
                <div className="jumbotron pb-4 pb-md-3">
                    <h2>Category</h2>
                </div>
                <div className="row pb-5 catagoryFlex">
                    <div className="col-md-6">
                        <Link to="/TechnicalAnalysis"><img src={trackStatistic} alt="catagory" className="catagoryImage"/></Link>
                    </div>
                    <div className="col-md-6">
                        <Link to="/TechnicalAnalysis" className="catagoryTitle">Technical Analysis</Link>
                        <div className="catagoryAbout">A trading discipline employed to evaluate investments and identify trading opportunities in price trends and patterns seen on charts.</div>
                        <div className="catagoryContent">Are you new to Stock market and want to learn Technical Analysis? Then you are at the right place. We at Finkarma offer a wide range of Technical Analysis Modules which would not only play a startup role for the beginners but also help intermediate and advanced learners to review and reassess their knowledge.</div>
                    </div>
                </div>
                <div className="row pb-5">
                    <div className="col-md-6">
                        <Link to="/FundamentalAnalaysis"><img src={Brainstorm} alt="catagory" className="catagoryImage"/></Link>
                    </div>
                    <div className="col-md-6">
                        <Link to="/FundamentalAnalysis" className="catagoryTitle">Fundamental Analysis</Link>
                        <div className="catagoryAbout">A method of assessing the intrinsic value of a stock.</div>
                        <div className="catagoryContent">Fundamental Analysis is a cornerstone for any investor who likes to build wealth on his capital. A wide range of indicators encompassed in it determine the right value of an instrument and thus helping investors to buy at a fair price. If you really want to learn how Fundamental analysis works, then this section would launch you with comprehensive knowledge about the subject.</div>
                    </div>
                </div>
                <div className="row pb-5 catagoryFlex">
                    <div className="col-md-6">
                        <Link to="/Business"><img src={handshake} alt="catagory" className="catagoryImage"/></Link>
                    </div>
                    <div className="col-md-6">
                        <Link to="/Business" className="catagoryTitle">Business</Link>
                        <div className="catagoryAbout">The activity of making one's living or making money by producing or buying and selling products</div>
                        <div className="catagoryContent">Business is the activity of making one's living or making money by producing or buying and selling products such as goods and services. Simply put, it is "Any activity or enterprise entered into for profit." If the business acquires debts, the creditors can go after the owner's personal possessions.</div>
                    </div>
                </div>
                <div className="row pb-5">
                    <div className="col-md-6">
                        <Link to="/Infographics"><img src={FinancialReport} alt="catagory" className="catagoryImage"/></Link>
                    </div>
                    <div className="col-md-6">
                        <Link to="/Infographics" className="catagoryTitle">Infographics</Link>
                        <div className="catagoryAbout">Graphic visual representations of information, data, or knowledge intended to present information quickly and clearly. </div>
                        <div className="catagoryContent">Infographics are the graphical or visual representation of the data. We understand that raw data is not everyone’s cup of tea. It can easily put you off-track and soon you may end up lost in numbers. We at Finkarma collect, analyze and present the raw data in its most simple and interactive format. Visit our Infographics for deciphering hidden trends and patterns in the financial information.</div>
                    </div>
                </div>
                <div className="row pb-5 catagoryFlex">
                    <div className="col-md-6">
                        <Link to="/PersonalFinance"><img src={signIn} alt="catagory" className="catagoryImage"/></Link>
                    </div>
                    <div className="col-md-6">
                        <Link to="/PersonalFinance" className="catagoryTitle">Personal Finance</Link>
                        <div className="catagoryAbout">Covers managing your money as well as saving and investing.</div>
                        <div className="catagoryContent">Are you worried about your future financial planning? You should really perceive the basic elements of financial planning such as budgeting, debt, credit, loans and retirement etc. Our writeups might help you to understand these elements so that you can develop strategies for your smart personal finance.</div>
                        
                    </div>
                </div>
                <div className="row pb-5">
                    <div className="col-md-6">
                        <Link to="/Crypto"><img src={easyMoney} alt="catagory" className="catagoryImage"/></Link>
                    </div>
                    <div className="col-md-6">
                        <Link to="/Crypto" className="catagoryTitle">Crypto</Link>
                        <div className="catagoryAbout">A crypto is a digital or virtual currency that is secured by cryptography, which makes it nearly impossible to counterfeit or double-spend.</div>
                        <div className="catagoryContent">Cryptocurrencies have been transforming the financial world. These digital currencies may allow for a secure online payment. You may acquaint yourself with this trending topic through our updates. We will not only introduce you to the theory but also to the practice of dealing with cryptocurrencies.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catagory;
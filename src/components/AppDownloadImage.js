import '../css/AppDownloadImage.css';
import googlePlay from '../images/googlePlay.png';

const AppDownloadImage = () => {
    return ( 
        <div className="AppDownloadImage">
            <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.finkarma.app"><img src={googlePlay} alt="play Store" className="LandingplayStore"/></a>
        </div>
     );
}
 
export default AppDownloadImage;
import '../css/PrivacyPolicy.css'
import { Helmet } from 'react-helmet';

const PrivacyPolicy = () => {
    return ( 
        <div className="PrivacyPolicy">
            <Helmet>
                <title>Finkarma - Privacy Policy</title>
                <meta
                    name="description"
                    content="finkarma - privacy policy" 
                />
            </Helmet>
            <div className="container">
                <div className="h1">PRIVACY NOTICE</div>
                <div className="h5 text-small">Last updated June 18, 2021</div>
                <p>Thank you for choosing to be part of our community at KA FINTECH LLP ("Company", "we", "us", "our"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at finkarma.in@gmail.com.</p>
                <p>When you visit our website <a href="https://finkarma.in">finkarma.in</a> (the "Website"), use our mobile application, as the case may be (the "App") and more generally, use any of our services (the "Services", which include the Website and App), we appreciate that you are trusting us with your personal information. We take your privacy very seriously. In this privacy notice, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Services immediately.</p>
                <p>This privacy notice applies to all information collected through our Services (which, as described above, includes our Website and App), as well as, any related services, sales, marketing or events.</p>
                <div className="h6">Please read this privacy notice carefully as it will help you understand what we do with the information that we collect.</div>

                <div className="h2 mt-5">TABLE OF CONTENTS</div>
                <div>1. WHAT INFORMATION DO WE COLLECT?</div>
                <div>2. HOW DO WE USE YOUR INFORMATION?</div>
                <div>3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</div>
                <div>4. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</div>
                <div>5. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</div>
                <div>6. HOW LONG DO WE KEEP YOUR INFORMATION?</div>
                <div>7. HOW DO WE KEEP YOUR INFORMATION SAFE?</div>
                <div>8. WHAT ARE YOUR PRIVACY RIGHTS?</div>
                <div>9. CONTROLS FOR DO-NOT-TRACK FEATURES</div>
                <div>10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</div>
                <div>11. DO WE MAKE UPDATES TO THIS NOTICE?</div>
                <div>12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</div>
                <div>13. HOW CAN YOU REVIEW, UPDATE OR DELETE THE DATA WE COLLECT FROM YOU?</div>

                <div className="h2 mt-5">1. WHAT INFORMATION DO WE COLLECT?</div>
                <div className="h4 font-weight-normal">Personal information you disclose to us</div>
                <div className="font-italic mb-3"><b>In Short: </b> We collect personal information that you provide to us.</div>
                <p>We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services or otherwise when you contact us.</p>
                <p>The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make and the products and features you use. The personal information we collect may include the following:</p>
                <p><b>Personal Information Provided by You.</b> We collect email addresses; names; usernames; passwords; contact or authentication data; and other similar information.</p>
                <p><b>Social Media Login Data.</b> We may provide you with the option to register with us using your existing social media account details, like your Facebook, Twitter or other social media account. If you choose to register in this way, we will collect the information described in the section called "HOW DO WE HANDLE YOUR SOCIAL LOGINS?" below.</p>
                <p>All personal information that you provide to us must be true, complete and accurate, and you must notify us of any changes to such personal information.</p>
                <div className="h4 font-weight-normal">Information automatically collected</div>
                <div className="font-italic my-3"><b>In Short: </b> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</div>
                <p>We automatically collect certain information when you visit, use or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</p>
                <p className="font-weight-bold">The information we collect includes:</p>
                <ul>
                    <p>-<span className="font-italic font-weight-bold">Log and Usage Data</span> is service-related, diagnostic, usage and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called 'crash dumps') and hardware settings).</p>
                    <p>-<span className="font-italic font-weight-bold">Device Data</span>  We collect device data such as information about your computer, phone, tablet or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model Internet service provider and/or mobile carrier, operating system and system configuration information.</p>
                    <p>-<span className="font-italic font-weight-bold">Location Data</span>  We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. Note however, if you choose to opt out, you may not be able to use certain aspects of the Services.</p>
                </ul>
            </div>
        </div>
    );
}
 
export default PrivacyPolicy;
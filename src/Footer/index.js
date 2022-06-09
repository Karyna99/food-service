import Button from "../Button";
import "./style.css";
import appStore from "../images/app_store.svg";
import googlePlay from "../images/google_play.svg";
import youtube from "../images/youtube.svg";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <h2 className="footer__header">ORDER FRESH FOOD <br />DELIVERY NOW!</h2>
                <Button
                    title={"ORDER"}
                />
            </div>
            <div>
                <h2 className="footer__header">APP</h2>
                <p className="footer__paragraph">
                    When applying through the application,<br />
                    You will receive a 50% discount on your <br />
                    first delivery.Available for download here:
                </p>
                <div className="footer__links--app">
                    <img src={googlePlay} alt="" />
                    <img src={appStore} alt="" />
                </div>
                <div className="footer__links--socialMedia">
                <img src={youtube} alt="" />
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
import style from "./contact.module.scss";
const Contact = (): JSX.Element => {
  return (
    <section className={style.contact}>
      <div className={style.wrapper}>
        <div className={style.text}>
          <p>be in touch with us:</p>
        </div>
        <div className={style.mail}>
          <input type="email" placeholder="Enter your email....." />
          <button>JOIN US</button>
        </div>
        <div className={style.icons}>
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <GoogleIcon />
          <PinterestIcon/>
        </div>
      </div>
    </section>
  );
};

export default Contact;

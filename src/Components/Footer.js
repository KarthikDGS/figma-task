import classes from "./footer.module.css";
import { BiUpArrow } from "react-icons/bi";
const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footer_content}>
        <div className={classes.footer_item}>
          <h3>market Cap</h3>
          <h2 className={classes.cap}>
            <BiUpArrow style={{ color: "#30AF9A" }} />
            95
          </h2>
        </div>
        <div className={classes.verticalLine}></div>
        <div className={classes.footer_item}>
          <h3>market cap rank</h3>
          <h2 className={classes.rank}>#8</h2>
        </div>
        <div className={classes.verticalLine}></div>
        <div className={classes.footer_item}>
          <h3>24 hr volume</h3>
          <h2 className={classes.volume}>$345</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;

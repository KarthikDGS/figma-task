import classes from "./footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footer_content}>
        <div className={classes.footer_item}>
          <h3>market Cap</h3>
          <h2 className={classes.cap}>
            <img src={require("../Images/Vector 14.png")} alt="upper.jpg" />
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

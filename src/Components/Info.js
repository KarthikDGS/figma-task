import React from "react";
import SimpleAreaChart from "./Areachart";
import classes from "./info.module.css";
import Footer from "./Footer";

const Info = () => {
  return (
    <div>
      <div className={classes.overall}>
        <div className={classes.align}>
          <div className={classes.information}>
            <h3>Binance(BNB)</h3>
            <h2>$432</h2>
            <p className={classes.para}>
              Gain/Loss 24hr:<span className={classes.spec}>+7.12%</span>
            </p>
          </div>
          <div className={classes.close}>
            <button>X</button>
          </div>
          <div className={classes.timing}>
            <p className={classes.item}>15M</p>
            <p className={classes.item}>1H</p>
            <p className={classes.item}>4H</p>
            <p className={classes.item} style={{ fontWeight: "bold" }}>
              24H
            </p>
            <p className={classes.item}>1W</p>
          </div>
        </div>
        <div className={classes.date}>
          <p>16 JUNE 2023</p>
          <h4>5:00 PM</h4>
        </div>
        <div className={classes.chart}>
          <SimpleAreaChart />
          <hr style={{ marginTop: 25 }} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Info;

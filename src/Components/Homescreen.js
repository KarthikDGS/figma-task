import classes from "./homescreen.module.css";
import Info from "./Info";
const Homescreen = () => {
  return (
    <div>
      <Info />
      <img
        className={classes.image}
        src={require("../Images/Rectangle.png")}
        alt="Background"
      />
    </div>
  );
};
export default Homescreen;

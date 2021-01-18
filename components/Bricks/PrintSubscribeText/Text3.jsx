import style from "./textComponents.module.scss";
import button from "../../../elements/Buttons/buttonElement.module.scss";
import Button from "../../../elements/Buttons/buttonElement";

const Text3 = ({onClick}) => {

  return (
    <div className={style.text2}>
      <h2>What type of subscription would you like?</h2>
      <p>
        We offer two different subscription types: coupons and home delivery.
        Coupons are only available to customers in Italy.
      </p>

      <div className={style.button}>
        <h4>6 days, home delivery</h4>
        <span>From €30 Monthly</span>
        <p>Home delivered 6 days a week, excluding Sunday</p>
      </div>
      
      <h4>Switch to coupons</h4>
      <span>
        All subscriptions are auto-renew, but can be cancelled at anytime.
      </span>

      <Button
        className={`${button.button} ${button.buttonFull}`}
        value="Continue"
        type="button"
        onClick={onClick}
      />
    </div>
  );
};
export default Text3;

import LinkElement from "../../../elements/Buttons/linkElement";
import button from "../../../elements/Buttons/buttonElement.module.scss";
import style from "./subscribeBar.module.scss";
import PropTypes from "prop-types";
import { withTranslation } from "../../../i18n";

const SubscribeBar = ({
  onClickDelivery,
  onClickPackage,
  typeValue,
  packValue,
  current1,
  current2,
  t
}) => {
  return (
    <div className={style.bar}>
      <div className={`${style.barContainer} container`}>
        <div className={style.steps}>
          <div className={style.step}>
            <div>
              <span>{t('subscribeBar.step1')}</span>
              <span className={style.chosen}> {current1} </span>
            </div>
            <div>
              <span>{t('subscribeBar.type')} </span>
              <span className={style.selectedType}>
                {typeValue}{" "}
                <span onClick={onClickDelivery} className={style.switcher}>
                  {" "}
                  Edit
                </span>
              </span>
            </div>
          </div>
          <div className={style.step}>
            <div>
              <span>{t('subscribeBar.step2')}</span>
              <span className={style.chosen}> {current2} </span>
            </div>
            <div>
              <span>{t('subscribeBar.pack')} </span>
              <span className={style.selectedType}>
                {packValue}{" "}
                <span onClick={onClickPackage} className={style.switcher}>
                  {" "}
                  Select
                </span>
              </span>
            </div>
          </div>
          <div className={style.step}>
            <div>
              <span>{t('subscribeBar.step3')} </span>
              <span></span>
            </div>
            <div>
              <span>{t('subscribeBar.renewal')}</span>
              <span>
                <span className={style.switcher}></span>
              </span>
            </div>
          </div>
        </div>
        <div className={style.plan}>
          <span>$30/Monthly</span>
          <LinkElement
            className={`${button.button} ${button.buttonFull} ${button.disabled}`}
            href="#"
            target="Pay Now"
          />
        </div>
      </div>
    </div>
  );
};

SubscribeBar.getInitialProps = async () => ({
  namespacesRequired: ["banner"],
});

SubscribeBar.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation(["banner"])(SubscribeBar);

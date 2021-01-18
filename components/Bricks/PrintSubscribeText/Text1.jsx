import style from "./textComponents.module.scss";
import { useState } from "react";
import { withTranslation } from "../../../i18n";
import PropTypes from "prop-types";
import button from "../../../elements/Buttons/buttonElement.module.scss";
import Button from "../../../elements/Buttons/buttonElement";

const Text1 = ({ onClick, onClickType, t }) => {
  const buttons = [
    {
      id: t("deliveryType.type1.id"),
      value: t("deliveryType.type1.value"),
      isChecked: false
    },
    {
      id: t("deliveryType.type2.id"),
      value: t("deliveryType.type2.value"),
      isChecked: true
    },
  ];

  return (
    <div className={style.text1}>
      <h2>{t("titleText.title")}</h2>
      <p>
      {t("titleText.subTitle")}
      </p>
      <div className={style.buttons}>
        {buttons.map((item) => {
          return (
            <div key={item.value}>
              <input
                type="radio"
                name="select-type"
                value={item.value}
                id={item.value}
                defaultChecked={item.isChecked}
              />
              <label
                htmlFor={item.value}
                className={`${button.button} ${button.buttonHollow}`}
                value={item.value}
                onClick={onClickType}
                data-value={item.value}
              >
                {item.value}
              </label>
            </div>
          );
        })}
      </div>
      <span>
      {t("footnote1")}
      </span>

      <Button
        className={`${button.button} ${button.buttonFull}`}
        value={t("continueButton")}
        type="button"
        onClick={onClick}
      />
    </div>
  );
};

Text1.getInitialProps = async () => ({
  namespacesRequired: ["choosePlans", "common"],
});

Text1.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation(["choosePlans", "common"])(Text1);

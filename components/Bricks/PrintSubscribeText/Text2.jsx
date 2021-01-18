import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "../../../i18n";
import style from "./textComponents.module.scss";
import button from "../../../elements/Buttons/buttonElement.module.scss";
import Button from "../../../elements/Buttons/buttonElement";

const Text2 = ({ onClick, onClickPack, t }) => {
  const buttonArray = [
    {
      id: t("packType.type1.id"),
      dataValue: t("packType.type1.dataValue"),
      title: t("packType.type1.title"),
      price: t("packType.type1.price"),
      desc: t("packType.type1.desc"),
      isChecked: true
    },
    {
      id: t("packType.type2.id"),
      dataValue: t("packType.type2.dataValue"),
      title: t("packType.type2.title"),
      price: t("packType.type2.price"),
      desc: t("packType.type2.desc"),
      isChecked: false
    },
    {
      id: t("packType.type3.id"),
      dataValue: t("packType.type3.dataValue"),
      title: t("packType.type3.title"),
      price: t("packType.type3.price"),
      desc: t("packType.type3.desc"),
      isChecked: false
    },
    {
      id: t("packType.type4.id"),
      dataValue: t("packType.type4.dataValue"),
      title: t("packType.type4.title"),
      price: t("packType.type4.price"),
      desc: t("packType.type4.desc"),
      isChecked: false
    },
  ];

  const pushClass = (e) => {
    onClickPack(e);
  };

  return (
    <div className={style.text2}>
      <h2>{t("titleText.title")}</h2>
      <p>
      {t("titleText.subTitle")}
      </p>
      {buttonArray.map((item) => {
        return (
          <div key={item.id}>
            <input
              type="radio"
              name="select-subscribe"
              value={item.dataValue}
              id={item.id}
              defaultChecked={item.defaultChecked}
            />
            <label
              htmlFor={item.id}
              className={style.button}
              onClick={pushClass}
              data-value={item.dataValue}
            >
              <h4 data-value={item.dataValue}>{item.title}</h4>
              <span data-value={item.dataValue}>{item.price}</span>
              <p data-value={item.dataValue}>{item.desc}</p>
            </label>
          </div>
        );
      })}
      <h4>{t("switch")}</h4>
      <span>
      {t("footnote2")}
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

Text2.getInitialProps = async () => ({
  namespacesRequired: ["choosePlans"],
});

Text2.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation(["choosePlans"])(Text2);

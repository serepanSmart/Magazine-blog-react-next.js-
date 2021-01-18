import InputElement from "../../../elements/Inputs/inputElement";
import CheckBoxElement from "../../../elements/Inputs/checkBoxElement";
import ButtonElement from "../../../elements/Buttons/buttonElement";
import button from "../../../elements/Buttons/buttonElement.module.scss";
import form from "./formSignUp.module.scss";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { withTranslation } from "../../../i18n";
import PropTypes from "prop-types";

const Form = ({ t }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const regEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  const inputs = [
    {
      type: "email",
      id: "sign-up-email",
      placeholder: t("signup:phEmail"),
      label: t("signup:labelEmail"),
      register: register({ pattern: regEmail }),
    },
    {
      type: "password",
      placeholder: t("signup:phPassword"),
      id: "sign-up-password",
      label: t("signup:labelPassword"),
      register: register({ min: 8 }),
    },
    {
      type: "password",
      placeholder: t("signup:phPasswordConfirm"),
      id: "confirm-sign-up-email",
      label: t("signup:confirmPassword"),
      register: register({ min: 8 }),
    },
  ];
  return (
    <section className={`${form.signUpForm} container`}>
      <div className={form.title}>
        <h1>{t("signup:h1")}</h1>
        <p>
          {t("signup:subtitle")}{" "}
          <Link href="#">
            <a className="link link__decor">{t("signup:subtitleLink")}</a>
          </Link>
        </p>
      </div>
      <div>
        <form action="#" id="signup-form" onSubmit={handleSubmit(onSubmit)}>
          {inputs.map((item) => {
            return (
              <InputElement
                key={item.id}
                type={item.type}
                placeholder={item.placeholder}
                id={item.id}
                label={item.label}
                register={item.register}
              />
            );
          })}
          <div className={form.checkboxHolder}>
            <CheckBoxElement
              id="sign-in-agree"
              label={t("signup:labelCheckbox")}
              name="sign-in-agree"
              isRequired = {true}
            />
            <Link href="#">
              <a className="link link__decor">{t("signup:linkCheckbox")}</a>
            </Link>
          </div>
          <ReCAPTCHA sitekey="Your client site key" />
          <ButtonElement
            type="sumbit"
            className={`${button.button} ${button.buttonFull}`}
            value={t("signup:buttonValue")}
          />
        </form>
      </div>
    </section>
  );
};

Form.getInitialProps = async () => ({
  namespacesRequired: ["signup"],
});

Form.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(["signup"])(Form);

import style from "./textBlock50.module.scss";
import PropTypes from "prop-types";
import { withTranslation } from "../../../i18n";

const textBlock50 = ({ title, subtitle, text }) => {
  return (
    <section className={`${style.textItem} container`}>
      <div>
        <h1>{title}</h1>
        <h2 className={`${style.plan}`}>{subtitle}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
};

textBlock50.getInitialProps = async () => ({
  namespacesRequired: ["subscribe"],
});

textBlock50.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(["subscribe"])(textBlock50);

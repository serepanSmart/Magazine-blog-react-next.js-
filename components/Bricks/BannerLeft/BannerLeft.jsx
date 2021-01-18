import style from "./bannerLeft.module.scss";
import PropTypes from "prop-types";
import { withTranslation } from "../../../i18n";

const BannerLeft = ({t, src}) => {
  return (
    <div className={style.banner}>
      <h1>{t('bannerLeft.h1')}</h1>
      <p>
      {t('bannerLeft.subtitle')}
      </p>
      <img src={src} alt="banner" />
    </div>
  );
};
BannerLeft.getInitialProps = async () => ({
  namespacesRequired: ["banner",],
});

BannerLeft.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation(["banner"])(BannerLeft);

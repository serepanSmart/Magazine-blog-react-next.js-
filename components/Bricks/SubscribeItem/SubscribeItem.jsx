import button from "../../../elements/Buttons/buttonElement.module.scss"
import Link from '../../../elements/Buttons/linkElement'
import style from "./subscribeItem.module.scss"
import {withTranslation } from '../../../i18n'
import PropTypes from 'prop-types'

const SubscribeItem = ({ title, plan, text, img, li, alt, className, target, href}) => {
  return (
    <section className={`${style.subscribeItem} container`}>
      <div className={style.content}> 
        <h2>{title}</h2>
        <h2 className={style.plan}>{plan}</h2>
        <p>
         {text}
        </p>
        <ul>
          <li>{li}</li>
        </ul>
        <Link
      className={`${button.button} ${button.buttonFull}`}
      target={target}
      href={href}/>
      </div>
     <div className={style.img}>
         <img src={img} alt={alt}/>
     </div>
    </section>
  );
};

SubscribeItem.getInitialProps = async () => ({
  namespacesRequired: ['subscribe'],
})

SubscribeItem.propTypes = {
t: PropTypes.func.isRequired,
}

export default withTranslation(['subscribe'])(SubscribeItem);

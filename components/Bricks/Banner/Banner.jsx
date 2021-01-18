import style from './banner.module.scss'
import {withTranslation } from '../../../i18n'
import PropTypes from 'prop-types'

const Banner= ({ title, subtitle }) => {
    return (
        <div className={style.banner}>
            <div className={`container ${style.bannerContainer}`}>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </div>
    )
}

Banner.getInitialProps = async () => ({
    namespacesRequired: ['banner'],
  })
  
Banner.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation(['banner'])(Banner);
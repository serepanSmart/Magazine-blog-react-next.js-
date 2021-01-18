import React, { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types'
import { i18n, withTranslation } from '../../../i18n'
import LinkElement from '../../../elements/Buttons/linkElement';
import ButtonElement from '../../../elements/Buttons/buttonElement';
import button from '../../../elements/Buttons/buttonElement.module.scss'
import style from './header.module.scss'

const Header = ({ t }) => {
  const [headerMobile, setHeaderMobile] = useState(false)

  const openMenu = () => {
    setHeaderMobile(!headerMobile)
  }
  return (
    <header className={style.header}>
      <div className={`container ${style.headerContainer}`}>
        <Link href="/"><a className={style.logo}><img src="/static/images/logo.svg" alt="" /></a></Link>
        <div className={style.headerNavbar}>
          <LinkElement
            href="/subscribe"
            target={t('header.subscribe')}
            className={`${button.button} ${button.buttonHollow}`}
          />
          <LinkElement
            href="#"
            target={t('header.login')}
            className={`${button.button} ${button.buttonFull}`}
          />
          <div className={style.headerNavbarToggle} onClick={openMenu}>
            <span>{t('header.menu')}</span>
            <div>
              <span className={style.toggle}></span>
              <span className={style.toggle}></span>
              <span className={style.toggle}></span>
            </div>
          </div>
        </div>
        {headerMobile && <div className={style.headerContainerMobile}>
          <span className={style.closeHeader} onClick={openMenu}>&times;</span>
        </div>}

      </div>
    </header>
  )
};

Header.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

Header.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation(['common'])(Header);

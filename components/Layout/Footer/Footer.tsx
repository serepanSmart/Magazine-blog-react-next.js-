import React from 'react'
import style from './footer.module.scss'
import Link from 'next/link'

const Footer = () => {
  let currentDate = new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  let year = new Date().getFullYear()

  return (
    <div className={style.footer}>
      <div className={style.footerTop}>
        <div><h5>THE POSTER / <span>{currentDate}</span></h5></div>
      </div>
      <div className={style.container}>
        <div className={style.footerContent}>
          <div className={style.col}>
            <h6 className="colTitle">
              USER LINK
            </h6>
            <ul>
              <li><Link href="#"><a className="link">Come In</a></Link></li>
              <li><Link href="#"><a className="link">Sign In</a></Link></li>
            </ul>
            <h6 className="colTitle">
              SUBSCRIPTIONS 2
            </h6>
            <ul>
              <li><Link href="#"><a className="link">Subsciptions</a></Link></li>
              <li><Link href="#"><a className="link">Rates</a></Link></li>
              <li><Link href="#"><a className="link">Corrections</a></Link></li>
              <li><Link href="#"><a className="link">How this site works</a></Link></li>
              <li><Link href="#"><a className="link">Photografic rights the poster</a></Link></li>
              <li><Link href="#"><a className="link">Terms and conditions</a></Link></li>
              <li><Link href="#"><a className="link">Privacy</a></Link></li>
            </ul>
          </div>
          <div className={style.col}>
            <h6 className="colTitle">
              THE POSTER
            </h6>
            <ul>
              <li><Link href="#"><a className="link">gerenza</a></Link></li>
              <li><Link href="#"><a className="link">Store</a></Link></li>
              <li><Link href="#"><a className="link">#ilmiomanifesto</a></Link></li>
            </ul>
            <h6 className="colTitle">
              SOCIAL NETWORK
            </h6>
            <ul>
              <li><Link href="#"><a className="link">Facebook</a></Link></li>
              <li><Link href="#"><a className="link">Instagram</a></Link></li>
              <li><Link href="#"><a className="link">Pinterest</a></Link></li>
              <li><Link href="#"><a className="link">Twitter</a></Link></li>
              <li><Link href="#"><a className="link">Youtube</a></Link></li>
            </ul>
          </div>
          <div className={style.col}>
            <h6 className="colTitle">
              NEWS
            </h6>
            <ul>
              <li><Link href="#"><a className="link">Editorial</a></Link></li>
              <li><Link href="#"><a className="link">International</a></Link></li>
              <li><Link href="#"><a className="link">Policy</a></Link></li>
              <li><Link href="#"><a className="link">Italy</a></Link></li>
              <li><Link href="#"><a className="link">Work</a></Link></li>
              <li><Link href="#"><a className="link">Europe</a></Link></li>
              <li><Link href="#"><a className="link">School</a></Link></li>
              <li><Link href="#"><a className="link">The Investigation</a></Link></li>
              <li><Link href="#"><a className="link">Economy</a></Link></li>
              <li><Link href="#"><a className="link">Comments</a></Link></li>
              <li><Link href="#"><a className="link">Extraterrestrial</a></Link></li>
            </ul>
          </div>
          <div className={style.col}>
            <h6 className="colTitle">
              COLLECTIVE
            </h6>
            <ul>
              <li><Link href="#"><a className="link">The collective of the manifesto</a></Link></li>
              <li><Link href="#"><a className="link">The history of the manifesto</a></Link></li>
              <li><Link href="#"><a className="link">Charter status</a></Link></li>
              <li><Link href="#"><a className="link">Manifesto Regulation</a></Link></li>
              <li><Link href="#"><a className="link">Balance sheets and accounts</a></Link></li>
              <li><Link href="#"><a className="link">Site founders</a></Link></li>
              <li><Link href="#"><a className="link">#iorompo</a></Link></li>
              <li><Link href="#"><a className="link">Advertising on the poster</a></Link></li>
              <li><Link href="#"><a className="link">Special discount Sicily and Sardinia</a></Link></li>
              <li><Link href="#"><a className="link">About us</a></Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={style.footerCopyright}>
        <div><p>&copy;<span>{year}</span> THE NEW MANIFESTO COOP COMPANY. PUBLISHING</p></div>
      </div>
    </div>
  )
};

Footer.propTypes = {};

export default Footer;

import React from 'react';
import { withTranslation } from '../../i18n'
import PropTypes from 'prop-types';
import { Layout } from '../../components/Layout';
import Head from 'next/head';
import Banner from '../../components/Bricks/Banner/Banner';
import SubscribeItem from '../../components/Bricks/SubscribeItem/SubscribeItem'
import TextBlock50 from '../../components/Bricks/TextBlock50/TextBlock50'
import style from './subscribe.module.scss'


const Subscribe = ({ t }) => {
  const subscribeItems = [
    {
      title: t('subscribe:1.title'),
      plan: t('subscribe:1.plan'),
      text: t('subscribe:1.text'),
      li: t('subscribe:1.list'),
      img: "/static/images/subscribe-decor.png",
      target: t('subscribe:1.link'),
      href: "#",
      id: t('subscribe:1.title')
    }, 
    {
      title: t('subscribe:2.title'),
      plan: t('subscribe:2.plan'),
      text: t('subscribe:2.text'),
      li: t('subscribe:2.list'),
      img: "/static/images/subscribe-decor.png",
      target: t('subscribe:2.link'),
      href: "#",
      id: t('subscribe:2.title')
    },
    {
      title: t('subscribe:3.title'),
      plan: t('subscribe:3.plan'),
      text: t('subscribe:3.text'),
      li: t('subscribe:3.list'),
      img: "/static/images/subscribe-decor-2.png",
      target: t('subscribe:3.link'),
      href: "#",
      id: t('subscribe:3.title')
    }
  ]
  return (
    <Layout>
      <Head>
        <title>Subscribe</title>
      </Head>
      <Banner
      title={t('banner:subscribe.h1')}
      subtitle = {t('banner:subscribe.subtitle')}
      />
      <div className={style.subscribeContainer}>
      <SubscribeItem
      title={subscribeItems[0].title}
      plan={subscribeItems[0].plan}
      text={subscribeItems[0].text}
      li={subscribeItems[0].li}
      img={subscribeItems[0].img}
      target={subscribeItems[0].target}
      href={subscribeItems[0].href}
      />
      <TextBlock50
      title={t('subscribe:text.title')}
      subtitle={t('subscribe:text.subtitle')}
      text={t('subscribe:text.text')}
      />
      {subscribeItems
      .filter((item) => item.id !== t('subscribe:1.title'))
      .map(item => {
          return (
            <SubscribeItem
            key={item.id}
            title={item.title}
            plan={item.plan}
            text={item.text}
            li={item.li}
            img={item.img}
            target={item.target}
            href={item.href}
            />
          )
        })
      }
      </div>
    </Layout>
  );
};

Subscribe.getInitialProps = async () => ({
  namespacesRequired: ['common', 'subscribe', 'banner'],
})

Subscribe.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation(['common', 'subscribe', 'banner'])(Subscribe);

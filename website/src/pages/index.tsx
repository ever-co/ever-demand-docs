/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.css';


type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};


function HomepageHeader():JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  const {i18n} = useDocusaurusContext();
  const currentLocale = i18n.currentLocale;
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title text--primary">

        {translate({id: 'home.message', message: 'Ever® Platform'},currentLocale)}
        </Heading>
        <p className="hero__subtitle text--primary">
        {translate({id: 'home.description', message: 'Open-Source, Real-Time, Reactive, On-Demand Commerce Platform build with TypeScript'},currentLocale)}
         </p>
        <div className={styles.buttons}>
        
          <Link
            className="button button--outline button--primary button--lg text-text--primary border--primary"
            to="/docs/intro">
               {translate({id: 'homeActionLink.message', description: 'Get started reading the docs',message:'Start By Reading an Introduction'},currentLocale)}
               
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home():JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} · ${siteConfig.tagline}`}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
      <div className="container home-container">
        <img src="/overview.jpg" alt="" />
      </div>
      </main>
    </Layout>
  );
}

import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'What Is This?',
    Svg: require('@site/static/img/undraw_reading_time_re_phf7.svg').default,
    description: (
      <>
        This is the documentation website for a medieval fantasy roleplay server on Discord. It serves as a comprehensive resource for members, providing information on the server's lore and world-building.
      </>
    ),
  },
  {
    title: 'Why Does This Exist?',
    Svg: require('@site/static/img/undraw_bibliophile_re_xarc.svg').default,
    description: (
      <>
        This website exists to provide members with a central location to find all the information they need to fully immerse themselves in the world. It also serves as a reference for members, providing them with the tools they need to create engaging and memorable role-playing experiences.
      </>
    ),
  },
  {
    title: 'How Can I Contribute?',
    Svg: require('@site/static/img/undraw_writer_q06d.svg').default,
    description: (
      <>
        This documentation website welcomes community contributions, whether it be in the form of submitting content, correcting errors or providing feedback. Joining the team of lore writers is also an option. To contribute, reach out to the server's staff via the <code>suggestions</code> channel.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

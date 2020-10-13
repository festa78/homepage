import * as React from 'react';

import Layout from 'Layout';

const index: React.SFC = () => (
  <Layout>
    <h1>festa78&apos;s homepage</h1>

    <h2>Profile</h2>

    <p>
      Software engineer focusing on machine learning / computer vision related
      applications.
    </p>
    <p>
      Keywords: Embedded ML, MLOps, Data Annotation Ops, Computer Vision, Deep
      Learning, Self-driving, Anomaly Detection.
    </p>

    <h2>Publications</h2>
    <ul>
      <li>
        <a href="https://scholar.google.com/citations?user=BOCEQSYAAAAJ">
          Google Scholar
        </a>
      </li>
    </ul>
    <h2>Links</h2>
    <ul>
      <li>
        <a href="https://github.com/festa78">GitHub</a>
      </li>
      <li>
        <a href="https://qiita.com/festa78">Qiita</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/takaaki-tagawa-a62543bb/">
          LinkedIn
        </a>
      </li>
    </ul>
  </Layout>
);

export default index;

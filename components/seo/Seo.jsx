import Head from 'next/head';

const Seo = ({ pageTitle }) => (
  <>
    <Head>
      <title>{pageTitle && `${pageTitle} || Nikhila Portfolio`}</title>
    </Head>
  </>
);

export default Seo;

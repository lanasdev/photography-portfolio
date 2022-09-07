/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import Layout from "../components/Layout";
import cn from "classnames";
import { GetStaticProps } from "next";
import { request } from "lib/datocms";
import { Image } from "react-datocms";
import Title from "components/Title";
import Contact from "components/Contact";
import Footer from "components/Footer";


const ABOUT_QUERY = `query AboutQuery {
  headline {
    title
    subtitle
  }
  about {
    title
    image {
      responsiveImage(imgixParams: {auto: format, w: "512", fit: crop}) {
        srcSet
        webpSrcSet
        sizes
        src
        width
        height
        aspectRatio
        alt
        title
        base64
      }
    }
    _seoMetaTags {
      attributes
      content
      tag
    }
    text
  }
  calltoaction {
    smalltitle
    url
    buttontext
  }
  social {
    instagram
    twitter
    email
  }

}
`;


const AboutPage = ({ data }) => (
  <Layout title="About">
    <Title headline={data.headline} />
    <div className="flex flex-col justify-center items-center pt-24">
      <Image data={data.about.image.responsiveImage} />
      <caption>{data.about.title || "Photographix"} </caption>

      <p className="py-16 max-w-md">
        {data.about.text}
      </p>

    </div>
    <Contact calltoaction={data.calltoaction} />
    <Footer social={data.social} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async (context) => {

  const data = await request({
    query: ABOUT_QUERY,
  });

  return {
    props: {
      data,
    },
  };
}
export default AboutPage;

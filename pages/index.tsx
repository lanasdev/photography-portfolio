/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import Layout from "../components/Layout";
// import Image from "next/image";
import { useState } from "react";
import cn from "classnames";
import { GetStaticProps } from "next";

import { request } from "../lib/datocms";
import { Image, renderMetaTags } from "react-datocms";
import Title from "components/Title";
import Contact from "components/Contact";
import Footer from "components/Footer";

const HOMEPAGE_QUERY = `query HomePage($limit: IntType) {
  site: _site {
    favicon: faviconMetaTags {
      attributes
      content
      tag
    }
    locales
    globalSeo {
      titleSuffix
      twitterAccount
      facebookPageUrl
      siteName
    }
  }
  allImages(first: $limit) {
    id
    slug
    image {
      responsiveImage(imgixParams: {fit: crop, w: 500, h: 500, auto: format}) {
        src
        width
        height
        alt
        base64    
      }
    }
  }
  _allImagesMeta {
    count
  }
  headline {
    title
    subtitle
  }
  calltoaction {
    url
    smalltitle
    buttontext
  }
  social {
    instagram
    twitter
    github
    email
  }
}`;

const IndexPage = ({ data }) => {
  return (
    <Layout isHome={true} social={data.social}>
      {/* <Head>{renderMetaTags(data._site.globalSeo.concat(data.site.favicon))}</Head> */}
      <Title headline={data.headline} />
      <Gallery data={data} />
      <Contact calltoaction={data.calltoaction} />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <Footer social={data.social} />
    </Layout>
  );
}
const Gallery = ({ data }) => {
  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {data.allImages.map((i) => (
          (<Link
            href={`/${i.slug}`}
            key={i.slug}
            className="flex flex-col justify-center items-center"
            aria-label={i?.image.alt || i.image.responsiveImage.alt}>

            <Image className="rounded-sm hover:rounded-lg ease-in-out duration-200" data={i?.image.responsiveImage} />

          </Link>)
        ))}
      </div>
    </div>
  );
};


export const getStaticProps: GetStaticProps = async (context) => {

  const data = await request({
    query: HOMEPAGE_QUERY,
  });

  return {
    props: {
      data,
    },
  };
}
export default IndexPage;

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


const LAYOUT_QUERY = `query LayoutQuery {
  headline {
    title
    subtitle
  }
  _site {
    globalSeo {
      siteName
      fallbackSeo {
        description
        title
      }
    }
    faviconMetaTags {
      attributes
      content
      tag
    }
  }
  calltoaction {
    smalltitle
    url
    buttontext
  }
}`;


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
      responsiveImage(imgixParams: {fit: crop, w: 300, h: 300, auto: format}) {
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
}`;

const IndexPage = ({ data }) => {
  return (
    <Layout title={data.site.globalSeo.siteName || "Bart Photography"}>
      {/* <Head>{renderMetaTags(data._site.globalSeo.concat(data.site.favicon))}</Head> */}
      <Title headline={data.headline} />
      <Gallery data={data} />

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </Layout>
  );
}
const Gallery = ({ data }) => {
  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {data.allImages.map((i) => (
          <Link href={`/${i.slug}`} key={i.slug}>
            <a className="flex flex-col justify-center items-center">
              <Image className="rounded-sm" data={i?.image.responsiveImage} />
            </a>
          </Link>
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

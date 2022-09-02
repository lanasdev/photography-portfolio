/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import Layout from "../components/Layout";
// import Image from "next/image";
import { useState } from "react";
import cn from "classnames";
import { GetStaticProps } from "next";

import { request } from "../lib/datocms";
import { Image } from "react-datocms";


import street1 from "public/img/street2.jpg";
import street2 from "public/img/street2.jpg";

const HOMEPAGE_QUERY = `query HomePage($limit: IntType) {
  allImages(first: $limit) {
    id
    slug
    image {
      responsiveImage(imgixParams: { fit: crop, w: 400, h: 400, auto: format }) {
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
}`;

const IndexPage = ({ data }) => {
  return (
    <Layout title="Bart Photography">
      <div className="flex flex-col items-center justify-center pt-24 mx-8">
        <h1 className="text-4xl font-bold md:text-6xl ">Bart Photography</h1>
        <h2 className="pt-2 text-2xl"> capturing moments of life</h2>
      </div>
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
          <Link href={`/image/${i.slug}`} key={i.slug}>
            <a className="flex flex-col justify-center items-center">
              <Image data={i?.image.responsiveImage} />
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
    variables: { limit: 20 }
  });
  return {
    props: {
      data,
    },
  };
}
export default IndexPage;

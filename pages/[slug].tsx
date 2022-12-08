/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";

import Layout from "components/Layout";
import { useState } from "react";
import cn from "classnames";
import { GetStaticProps, GetStaticPaths } from "next";
import { request } from "lib/datocms";
import { Image } from "react-datocms";
import Title from "components/Title";
import Contact from "components/Contact";
import Footer from "components/Footer";

const ONE_IMAGE_QUERY = `query OneImageQuery($eq: String!) {
  image(filter: {slug: {eq: $eq}}) {
    id
    slug
    name
    image {
      responsiveImage(imgixParams: { auto: format }) {
        src
        width
        height
        alt
        base64
    
      }
    }
  }
  headline {
    title
    subtitle
  }
  calltoaction {
    smalltitle
    url
    buttontext
  }
  social {
    instagram
    twitter
    github
    email
  }
}`;



const ImageBig = ({ data }) => {
  // console.log("Data in Component", data);

  return (
    <Layout title={data.image.name}>
      <div className="flex flex-col justify-center items-center min-h-screen pb-32">
        <Title headline={data.headline} />

        <div className="pt-16">
          <Image data={data.image.image.responsiveImage} />
        </div>
        <Contact calltoaction={data.calltoaction} />
      </div>
      <Footer social={data.social} />
    </Layout>
  );
}
export default ImageBig;


export const getStaticPaths: GetStaticPaths = async () => {
  const data = await request({ query: `{ allImages { slug } }` })

  const paths = data.allImages.map((image) => ({
    params: { slug: image?.slug }
  }));


  return {
    paths,
    fallback: "blocking", // can also be true or 'blocking'
  }
}

// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps: GetStaticProps = async (context) => {
  const data = await request({
    query: ONE_IMAGE_QUERY,
    variables: { eq: context.params.slug },
  });

  return {
    // Passed to the page component as props
    props: { data },
    revalidate: 30,
  }
}



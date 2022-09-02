/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";

import Layout from "components/Layout";
import { useState } from "react";
import cn from "classnames";
import { GetStaticProps, GetStaticPaths } from "next";
import { request } from "lib/datocms";
import { Image } from "react-datocms";
import Title from "components/Title";

const ONE_IMAGE_QUERY = `query OneImageQuery($eq: String!) {
  image(filter: {slug: {eq: $eq}}) {
    id
    slug
    name
    image {
      responsiveImage(imgixParams: { auto: format, w: "1080", fit: crop }) {
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
  headline {
    title
    subtitle
  }
}`;



const ImageBig = ({ data }) => {
    // console.log("Data in Component", data);

    return (
        <div className="flex flex-col justify-center items-center min-h-screen pb-32">
            <Title headline={data.headline} />

            <div className="pt-16">
                <Image data={data.image.image.responsiveImage} />
            </div>
        </div>
    );
}
export default ImageBig;


export const getStaticPaths: GetStaticPaths = async () => {
    const data = await request({ query: `{ allImages { slug } }` })

    const paths = data.allImages.map((image) => ({
        params: { slug: image.slug },
    }));

    return {
        paths,
        fallback: false, // can also be true or 'blocking'
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
    }
}


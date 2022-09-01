import Link from "next/link";
import Layout from "../components/Layout";
import Image from "next/image";
import { useState } from "react";
import cn from "classnames";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { supabase } from "utils/supabaseClient";

import street1 from "public/img/street2.jpg";
import street2 from "public/img/street2.jpg";

// const images = [
//   {
//     id: 1,
//     href: "img/street1.jpg",
//     imageSrc: street1,
//   },
//   {
//     id: 2,
//     href: "img/street2.jpg",
//     imageSrc: street2,
//   },
// ];

const IndexPage = ({ images }) => (
  <Layout title="Bart Photography">
    {/* <div className="flex flex-col justify-center py-2 md:flex-row-reverse">
      <div className=" flex-1 ">
        <h1 className="text-4xl font-bold md:text-6xl">Bart Photography</h1>
        <h2 className="text-2xl "> visualizing moments of life</h2>
      </div> */}
    <div className="flex flex-col items-center justify-center pt-24">
      <h1 className="text-4xl font-bold md:text-6xl">Bart Photography</h1>
      <h2 className="pt-2 text-2xl"> visualizing moments of life</h2>
    </div>
    <Gallery images={images} />
    {/* <pre>{JSON.stringify(images, null, 2)}</pre> */}
    {/* </div> */}
  </Layout>
);
type Image = {
  id: number;
  href: string;
  imageSrc: string;
  name: string;
  username: string;
};

const Gallery = ({ images }: { images: Image[] }) => {
  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {images.map((image) => (
          <BlurImage key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
};

const BlurImage = ({ image }: { image: Image }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <a href={image.href} className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <Image
          alt=""
          src={image.imageSrc}
          layout="fill"
          objectFit="cover"
          className={cn(
            "duration-700 ease-in-out group-hover:opacity-75",
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      {/* <h3 className="mt-4 text-sm text-gray-700">{image.name}</h3> */}
      {/* <p className="mt-1 text-lg font-medium text-gray-900">{image.username}</p> */}
    </a>
  );
};

// I always forget how to use this function

export const getStaticProps: GetStaticProps = async (context) => {
  // const { data } = await supabase.storage.from("images").list("folder");

  const images = [];
  const testFolder = "./public/img";
  const fs = require("fs");

  // fs.readdir(testFolder, (err, files) => {
  //   files.forEach((file, index) => {
  //     // console.log(file);
  //     images.push({
  //       id: index,
  //       filename: file,
  //       href: `/img/${file}`,
  //       imageSrc: `/img/${file}`,
  //     });
  //   });
  // });

  fs.readdirSync(testFolder).forEach((file, index) => {
    images.push({
      id: index,
      filename: file,
      href: `/img/${file}`,
      imageSrc: `/img/${file}`,
    });
  });

  // images.map((image) => {
  //   console.log(image.imageSrc);
  // }),
  // const { publicURL, error } = supabase.storage
  //   .from("images")
  //   .getPublicUrl("folder/IMG_4893.jpg");

  // console.log(publicURL);
  // console.log(images);

  // const { images } = data;

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      images,
    },
  };
};

export default IndexPage;

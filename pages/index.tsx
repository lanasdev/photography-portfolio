import Link from "next/link";
import Layout from "../components/Layout";
// import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

const IndexPage = () => (
  <Layout title="Next Tailwind Typescript">
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="py-8 text-6xl font-bold">
          Hello{" "}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>{" "}
          👋
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{" "}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            pages/index.tsx
          </code>
        </p>
      </main>
    </div>
  </Layout>
);

// I always forget how to use this function

// export const getStaticProps: GetStaticProps = async (context) => {

//   const res = await fetch('https://.../posts')
//   const posts = await res.json()

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   }
// }

export default IndexPage;

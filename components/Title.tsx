import Link from "next/link";

const Title = ({ headline }) => {
    return (
        <div className="flex flex-col items-center justify-center pt-24 mx-8">
            <Link href={'/'}>
                <a>
                    <h1 className="text-4xl font-bold md:text-6xl hover:underline underline-offset-2 font-serif ">{headline.title || "Photographix"}</h1>
                </a>
            </Link>
            <h2 className="pt-2 text-2xl"> {headline.subtitle || "capturing moments of life"}</h2>
        </div>
    );
}

export default Title;
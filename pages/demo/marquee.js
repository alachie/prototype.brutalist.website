import Head from 'next/head'
import Link from 'next/link'

function Marquee({children}) {
    return (
        <div className="marquee-wrapper">
            <div className="marquee-inner">
                {[...Array(4)].map(() => (
                    [...children]
                ))}
            </div>
            <div className="marquee-inner">
                {[...Array(4)].map(() => (
                    [...children]
                ))}
            </div>
            </div>
    )
}


export default function Drag() {
    return (
        <div className="marquee-page">
            <Head>
                <title>MARQUEE - BRUTALIST.WEBSITE</title>

            </Head>
            <Link href="/"><a className="home-link">🏡 HOME</a></Link>
            <Marquee>
                <div>👋</div>
                <div>hello</div>
                <div>🌏</div>
                <div>world</div>
            </Marquee>
            <Marquee>
                <div>marquee</div>
                <div>marquee</div>
                <div>marquee</div>
                <div>marquee</div>
            </Marquee>
            <Marquee>
                <div>Huge</div>
                <div>⚠️</div>
                <div>vibes</div>
                <div>🚧</div>
            </Marquee>
            <Marquee>
                <div>Brutalist</div>
                <div>⚠️</div>
                <div>Websites</div>
                <div>🚧</div>
            </Marquee>

        </div>
    )
}

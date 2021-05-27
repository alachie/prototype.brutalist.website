import {useState, useEffect, useRef} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import gsap from 'gsap'

export default function TextPage() {
    const textRef = useRef(null);
    const [text, setText] = useState('hello world');

    const strings = ['Hello World', '🍄 Mushroom', 'Brutalist Websites', 'HUGE VIBES', 'WWW', 'a', '🤠']

    const handleClick = (e) => {
        setText(strings[Math.floor(Math.random() * strings.length)])
        
        gsap.killTweensOf(textRef.current)

        setTimeout(() => {
            const scaleX = window.innerWidth / textRef.current.offsetWidth;
            const scaleY = window.innerHeight / textRef.current.offsetHeight;

            
            gsap.fromTo(textRef.current, {
                scaleY,
                scaleX,
            }, {
                duration: .6,
                ease: "power4.inOut",
                scaleX: 1,
                scaleY: 1,
                delay: 1,
            })
        }, 1);
        
    }

    return (
        <div className="text-page">
            <Head>
                <title>🔠 TEXT - BRUTALIST.WEBSITE</title>

            </Head>
            <Link href="/"><a className="home-link">🏡 HOME</a></Link>

            <div className="text-click" onClick={handleClick}>

                <img src="/cursor-pointer.png" alt="" />
                click!

            </div>

            <div className="text-wrapper" onClick={handleClick} ref={textRef}>
                {text}
            </div>
        </div>
    )
}

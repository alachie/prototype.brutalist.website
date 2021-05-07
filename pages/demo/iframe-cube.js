import Head from 'next/head'
import Link from 'next/link'
import {useEffect, useState, useRef} from 'react'

export default function IframeCube() {
    const cube = useRef();
    const radioGroup = useRef();

    const [side, setSide] = useState('front');

    const handleChange = (e) => {
        const checked = radioGroup.current.querySelector(':checked');
        setSide(checked.value)
    }

    useEffect(() => {
        cube.current.dataset.side = side;
    }, [side])

    return (
        <div className="iframe-cube-page">
            <Head>
                <title>iframe cube - BRUTALIST.WEBSITE</title>

            </Head>
            <Link href="/"><a className="home-link">🏡 HOME</a></Link>

            <div className="scene">
                <div className="cube" ref={cube}>
                    <div className="cube__face cube__face--front">
                        <iframe src="https://en.wikipedia.org/wiki/Brutalist_architecture"></iframe>
                    </div>
                    <div className="cube__face cube__face--back">
                        <iframe src="https://lachie.co"></iframe>
                    </div>
                    <div className="cube__face cube__face--right">right</div>
                    <div className="cube__face cube__face--left">left</div>
                    <div className="cube__face cube__face--top">top</div>
                    <div className="cube__face cube__face--bottom">bottom</div>
                </div>
            </div>

            <p className="radio-group" ref={radioGroup} onChange={handleChange}>
                <label>
                    <input type="radio" name="rotate-cube-side" value="front" defaultChecked /> front
                </label>
                <label>
                    <input type="radio" name="rotate-cube-side" value="right" /> right
                </label>
                <label>
                    <input type="radio" name="rotate-cube-side" value="back" /> back
                </label>
                <label>
                    <input type="radio" name="rotate-cube-side" value="left" /> left
                </label>
                <label>
                    <input type="radio" name="rotate-cube-side" value="top" /> top
                </label>
                <label>
                    <input type="radio" name="rotate-cube-side" value="bottom" /> bottom
                </label>
            </p>

        </div>
    )
}

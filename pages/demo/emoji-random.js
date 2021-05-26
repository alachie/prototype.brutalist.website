import {useState, useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function EmojiRandom() {
    const [emoji, setEmoji] = useState('')
    const [slider, setSlider] = useState(1)

    const emojis = ['🍄', '🌿', '🌵', '🧙‍♂️', '🤠', '🥴', '🐛', '🚧', '🪄', '🪞', '🎈', '🌳', '🌲', '🥬', '🌏', '🪐', '🌻', '🌼', '🌸', '🌺', '🦋', '🐌', '🐞']
    useEffect(() => {
        setInterval(() => {
            setEmoji(emoji => emojis[Math.floor(Math.random() * emojis.length)] + emoji)
        }, 100);
    },[])

    const onSliderChange = (e) => {
        setSlider(e.target.value)
    }
    
    return (
        <div className="emoji-random-page">
            <Head>
                <title>🎲 EMOJI - BRUTALIST.WEBSITE</title>

            </Head>
            <Link href="/"><a className="home-link">🏡 HOME</a></Link>
            
            <input style={{display: 'block', margin: '40px auto', width: '50vw'}} type="range" min="1" max="10" value={slider} onChange={onSliderChange} step="0.1" />

            <div className="emojis" style={{fontSize: `${slider}vw`}}>
                {emoji}
            </div>

        </div>
    )
}

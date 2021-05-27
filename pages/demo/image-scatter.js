import {useEffect, useState, useRef} from 'react'

import Head from 'next/head'
import Link from 'next/link'

import {motion} from 'framer-motion'
import gsap from 'gsap'


const images = [
    "https://www.moma.org/learn/moma_learning/_assets/www.moma.org/wp/moma_learning/wp-content/uploads/2012/07/Van-Gogh.-Starry-Night-469x376.jpg", 
    "https://www.w3schools.com/tags/img_the_scream.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Park_Hill_Samarkanda.JPG/298px-Park_Hill_Samarkanda.JPG",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/The_National_Theatre%2C_South_Bank%2C_London_%283%29.jpg/298px-The_National_Theatre%2C_South_Bank%2C_London_%283%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/1981_BostonCityHall_byLebovich8_HABS_MA1176.jpg/298px-1981_BostonCityHall_byLebovich8_HABS_MA1176.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Vista_Teatro_teresa_carre%C3%B1o.jpg/298px-Vista_Teatro_teresa_carre%C3%B1o.jpg",
    "/error.jpg",
    "/bliss.jpg",
    "/cursor-default.png",
    "/cursor-pointer.png",
]

const Image = (src) => {
    const [xy, setXy] = useState({x: 0, y: 0})
    const imgRef = useRef();

    useEffect(() => {
        setXy({
            x: Math.max(0, Math.floor(Math.random() * window.innerWidth - imgRef.current.offsetWidth)), 
            y: Math.max(0, Math.floor(Math.random() * window.innerHeight - imgRef.current.offsetHeight))
        })
    }, []);

    return (
        <motion.img 
            ref={imgRef}
            drag dragMomentum={false}
            src={src.src} 
            key={src} 
            style={{
                position: 'absolute',
                top: xy.y,
                left: xy.x
            }}
        />
    )
}

export default function ImageScatter() {
    const [z, setZ] = useState(1)

    useEffect(() => {
        gsap.from('img', {
            opacity: 0,
            duration: 0.01,
            stagger: .2
        })
    }, [])

    const onClick = (event) => {
        setZ(z + 1)
        event.target.style.zIndex = z;
    }

    return (
        <div className="image-scatter-page">
            <Head>
                <title>Image Scatter - BRUTALIST.WEBSITE</title>
            </Head>
            <Link href="/"><a className="home-link">🏡 HOME</a></Link>

            <button onClick={() => window.location = window.location}>🔄 RELOAD</button>

            {images.map(image => (
                <div key={image} onMouseDown={onClick}>
                    <Image src={image}/>
                </div>
            ))}

        </div>
    )
}

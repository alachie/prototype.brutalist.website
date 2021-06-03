import {useState, useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import gsap from 'gsap';
import {motion} from 'framer-motion'

export default function Home() {
  const [rotate, setRotate] = useState(false);
  const [largeCursor, setLargeCursor] = useState(false);

  const toggleRotate = () => {
    setRotate(!rotate);
  }

  const toggleCursor = () => {
    setLargeCursor(!largeCursor);
  }

  useEffect(() => {
    if(!rotate) {
      return;
    }
    const page = document.querySelector('.home-page');

    const handleTransform = (e) => {
      page.style.webkitTransform = page.style.transform = `scaleY(1.5) translateY(15%) rotate3d(10, 180, ${(e.pageY/-20)*-1}, ${e.pageX/-10}deg)`;
    }

    document.addEventListener('mousemove', handleTransform);

    return () => {
      page.style.webkitTransform = page.style.transform = `scaleY(1.5) translateY(15%)`;
      document.removeEventListener('mousemove', handleTransform);
    }
  }, [rotate]) 

  useEffect(() => {
    const body = document.querySelector('body')
    largeCursor ? body.classList.add('large-cursor') : body.classList.remove('large-cursor');
  }, [largeCursor])

  useEffect(() => {
    const tl = new gsap.timeline();
    tl.from('h1, p', {
      opacity: 0,
      duration: 0.01,
      stagger: .2,
      delay: 0.2,
    })

    tl.from('tr, .optionToggles, footer', {
      opacity: 0,
      duration: 0.01,
      stagger: .03,
    })
  }, [])



  return (
    <div className='home-page'>
      <Head>
        <title>PROTOTYPE - BRUTALIST.WEBSITE</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>🚧 Brutalist.website prototype 🚧⚠️🏗️🚜</h1>

        <motion.p drag dragMomentum={false} className="description" style={{maxWidth: '18em', lineHeight: '1.1em'}}>🔬 Investigating the aesthetic signifiers of brutalist web design through the creation of an educational website/interactive experience, as practice-based research.</motion.p>

        <table>
          <tbody>
            <tr>
              <td>1.06.2021</td>
              <td><Link href="/demo/cylinder-text">🌀 Text Cylinder</Link></td>
            </tr> 
            <tr>
              <td>26.05.2021</td>
              <td><Link href="/demo/emoji-random">🎲 Emoji Random</Link></td>
            </tr> 
            {/* <tr>
              <td>25.05.2021</td>
              <td><Link href="/demo/95">🪟 Windows 95</Link></td>
            </tr>  */}
            {/* <tr>
              <td>23.05.2021</td>
              <td><Link href="/demo/image-text">🖼️ Images in Text</Link></td>
            </tr>  */}
            {/* <tr>
              <td>07.05.2021</td>
              <td><Link href="/demo/myriad">👹 Myriad</Link></td>
              <td style={{fontSize: '0.5em'}}>inspired by <a href="https://www.youtube.com/watch?v=iTjn1d-d2II" target="_blank">Oneothrix Point Never</a></td>
            </tr> */}
            <tr>
              <td>13.05.2021</td>
              <td><Link href="/demo/image-scatter">🤹 Image Scatter</Link></td>
            </tr>
            <tr>
              <td>10.05.2021</td>
              <td><Link href="/demo/text">🔠 Text Stretch</Link></td>
            </tr>
            <tr>
              <td>07.05.2021</td>
              <td><Link href="/demo/iframe-cube">📦 iframe Cube</Link></td>
            </tr>
            <tr>
              <td>06.05.2021</td>
              <td><Link href="/demo/cursor-cube">📦 Cursor Cube</Link></td>
            </tr>
            <tr>
              <td>05.05.2021</td>
              <td><Link href="/demo/dvd">📀 DVD</Link></td>
            </tr>
            <tr>
              <td>30.04.2021</td>
              <td><Link href="/demo/marquee">🎠 Marquee</Link></td>
            </tr>
            <tr>
              <td>30.04.2021</td>
              <td><Link href="/demo/image-smear">🖼️ Image Smear</Link></td>
            </tr>
            <tr>
              <td>29.04.2021</td>
              <td><Link href="/demo/drag">↔️ Drag</Link></td>
            </tr>
          </tbody>
        </table>

        <div className="optionToggles">
          <input onClick={toggleRotate} type="checkbox" name="rotate" id="rotate"/><label for="rotate"> Enable Rotate <sup>1</sup></label>
          <input onClick={toggleCursor} type="checkbox" name="largeCursor" id="largeCursor"/><label for="largeCursor"> Enable Large Cursor <sup>2</sup></label>
        </div>
      </main>

      <footer>
        <span>&copy; {(new Date().getFullYear())}</span>
        <span>the source code for this website is <a href="https://github.com/alachie/prototype.brutalist.website" target="_blank" rel="noreferrer noopener">available here</a> </span>
        <span><Link href="/credits">Credits</Link></span>
      </footer>

      <hr />
      {/* <div style={{fontSize: '.5em', paddingBottom: '1rem'}}>
        <p>[1] code base on ...</p>
        <p>[2] cursors from bloomberg</p>
      </div> */}
    </div>
  )
}

import {useState, useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  const [rotate, setRotate] = useState(false);

  const toggleRotate = () => {
    setRotate(!rotate);
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

  return (
    <div className="home-page">
      <Head>
        <title>PROTOTYPE - BRUTALIST.WEBSITE</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>🚧 Brutalist.website prototype 🚧⚠️🏗️🚜</h1>

        <p style={{maxWidth: '22em'}}>Researching the trend and aesthetic signifiers of brutalist web design through the creation of an educational website/interactive experience, as practice-based research.</p>

        <table>
          <tbody> 
            <tr>
              <td>30.04.2021</td>
              <td><Link href="/demo/marquee">Marquee</Link></td>
            </tr>
            <tr>
              <td>30.04.2021</td>
              <td><Link href="/demo/image-smear">Image Smear</Link></td>
            </tr>
            <tr>
              <td>29.04.2021</td>
              <td><Link href="/demo/drag">Drag</Link></td>
            </tr>
          </tbody>
        </table>

        <div><input onClick={toggleRotate} type="checkbox" name="rotate" id="rotate"/><label for="rotate"> Enable Rotate</label></div>
      </main>

      <footer>
        <span>&copy; {(new Date().getFullYear())}</span>
        <span>the source code for this website is <a href="https://github.com/alachie/prototype.brutalist.website" target="_blank" rel="noreferrer noopener">available here</a> </span>
        <span>website by lachie :)</span>
      </footer>
    </div>
  )
}

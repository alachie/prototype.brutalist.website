import {useState, useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import gsap from 'gsap'
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

export default function Home() {
    const [emoji, setEmoji] = useState('🍄')
    const emojis = ['🍄', '🌿', '🌵', '🧙‍♂️', '🤠', '🥴', '🐛', '🚧', '🪄', '🪞', '🎈']
    const onClick = () => {
        setEmoji(emojis[Math.floor(Math.random() * emojis.length)])
    }

      useEffect(() => {
    gsap.from('.marquee-wrapper, a, h1, p, tr, .optionToggles', {
      opacity: 0,
      duration: 0.01,
      stagger: .03
    })
  }, [])
  return (
    <div className='home-page'>
      <Head>
        <title>Credits - BRUTALIST.WEBSITE</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        

        <Marquee>
            <div>🚧 Credits 🚧⚠️🏗️🚜</div>
            <div>acknowledgements</div>
        </Marquee>

        <Link href="/">&larr; back home 🏡</Link>
        
        <table>
          <tbody>
            <tr>
              <td>Website by</td>
              <td>Lachie :)</td>
            </tr> 
            <tr>
              <td>Table of contents inspired by</td>
              <td><a href="https://billwurtz.com/" target="_blank">http://billwurtz.com/</a></td>
            </tr> 
            <tr>
              <td>Rotation inspired by</td>
              <td><a href="https://magoni.info/" target="_blank">https://magoni.info/</a></td>
            </tr> 
            <tr>
              <td>Image smear inspired by</td>
              <td><a href="http://studio-push.com/" target="_blank">http://studio-push.com/</a></td>
            </tr> 
            <tr>
              <td>Large cursor inspired by</td>
              <td>Bloomberg</td>
            </tr> 
            <tr>
              <td>Bliss.jpg</td>
              <td>© Microsoft</td>
            </tr> 
            <tr valign="top">
              <td>Images from</td>
              <td>
                <p className="credits-image">https://www.w3schools.com/tags/img_the_scream.jpg</p>
                <p className="credits-image">https://www.moma.org/learn/moma_learning/_assets/www.moma.org/wp/moma_learning/wp-content/uploads/2012/07/Van-Gogh.-Starry-Night-469x376.jpg</p>
                <p className="credits-image">https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Park_Hill_Samarkanda.JPG/298px-Park_Hill_Samarkanda.JPG</p>
                <p className="credits-image">https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/The_National_Theatre%2C_South_Bank%2C_London_%283%29.jpg/298px-The_National_Theatre%2C_South_Bank%2C_London_%283%29.jpg</p>
                <p className="credits-image">https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/1981_BostonCityHall_byLebovich8_HABS_MA1176.jpg/298px-1981_BostonCityHall_byLebovich8_HABS_MA1176.jpg</p>
                <p className="credits-image">https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Vista_Teatro_teresa_carre%C3%B1o.jpg/298px-Vista_Teatro_teresa_carre%C3%B1o.jpg</p>
                <p className="credits-image">https://community.flexera.com/t5/InstallShield-Forum/Suite-Advanced-UI-setups-crash-on-Windows-XP-SP3-Is-there-a-fix/td-p/91638?attachment-id=895</p>
              
              </td>
            </tr> 

          </tbody>
        </table>

        <div onClick={onClick} className="big-mushroom" style={{
            position: 'fixed',
            right: '10vw',
            top: '40vh',
            fontSize: '140px'
        }}>{emoji}</div>
      </main>

      <footer>
        <span>&copy; {(new Date().getFullYear())}</span>
      </footer>

    </div>
  )
}

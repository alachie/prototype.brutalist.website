import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
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
              <td>29.04.2021</td>
              <td><Link href="/demo/drag">Drag</Link></td>
            </tr>
          </tbody>
        </table>

      </main>

      <footer>
        <span>&copy; {(new Date().getFullYear())}</span>
        <span>the source code for this website is <a href="https://github.com/alachie/prototype.brutalist.website" target="_blank" rel="noreferrer noopener">available here</a> </span>
        <span>website by lachie :)</span>
      </footer>
    </div>
  )
}

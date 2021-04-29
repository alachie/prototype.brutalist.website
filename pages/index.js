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
        <span>website by lachie :)</span>
      </footer>
    </div>
  )
}

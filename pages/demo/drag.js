import Head from 'next/head'
import Link from 'next/link'
import {motion} from 'framer-motion'

const onDrag = (event, info) => {
  document.querySelector('body').classList.add('serif')
  event.target.classList.add('isDrag')
};
const offDrag = (event, info) => {
  document.querySelector('body').classList.remove('serif')
  event.target.classList.remove('isDrag')
};


export default function Drag() {
  return (
    <div className="drag-page">
        <Head>
            <title>DRAG - BRUTALIST.WEBSITE</title>

            <style>
{`                    
.App {
    text-align: center;
}

.App-logo {
    height: 40vmin;
    pointer-events: none;
}

.App-header {
    /* background-color: white; */
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    /* color: black; */
}


.serif {
    font-family: serif;
    background: black !important;
    color: white !important;
}

.App-link {
    color: #61dafb;
}

@keyframes App-logo-spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

*,
*:before,
*:after {
    box-sizing: border-box;
}

h1 {
    position: fixed;
    top: 0;
}

.drag-box {
    /* display: inline-block; */
    width: 20vw;
    height: 20vw;
    background: green;
    cursor: grab;
    box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.5);
    padding: 4rem;
    text-align: left;
    position: absolute;
}

.drag-box:nth-child(1) {
    top: 15vh;
    left: 10vw;
}

.drag-box:nth-child(2) {
    top: 30vh;
    left: 25vw;
}

.drag-box:nth-child(3) {
    top: 40vh;
    left: 50vw;
}

.drag-box:nth-child(4) {
    top: 20vh;
    left: 60vw;
}

.App div.isDrag {
    /* position: relative; */
    z-index: 9999;
    background: blue;
    font-family: times;
}

.drag-text {
    font-family: serif;
    color: red;
    position: fixed;
    font-size: 20vw;
    top: 0%;
    left: 0;
    pointer-events: none;
    z-index: 999;
    display: none;
}


footer {
    bottom: 10%;
    left: 0;
    pointer-events: none;
    z-index: 999;
    /* display: none; */
    position: fixed;
    text-align: center;
    font-family: serif;
    width: 100vw;
}


.serif .drag-text {
    display: block;
}`}

            </style>

        </Head>
        <Link href="/"><a className="home-link">🏡 HOME</a></Link>

        <div className="App">
        <header className="App-header">

            <span className="drag-text">
                DRAG!
            </span>

            <h1>
                Website website website 🌏
            </h1>
            <marquee scrollamount="10" direction="">Huge website 🤸🏻‍♂️ Massive website 🤹🤸🏻‍♂️</marquee>
            <div>
            <motion.div className="drag-box" drag dragMomentum={false} onDragStart={onDrag} onDragEnd={offDrag}>
                lachie's amazing website :)
            </motion.div>
            <motion.div className="drag-box" drag dragMomentum={false} onDragStart={onDrag} onDragEnd={offDrag}>
                🍄🍄🍄🍄
            </motion.div>
            <motion.div className="drag-box" drag dragMomentum={false} onDragStart={onDrag} onDragEnd={offDrag}/>
            <motion.div className="drag-box" drag dragMomentum={false} onDragStart={onDrag} onDragEnd={offDrag}/>
            </div>

            <footer>
                🌐 world wide web 🌐
            </footer>

        </header>
        </div>
    </div>
  )
}

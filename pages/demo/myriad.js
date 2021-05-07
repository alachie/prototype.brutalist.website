import {useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'

const images = [
    "https://www.moma.org/learn/moma_learning/_assets/www.moma.org/wp/moma_learning/wp-content/uploads/2012/07/Van-Gogh.-Starry-Night-469x376.jpg", 
    "https://www.w3schools.com/tags/img_the_scream.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Park_Hill_Samarkanda.JPG/298px-Park_Hill_Samarkanda.JPG",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/The_National_Theatre%2C_South_Bank%2C_London_%283%29.jpg/298px-The_National_Theatre%2C_South_Bank%2C_London_%283%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/1981_BostonCityHall_byLebovich8_HABS_MA1176.jpg/298px-1981_BostonCityHall_byLebovich8_HABS_MA1176.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Vista_Teatro_teresa_carre%C3%B1o.jpg/298px-Vista_Teatro_teresa_carre%C3%B1o.jpg"

]


export default function Drag() {

    useEffect(() => {
        var canvas = document.getElementById('canvas');

        var ctx = canvas.getContext('2d');

        var vw = window.innerWidth;
        var vh = window.innerHeight;

        var delta = 100;
        var oldTime = 0;

        ctx.canvas.width  = vw;
        ctx.canvas.height = vh;

        var img = new Image();
        
        function random(array) {
            const i = Math.floor(Math.random() * array.length)
            return array[i];
        } 
        function getRandomArbitrary(min, max) {
            return Math.random() * (max - min) + min;
        }
        
        function drawCanvas(currentTime) {
            if(oldTime === 0) {
                oldTime = currentTime;
            }

            if((currentTime - oldTime) >= delta){
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                img.src = random(images);

                const x = getRandomArbitrary(0, vw - img.width);
                const y = getRandomArbitrary(0, vh - img.height)
                
                ctx.beginPath(); 
                ctx.strokeStyle = '#f00';  // some color/style
                ctx.lineWidth = 4;         // thickness

                ctx.drawImage(img, x, y, img.width, img.height);
                ctx.strokeRect(x, y, img.width, img.height);
                oldTime = currentTime;
            }

            requestAnimationFrame(drawCanvas);
        }

        drawCanvas(0, 0);

        requestAnimationFrame(drawCanvas);
    }, []);

    return (
        <div className="MYRIAD-page">
            <Head>
                <title>MYRIAD - BRUTALIST.WEBSITE</title>

            </Head>
            <Link href="/"><a className="home-link">🏡 HOME</a></Link>
            
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M100 0H0V100H100V0ZM50 98C76.5097 98 98 76.5097 98 50C98 23.4903 76.5097 2 50 2C23.4903 2 2 23.4903 2 50C2 76.5097 23.4903 98 50 98Z" fill="#FF0000"/>
            </svg>

            <canvas id="canvas" width="200" height="200">Your browser does not support canvas.</canvas>
        </div>
    )
}

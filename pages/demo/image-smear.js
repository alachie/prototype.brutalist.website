import {useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'

const images = ["https://www.moma.org/learn/moma_learning/_assets/www.moma.org/wp/moma_learning/wp-content/uploads/2012/07/Van-Gogh.-Starry-Night-469x376.jpg", "https://www.w3schools.com/tags/img_the_scream.jpg"]


export default function Drag() {

    useEffect(() => {
        var canvas = document.getElementById('canvas');

        var ctx = canvas.getContext('2d');

        var vw = window.innerWidth;
        var vh = window.innerHeight;

        ctx.canvas.width  = vw;
        ctx.canvas.height = vh;

        var mouseX = 0;
        var mouseY = 0;
        var mouseDown = false;

        var imgX = vw/2;
        var imgY = vh/2;

        var img = new Image();
        img.src = random(images);

        function lerp(v0, v1, t) {
            return v0*(1-t)+v1*t
        }

        function random(array) {
            const i = Math.floor(Math.random() * array.length)
            return array[i];
        } 

        function drawCanvas() {
            imgX = lerp(imgX, mouseX, 0.1)
            imgY = lerp(imgY, mouseY, 0.1)

            if(mouseDown){
            ctx.drawImage(img, imgX - (img.width/2), imgY - (img.height/2), img.width, img.height);
            }
            requestAnimationFrame(drawCanvas);
        }

        drawCanvas(0, 0);

        canvas.addEventListener('mousemove', (e) => {
            mouseX = e.pageX;
            mouseY = e.pageY;
        }, false);

        canvas.addEventListener('mousedown', () => {
            img.src = random(images);
            mouseDown = true;
        });

        canvas.addEventListener('mouseup', () => {
            mouseDown = false;
        });

        requestAnimationFrame(drawCanvas);
    }, []);

    return (
        <div className="image-smear-page">
            <Head>
                <title>IMAGE SMEAR - BRUTALIST.WEBSITE</title>

            </Head>
            <Link href="/"><a className="home-link">🏡 HOME</a></Link>
            
            <p>click and drag!</p>
            <canvas id="canvas" width="200" height="200">Your browser does not support canvas.</canvas>
        </div>
    )
}

import {useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'

const _baseSpeed = 5;

class _DVD {
    constructor(el) {
        this.dot       = el;
        this.body      = document.querySelector('body')
        this.baseSpeed = _baseSpeed;
        this.velocityX = -1;
        this.velocityY = -1;
        this.bodyBcr   = this.body.getBoundingClientRect();
        this.dotBcr    = this.dot.getBoundingClientRect();
        this.posX      = window.innerWidth - this.dotBcr.width - 40;
        this.posY      = window.innerHeight - this.dotBcr.height - 40;
        this.paused    = false;

        this.init();
    }

    init() {
        window.addEventListener('resize', this.onResize.bind(this));
        this.dot.addEventListener('mouseenter', () => this.slow());
        this.dot.addEventListener('mouseleave', () => this.fast());
        this.render();
    }

    slow() {
        this.baseSpeed = 1;
    }
    
    fast() {
        this.baseSpeed = _baseSpeed;
    }

    pause() {
        this.paused = true;
        this.dot.style.opacity = 0
    }

    play() {
        this.paused = false;
        this.dot.style.opacity = 1
    }

    getRandomColor() {
        var colours = [
            '#FFFFFF',
            '#FF0000',
            '#00FF00',
            '#0000FF',
            '#FFFF00',
        ]
        return colours[Math.floor(Math.random() * colours.length)];
    }

    setRandomColor() {
        this.dot.style.background = this.getRandomColor();
    }
    
    checkBounds() {
        if (this.posX >= window.innerWidth - this.dotBcr.width || this.posX <= 0) {
            this.velocityX = this.velocityX * -1;
            this.setRandomColor();
        }

        if (this.posY >= window.innerHeight - this.dotBcr.height || this.posY <= 0) {            
            this.velocityY = this.velocityY * -1;
            this.setRandomColor();
        }
    }

    onResize() {
        this.bodyBcr = this.body.getBoundingClientRect();
        this.dotBcr = this.dot.getBoundingClientRect();

        if (this.dotBcr.left + this.dotBcr.width >= window.innerWidth || this.dotBcr.top + this.dotBcr.height >= window.innerHeight) {
            this.posX = window.innerWidth - this.dotBcr.width - 40;
            this.posY = window.innerHeight - this.dotBcr.height - 40;
        }

        this.render();
    }

    render() {
        if (!this.paused) {
            this.posX = this.posX + (this.baseSpeed * this.velocityX);
            this.posY = this.posY + (this.baseSpeed * this.velocityY);
            
            this.movementX = this.posX
            this.movementY = this.posY

            this.dot.style.transform = `translate(${this.movementX}px, ${this.movementY}px)`;
        }

        this.checkBounds();

        requestAnimationFrame(() => this.render());
    }
}

export default function DVD() {

    useEffect(() => {
        const dvd_ = new _DVD(document.querySelector('.dvd'))
    }, [])

    return (
        <div className="dvd-page">
            <Head>
                <title>📀 DVD - BRUTALIST.WEBSITE</title>

            </Head>
            <Link href="/"><a className="home-link">🏡 HOME</a></Link>

            <div className="dvd">dvd</div>
        </div>
    )
}

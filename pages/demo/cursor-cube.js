import { useRef, useState, Suspense } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from '../../node_modules/three/src/loaders/TextureLoader'

function lerp(v0, v1, t) {
  return v0*(1-t)+v1*t
}

function Box(props) {
  const mesh = useRef()

  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  const [mouse, setMouse] = useState({x: 0, y: 0})
  const [scale, setScale] = useState(2);

  const [pointerCursor] = useLoader(TextureLoader, ['/cursor-pointer.png'])
  const [defaultCursor] = useLoader(TextureLoader, ['/cursor-default.png'])

  useFrame(({ clock }) => {
    mesh.current.rotation.z = clock.getElapsedTime() / 10
    mesh.current.rotation.y = - mouse.x / 50 + clock.getElapsedTime() / 10
    mesh.current.rotation.x = mouse.y / 50
    active ? setScale(lerp(scale, 4, .2)) : setScale(lerp(scale, 2, .2))
  })

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={scale}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      onPointerMove={(e) => setMouse({x: e.clientX, y: e.clientY})}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={hovered ? pointerCursor : defaultCursor} />
    </mesh>
  )
}

export default function CursorCube() {
  return (
    <div className="threed-page">
      <Head>
        <title>📦 Cursor Cube - BRUTALIST.WEBSITE</title>
      </Head>

      <Link href="/"><a className="home-link">🏡 HOME</a></Link>

      <Canvas>
        <Suspense fallback={null}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-4, 0, 0]} />
          <Box position={[0, 0, 0]}/>
          <Box position={[4, 0, 0]} />
        </Suspense>
      </Canvas>,
    </div>
  )
}

import { useRef, useState, Suspense } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Canvas, useFrame, useLoader, useEffect } from '@react-three/fiber'
import { TextureLoader } from '../../node_modules/three/src/loaders/TextureLoader'


function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  const [mouse, setMouse] = useState({x: 0, y: 0})

    const [pointerCursor] = useLoader(TextureLoader, ['/cursor-pointer.png'])
    const [defaultCursor] = useLoader(TextureLoader, ['/cursor-default.png'])

  
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    mesh.current.rotation.z = state.clock.getElapsedTime() / 10
    mesh.current.rotation.y = - mouse.x / 50 + state.clock.getElapsedTime() / 10
    mesh.current.rotation.x = mouse.y  / 50
    })

  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 4 : 2}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
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

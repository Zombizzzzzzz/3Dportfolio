

import { useGLTF } from '@react-three/drei'

export function Space(props) {
  const { nodes, materials } = useGLTF('/models/need_some_space.glb')
  return (
    <group {...props} dispose={null}>
      <points geometry={nodes.Object_2.geometry} material={materials['Scene_-_Root']} rotation={[-Math.PI / 2, 0, 0]} scale={0.013} />
    </group>
  )
}

useGLTF.preload('/models/need_some_space.glb')

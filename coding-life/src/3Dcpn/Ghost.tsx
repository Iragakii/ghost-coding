// import React, { useRef } from 'react'
// import { useGLTF } from '@react-three/drei'

// export function Model(props) {
//   const { nodes, materials } = useGLTF('/ghost.glb')
//   return (
//     <group {...props} dispose={null}>
//       <group position={[0, 2.915, -0.251]} rotation={[0, 0.357, 0]} scale={0.591}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_4.geometry}
//           material={materials.ghost}
//           position={[-0.148, -0.572, 0.397]}
//           scale={2.341}
//         />
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.Object_5.geometry}
//           material={materials.ghost}
//           position={[-0.037, -0.528, 0.4]}
//           scale={1.725}
//         />
//       </group>
//     </group>
//   )
// }

// useGLTF.preload('/ghost.glb')
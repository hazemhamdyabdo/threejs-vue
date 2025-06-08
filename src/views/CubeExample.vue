<script setup lang="ts">
import * as THREE from 'three'
import { ref, onMounted } from 'vue'

const canvasContainer = ref<HTMLDivElement>()

onMounted(() => {
  if (!canvasContainer.value) return

  //  to display anything we need to create a scene, camera, and renderer
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

  const renderer = new THREE.WebGLRenderer()

  renderer.setSize(window.innerWidth, window.innerHeight)
  canvasContainer.value.appendChild(renderer.domElement)

  // objects
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
  const cube = new THREE.Mesh(geometry, material)

  scene.add(cube)

  //  the camera to the scene, so that the camera can see the cube
  camera.position.z = 5

  function rotateCube() {
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
  }

  function animate() {
    rotateCube()
    renderer.render(scene, camera)
  }
  renderer.setAnimationLoop(animate)
})
</script>

<template>
  <div ref="canvasContainer" class="canvas-container"></div>
</template>

<style scoped>
.canvas-container {
  width: 100vw;
  height: 100vh;
}
</style>

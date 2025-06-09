<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import * as THREE from 'three'

const canvasContainer = ref<HTMLDivElement>()

onMounted(() => {
  if (!canvasContainer.value) return

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

  const renderer = new THREE.WebGLRenderer()

  renderer.setSize(window.innerWidth, window.innerHeight)
  canvasContainer.value.appendChild(renderer.domElement)

  const group = new THREE.Group()
  const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 }),
  )
  cube1.position.x = -2

  const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
  )
  cube2.position.x = 2

  const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x0000ff }),
  )

  group.add(cube1)
  group.add(cube2)
  group.add(cube3)

  scene.add(group)

  camera.position.z = 5

  function rotateCube() {
    group.rotation.x += 0.01
    group.rotation.y += 0.01
    group.rotation.z += 0.01
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

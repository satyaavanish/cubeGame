<<<<<<< HEAD
import * as THREE from 'https://unpkg.com/three@0.158.0/build/three.module.js';


const obstacleGeometry = new THREE.BoxGeometry(1, 1, 1);
const obstacleMaterial = new THREE.MeshStandardMaterial({ color: 'red' });
=======
let THREE;
let obstacleGeometry;
let obstacleMaterial;
>>>>>>> 47a63e0 (Fix module paths for GitHub Pages)
const obstacles = [];

export function createObstacle(x, z, _THREE) {
  if (!THREE) {
    THREE = _THREE;
    obstacleGeometry = new THREE.BoxGeometry(1, 1, 1);
    obstacleMaterial = new THREE.MeshStandardMaterial({ color: 'red' });
  }

  const mesh = new THREE.Mesh(obstacleGeometry, obstacleMaterial);
  mesh.position.set(x, 0.5, z);
  obstacles.push(mesh);
  return mesh;
}

export function updateObstacles(player) {
  for (const obs of obstacles) {
    const dx = player.position.x - obs.position.x;
    const dy = player.position.y - obs.position.y;
    const dz = player.position.z - obs.position.z;
    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
    if (dist < 0.8) {
      alert('💥 Game Over!');
      window.location.reload();
    }
  }
}

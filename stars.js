import * as THREE from 'three';

export default function createStarts(scene) {
    //Front
    for (let i = 0; i < 100; i++) {
        const geometry = new THREE.SphereGeometry(2, 2, 2);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const sphere = new THREE.Mesh(geometry, material);
        sphere.position.x = Math.floor(Math.random() * -1000);
        sphere.position.y = Math.floor(Math.random() * 1000);
        sphere.position.z = Math.floor(Math.random() * 1000);
        scene.add(sphere);
    }

    for (let i = 0; i < 100; i++) {
        const geometry = new THREE.SphereGeometry(2, 2, 2);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const sphere = new THREE.Mesh(geometry, material);
        sphere.position.x = Math.floor(Math.random() * 1000);
        sphere.position.y = Math.floor(Math.random() * 1000);
        sphere.position.z = Math.floor(Math.random() * 1000);
        scene.add(sphere);
    }

    for (let i = 0; i < 100; i++) {
        const geometry = new THREE.SphereGeometry(2, 2, 2);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const sphere = new THREE.Mesh(geometry, material);
        sphere.position.x = Math.floor(Math.random() * -1000);
        sphere.position.y = Math.floor(Math.random() * -1000);
        sphere.position.z = Math.floor(Math.random() * 1000);
        scene.add(sphere);
    }

    for (let i = 0; i < 100; i++) {
        const geometry = new THREE.SphereGeometry(2, 2, 2);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const sphere = new THREE.Mesh(geometry, material);
        sphere.position.x = Math.floor(Math.random() * 1000);
        sphere.position.y = Math.floor(Math.random() * -1000);
        sphere.position.z = Math.floor(Math.random() * 1000);
        scene.add(sphere);
    }

    //Back
    for (let i = 0; i < 100; i++) {
        const geometry = new THREE.SphereGeometry(2, 2, 2);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const sphere = new THREE.Mesh(geometry, material);
        sphere.position.x = Math.floor(Math.random() * -1000);
        sphere.position.y = Math.floor(Math.random() * 1000);
        sphere.position.z = Math.floor(Math.random() * -1000);
        scene.add(sphere);
    }

    for (let i = 0; i < 100; i++) {
        const geometry = new THREE.SphereGeometry(2, 2, 2);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const sphere = new THREE.Mesh(geometry, material);
        sphere.position.x = Math.floor(Math.random() * 1000);
        sphere.position.y = Math.floor(Math.random() * 1000);
        sphere.position.z = Math.floor(Math.random() * -1000);
        scene.add(sphere);
    }

    for (let i = 0; i < 100; i++) {
        const geometry = new THREE.SphereGeometry(2, 2, 2);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const sphere = new THREE.Mesh(geometry, material);
        sphere.position.x = Math.floor(Math.random() * -1000);
        sphere.position.y = Math.floor(Math.random() * -1000);
        sphere.position.z = Math.floor(Math.random() * -1000);
        scene.add(sphere);
    }

    for (let i = 0; i < 100; i++) {
        const geometry = new THREE.SphereGeometry(2, 2, 2);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const sphere = new THREE.Mesh(geometry, material);
        sphere.position.x = Math.floor(Math.random() * 1000);
        sphere.position.y = Math.floor(Math.random() * -1000);
        sphere.position.z = Math.floor(Math.random() * -1000);
        scene.add(sphere);
    }

}
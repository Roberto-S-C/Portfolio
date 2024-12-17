import * as THREE from 'three';

const skills = [
    '/shapes/html.jpg',
    '/shapes/css.jpg',
    '/shapes/js.jpg',
    '/shapes/react.jpg',
    '/shapes/git.jpg',
    '/shapes/net.png',
    '/shapes/sql-server.jpg',
    '/shapes/linux.jpg'
]

export default function createSkills() {

    const loader = new THREE.TextureLoader();

    return skills.map(img => {
        let texture = loader.load(img);
        let material = new THREE.MeshBasicMaterial({ color: 0xffffff, map: texture });
        let geometry = new THREE.BoxGeometry(40, 40, 40);
        return new THREE.Mesh(geometry, material);
    });
}
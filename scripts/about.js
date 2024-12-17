import * as THREE from 'three';
import { GLTFLoader, OrbitControls } from 'three/examples/jsm/Addons.js';
import createSkills from './skills';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.y = 200;
camera.position.z = 300;
camera.rotation.x = (Math.PI / 6) * -1;

const hemiLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
scene.add(hemiLight);


const loader = new GLTFLoader();

let desk;
loader.load('/desk/scene.gltf', function (gltf) {
    desk = gltf.scene;
    desk.scale.set(1.3, 1.3, 1.3);
    desk.rotation.y = 0.11;
    scene.add(gltf.scene);
}, undefined, function (error) {

    console.error(error);

});


// let skills = createSkills();
// for (let i = 0; i < skills.length; i++) {
//     skills[i].position.x = i * 60;
//     scene.add(skills[i]);
// }

const renderer = new THREE.WebGLRenderer();

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false;

function animate() {
    // skills.forEach(skill => {
    //     skill.rotation.x += 0.01;
    //     skill.rotation.y += 0.01;
    // });

    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
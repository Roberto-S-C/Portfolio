import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import createStarts from './stars';

import WebGL from 'three/addons/capabilities/WebGL.js';

if (WebGL.isWebGL2Available()) {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 600);

    const ambientLight = new THREE.AmbientLight(0xffffbb, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    const loader = new GLTFLoader();
    let earth;
    loader.load('/earth/scene.gltf', gltf => {
        earth = gltf.scene;
        earth.scale.set(30, 30, 30);
        earth.position.set(0, 0, 0);
        earth.rotation.x = 0.4;
        earth.rotation.y = 1.7;
        scene.add(earth)
    }, undefined, function (error) {

        console.error(error);

    })

    createStarts(scene);

    const renderer = new THREE.WebGLRenderer({ antialias: true });

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;

    function animate() {
        renderer.render(scene, camera);
    }
    renderer.setAnimationLoop(animate);

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

} else {

    const warning = WebGL.getWebGL2ErrorMessage();
    document.getElementById('container').appendChild(warning);

}
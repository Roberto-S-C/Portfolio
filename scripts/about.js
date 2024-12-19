import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

class CanvasScene {
    constructor(canvasId, sceneIndex) {
        this.canvas = document.getElementById(canvasId);
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x000000);

        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.y = 200;
        this.camera.position.z = 300;
        this.camera.rotation.x = (Math.PI / 6) * -1;

        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        this.sceneIndex = sceneIndex;
        this.raspberry = null;

        // Initialize appropriate models based on scene index
        if (this.sceneIndex === 0) {
            this.addDesk();
        } else if (this.sceneIndex === 2) {
            this.addRaspberry();
        }
    }

    addRaspberry() {
        const loader = new GLTFLoader();
        loader.load('/Models/raspberry/scene.gltf', (gltf) => {
            this.raspberry = gltf.scene;
            this.raspberry.position.x = 150;
            this.scene.add(this.raspberry);
        });
    }

    animate() {
        if (this.mixer) {
            const delta = this.clock.getDelta();
            this.mixer.update(delta);
        }

        // Add rotation only if raspberry exists (scene 3)
        if (this.sceneIndex === 2 && this.raspberry) {
            this.raspberry.rotation.y += 0.01;

            // Floating motion using sine wave
            const time = Date.now() * 0.001; // Convert to seconds
            this.raspberry.position.y = 30 + Math.sin(time * 2) * 10;

            // Subtle scale pulsing
            const scale = 2.2 + Math.sin(time * 3) * 0.05;
            this.raspberry.scale.set(scale, scale, scale);
        }

        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(() => this.animate());
    }


    addLight() {
        const hemiLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
        this.scene.add(hemiLight);
    }

    addDesk() {
        const loader = new GLTFLoader();
        loader.load('/Models/desk/scene.gltf', (gltf) => {
            const desk = gltf.scene;
            desk.scale.set(1.3, 1.3, 1.3);
            desk.position.x = 120;
            desk.rotation.y = -0.2;
            this.scene.add(desk);
        });
    }
}

// Create scenes for each canvas
const scenes = [
    new CanvasScene('canvas1', 0),
    new CanvasScene('canvas2', 1),
    new CanvasScene('canvas3', 2),
];

// Add elements to scenes
scenes[0].addLight();
scenes[0].addDesk();
scenes[2].addLight();

// Animate each scene
scenes.forEach(scene => scene.animate());

// Modify the scroll event listener
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;

    // Ensure first canvas is always visible on initial load
    if (scrollPosition === 0) {
        scenes[0].canvas.classList.add('active');
        return;
    }

    scenes.forEach((scene, index) => {
        const canvas = scene.canvas;
        const section = document.getElementById(`section${index + 1}`);

        if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (
                scrollPosition >= sectionTop - windowHeight / 2 &&
                scrollPosition < sectionTop + sectionHeight - windowHeight / 2
            ) {
                canvas.classList.add('active');
            } else {
                canvas.classList.remove('active');
            }
        }
    });
});

// Ensure first canvas is visible on initial load
window.addEventListener('load', () => {
    scenes[0].canvas.classList.add('active');
});
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 15, window.innerWidth / window.innerHeight, 10, 10000 );

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry(700, 700, 700, 10, 10, 10);
const material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

let z_position = 5000;

camera.position.z = z_position;

const animate = () => {
	requestAnimationFrame(animate);

	cube.rotation.x += z_position/150000;
	cube.rotation.y += z_position/150000;

	renderer.render( scene, camera );
}

animate();
const scene = new THREE.Scene();

//*****************/
//   Add Skybox
//
const loadSkybox = () => {
  var path = "../assets/skyboxes/moonscape_";
  var format = ".png";
  var urls = [
    path + "xp" + format,
    path + "xn" + format,
    path + "yp" + format,
    path + "yn" + format,
    path + "zp" + format,
    path + "zn" + format,
  ];
  var reflectionCube = new THREE.CubeTextureLoader().load(urls);
  reflectionCube.format = THREE.RGBFormat;
  scene.background = reflectionCube;
  var hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6);
  hemiLight.color.setHSL(0.6, 1, 0.6);
  hemiLight.groundColor.setHSL(0.095, 1, 0.75);
  hemiLight.position.set(0, 500, 0);
  scene.add(hemiLight);
};

loadSkybox();
//*****************/

//*****************/
//   Add Big Sphere
//
const big_radius = 200;
const big_geometry = new THREE.SphereGeometry(big_radius, 32, 32);
const big_material = new THREE.MeshBasicMaterial({
  color: 0xffff00,
  transparent: true,
  opacity: 0.5,
  side: THREE.DoubleSide,
  wireframe: true,
});
const big_sphere = new THREE.Mesh(big_geometry, big_material);
scene.add(big_sphere);
//*****************/

//*****************/
//  Add Tether Vehicle
//
const vehicle_geometry = new THREE.BoxGeometry(10, 10, 10);
const vehicle_material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
});
const vehicle = new THREE.Mesh(vehicle_geometry, vehicle_material);
vehicle.position.y = -195;
vehicle.rotation.order = "YXZ";

const vehicle_cameraMountGeometry = new THREE.CylinderGeometry(1, 1, 5, 32);
const vehicle_cameraMountMaterial = new THREE.MeshBasicMaterial({
  color: 0x0000ff,
});
const vehicle_cameraMount = new THREE.Mesh(
  vehicle_cameraMountGeometry,
  vehicle_cameraMountMaterial
);
vehicle_cameraMount.position.y = 7.5;

const vehicle_cameraGeometry = new THREE.ConeGeometry(2, 3, 4);
const vehicle_cameraMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
window.vehicle_camera = new THREE.Mesh(
  vehicle_cameraGeometry,
  vehicle_cameraMaterial
);
vehicle_camera.rotation.order = "YXZ";
vehicle_camera.rotation.x = Math.PI / 2;
vehicle_camera.position.y = 2.5;

vehicle_camera.add(playerCamera);
vehicle_cameraMount.add(vehicle_camera);
vehicle.add(vehicle_cameraMount);

//*****************/

//*****************/
//   Add Tether Sphere
//
const tether_radius = 2;
const tether_geometry = new THREE.SphereGeometry(tether_radius, 32, 32);
const tether_material = new THREE.MeshBasicMaterial({
  color: 0x00ffff,
});
const tether = new THREE.Mesh(tether_geometry, tether_material);
tether.rotation.order = "YXZ";
tether.add(vehicle);
scene.add(tether);
//*****************/

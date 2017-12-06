import * as originalThree from 'three';

let THREE = Object.assign({}, originalThree);

export default function createModel({
  element,
  isOrbitControllable = true,
  isDeviceOrbitControllable = true,
  modelURL = '',
  globalLight = 0x606060,
  primaryLight = 0xcccccc,
  secondaryLight = 0x909090,
  cameraPosition = [15, 15, 15],
}) {
  let scene;       // 场景
  let camera;      // 相机
  let renderer;    // 渲染器
  let orbitControls;    // 点击，触摸控制器
  let deviceOrientationControls;  // 设备陀螺仪控制器

  function init() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
      15,
      element.clientWidth / element.clientHeight,
      1,
      2000,
    );
    camera.position.set(...cameraPosition);

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    // renderer = new THREE.WebGLRenderer();
    
    renderer.setSize(element.clientWidth, element.clientHeight);
    element.appendChild(renderer.domElement);

    // 控制器
    if (isOrbitControllable) {
      import('../utils/OrbitControls.js')
        .then(enhanceTHREE => {
          THREE = enhanceTHREE.default(THREE);
          orbitControls = new THREE.OrbitControls(camera, renderer.domElement);
          orbitControls.addEventListener('change', render);
        });
    }

    // 全局环境光
    const ambientLight1 = new THREE.AmbientLight(globalLight);
    scene.add(ambientLight1);

    // 主平行光
    const directionalLight1 = new THREE.DirectionalLight(primaryLight);
    directionalLight1.position.set(1, 2, 0);
    scene.add(directionalLight1);
    // 辅助光
    const directionalLight2 = new THREE.DirectionalLight(secondaryLight);
    directionalLight2.position.set(-1, -1, 1);
    scene.add(directionalLight2);

    // 导入 json 格式模型
    const loader = new THREE.JSONLoader();
    loader.load(
      // 资源 URL
      modelURL,
      // load 完成后的回调
      (geometry, materials) => {
        const object = new THREE.Mesh(geometry, materials);
        if (isDeviceOrbitControllable) {
          import('../utils/DeviceOrientationControls.js')
            .then(enhanceTHREE => {
              THREE = enhanceTHREE.default(THREE);
              deviceOrientationControls = new THREE.DeviceOrientationControls( object );
            });
        }
        scene.add(object);
      },
    );
  }

  function render() {
    camera.lookAt(scene.position);
    renderer.render(scene, camera);
  }


  function animate() {
    requestAnimationFrame(animate);
    if (orbitControls) {
      orbitControls.update();
    }
    if (deviceOrientationControls) {
      deviceOrientationControls.update();
    }
    render();
  }

  return {
    init,
    render,
    animate,
  };
}

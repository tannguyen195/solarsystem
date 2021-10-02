import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
// small change
const Model = (props) => {
  const model = useLoader(GLTFLoader, process.env.PUBLIC_URL + props.url);

  let mixer;
  if (model.animations.length > 0) {
    mixer = new THREE.AnimationMixer(model.scene);

    let clip = model.animations[1];
    //const start = THREE.AnimationUtils.subclip(clip, "start", 1, 100);
    const action = mixer.clipAction(clip);
    console.log(clip);
    action.setLoop(THREE.LoopOnce);
    action.clampWhenFinished = true
    setTimeout(() => {
      action.play();
    }, 2000);
  }

  useFrame((scene, delta) => {
    mixer?.update(delta);
  });

  model.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      child.material.side = THREE.FrontSide;
    }
  });

  return <primitive object={model.scene} />;
};

export default Model;

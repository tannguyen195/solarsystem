import {
  Bloom,
  EffectComposer,
} from "@react-three/postprocessing";

const Effect = () => {
  return (
    
    <EffectComposer >
      <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} />
    </EffectComposer>
  );
};

export default Effect;

import {
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";

const Effect = () => {
  return (
    <EffectComposer>
      <Noise opacity={0.02} />
      <Vignette eskil={false} offset={0.1} darkness={1.1} />
    </EffectComposer>
  );
};

export default Effect;

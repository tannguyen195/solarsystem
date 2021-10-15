function Lights() {
  return (
    <group layers={1}>
      <ambientLight intensity={0.3} l />
      <pointLight color="rgb(255, 220, 180)" intensity={1.5} />
    </group>
  );
}

export default Lights;

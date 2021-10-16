function Lights() {
  return (
    <group layers={1}>
      <ambientLight intensity={0.1}  />
      <pointLight color="rgb(255, 220, 180)" intensity={1.5} />
    </group>
  );
}

export default Lights;

function Lights() {
  return (
    <>
      <ambientLight intensity={0.7} />
      <pointLight
        castShadow
        shadow-bias={0.01}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
    </>
  );
}

export default Lights;

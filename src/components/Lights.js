
function Lights() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight        
        color="rgb(255, 220, 180)"
        intensity={1.5}
     
      />
    </>
  );
}

export default Lights;

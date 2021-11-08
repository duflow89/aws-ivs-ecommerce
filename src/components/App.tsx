const App = () => {
  const { isPlayerSupported } = window.IVSPlayer;
  console.log(isPlayerSupported);

  return (
    <>
      <div>
        <h1>AWS IVS E-COMMERCE</h1>
        <h2>isPlayerSupported: {isPlayerSupported.toString()}</h2>
      </div>
    </>
  );
};

export default App;

const App = () => {
  const { IVSPlayer } = window;
  console.log(IVSPlayer.isPlayerSupported);

  return (
    <>
      <div>
        <h1>Hello World</h1>
      </div>
    </>
  );
};

export default App;

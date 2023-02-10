function App() {
  //* class => className
  //* for => htmlFor

  const h1Style = {
    color: "red",
    textAlign: "center",
  };

  return (
    <div className="App">
      <h1 style={h1Style}>Men tug'ildim</h1>
    </div>
  );
}

export default App;

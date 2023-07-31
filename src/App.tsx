import Scene from "./Scene";

export default function Viewer() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "0.5rem",
          textAlign: "center",
          width: "100%",
          zIndex: 999
        }}
      >
        <h1>Press space to change view</h1>
        <p id="currentView"></p>
      </div>
      <Scene />
    </>
  );
}

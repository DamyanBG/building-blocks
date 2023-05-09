import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const ref = useRef(null);

  const [blocks, setBlocks] = useState([]);

  console.log("blocks");
  console.log(blocks);

  return (
    <>
      <div style={{ width: "80vw" }}>
        <section
          style={{
            marginLeft: "10%",
            width: "80%",
            background: "blue",
            padding: "50px",
          }}
        >
          <h2>Serial number build</h2>
          <article
            style={{
              width: "80%",
              height: "300px",
              backgroundColor: "#787878",
            }}
            onDrop={(e) => {
              e.preventDefault();
              console.log(e);
              console.log("on drop");
              console.log(ref.current.value);
              console.log(ref.current.placeholder);
              const newBlock = (
                <input
                  style={{
                    height: "32px",
                  }}
                  value={ref.current.value}
                />
              );
              setBlocks([...blocks, newBlock]);
            }}
            onDragOver={(e) => {
              e.preventDefault();
            }}
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                backgroundColor: "orange",
              }}
            >
              {blocks}
            </div>
          </article>
        </section>
        <section
          style={{
            marginLeft: "10%",
            width: "80%",
            background: "green",
            padding: "50px",
          }}
        >
          <h2>Building blocks</h2>
          <input
            draggable
            onDragStart={(e) => {
              ref.current = e.target;
            }}
            style={{
              margin: "auto 16px auto 16px",
              height: "32px",
              borderRadius: "12px",
            }}
            type="text"
            placeholder="Constant"
          />
          <input
            draggable
            onDragStart={(e) => {
              ref.current = e.target;
            }}
            style={{
              margin: "auto 16px auto 16px",
              height: "32px",
              borderRadius: "12px",
            }}
            type="text"
            placeholder="Counting Sequence"
          />
          <input
            draggable
            onDragStart={(e) => {
              ref.current = e.target;
            }}
            style={{
              margin: "auto 16px auto 16px",
              height: "32px",
              borderRadius: "12px",
            }}
            type="text"
            placeholder="Date"
          />
        </section>
      </div>
    </>
  );
}

export default App;

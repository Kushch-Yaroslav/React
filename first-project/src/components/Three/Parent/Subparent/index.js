import Child from "./Child";

function Subparent(props) {
  return (
    <div style={{ border: "inherit", padding: "20px" }}>
      <p>Subparent</p>
      <Child />
    </div>
  );
}

export default Subparent;

import Innerchild from "./Innerchild";

function Child(props) {
  return (
    <div style={{ border: "inherit", padding: "20px" }}>
      <p>Child</p>
      <Innerchild />
    </div>
  );
}

export default Child;

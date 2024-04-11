import UserContext from "../../../../../../contexts/UserContext";
import { useContext } from "react";
function Innerchild(props) {
  const [user, setUser] = useContext(UserContext);

  return (
    <div style={{ border: "inherit", padding: "20px" }}>
      <p>Inner child</p>
      <p>{user.firstName}</p>
      <button onClick={setUser}>LogOut</button>
    </div>
  );
}

export default Innerchild;

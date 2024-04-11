import UserContext from "../contexts/UserContext";

export const withUser = (Component) => (props) => {
  return (
    <UserContext.Consumer>
      {([user, logOut]) => {
        return <Component user={user} setUser={logOut} {...props} />;
      }}
    </UserContext.Consumer>
  );
};

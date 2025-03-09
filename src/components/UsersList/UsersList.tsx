import { useContext } from "react";
import { Context } from "../../Context";

export const UsersList = () => {
  const { users } = useContext(Context);

  return (
    <ol>
      {users.map((user) => (
        <li key={user}>{user}</li>
      ))}
    </ol>
  );
};

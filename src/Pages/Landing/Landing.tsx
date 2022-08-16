import { Link } from "react-router-dom";
import "./Landing.scss";

export const Landing = ({ listUsers }: { listUsers: JSX.Element }) => {
  return (
    <div className="Landing">
      <Link className="Landing__link" to={"/add"}>
        <h1>Add new user</h1>
      </Link>
      {listUsers}
    </div>
  );
};

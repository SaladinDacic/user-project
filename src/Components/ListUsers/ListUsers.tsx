import { UserInterface } from "../../App";
import { Link } from "react-router-dom";
import "./ListUsers.scss";

export const ListUsers = ({
  deleteUser,
  userList,
}: {
  deleteUser: (id: string) => void;
  userList: UserInterface[];
}) => {
  return (
    <div className="ListUsers">
      {userList &&
        userList.map((obj: UserInterface) => {
          return (
            <div className="ListUsers__user" key={obj.id}>
              <h2>UserName : {obj.UserName}</h2>
              <h3>Email : {obj.Email}</h3>
              <h3>PhoneNumber : {obj.PhoneNumber}</h3>
              <h3>Gender : {obj.Gender}</h3>
              <h3>Date of birth : {obj.DateOfBirth}</h3>
              <div>
                <Link
                  className={"ListUsers__user--link"}
                  to={`/edit/${obj.id}`}
                >
                  Edit
                </Link>
                <button
                  className={"ListUsers__user--btn"}
                  onClick={() => {
                    deleteUser(obj.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

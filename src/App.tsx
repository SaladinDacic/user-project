import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { AddEditUser, Landing } from "./Pages";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { ListUsers } from "./Components";

export interface UserInterface {
  id: string;
  UserName: string;
  Email: string;
  PhoneNumber: string;
  Gender: string;
  DateOfBirth: string;
}
function App() {
  const initialUser = {
    id: uuid(),
    UserName: "Blablo",
    Email: "blablabla@gmail.com",
    PhoneNumber: "065468869",
    Gender: "male",
    DateOfBirth: "15-12-1999",
  };
  let savedState = window.localStorage.getItem("userList");
  const [userList, setUserList] = useState<UserInterface[]>(() => {
    if (savedState && JSON.parse(savedState).length !== 0) {
      return JSON.parse(savedState);
    } else {
      return [initialUser];
    }
  });

  useEffect(() => {
    window.localStorage.setItem("userList", JSON.stringify(userList));
  }, [userList]);

  const addUser = (userObj: UserInterface) => {
    setUserList((oldState) => {
      if (oldState) {
        return [...oldState, userObj];
      } else return [userObj];
    });
  };
  const editUser = (id: string, userObj: UserInterface) => {
    setUserList((oldState) => {
      if (oldState) {
        let newState = oldState.map((obj: UserInterface) => {
          if (obj.id === id) return userObj;
          else return obj;
        });
        return [...newState];
      } else return [...oldState];
    });
  };
  const deleteUser = (id: string) => {
    setUserList((oldState) => {
      if (oldState) {
        let newState = oldState.filter((obj: UserInterface) => {
          return obj["id"] !== id;
        });
        return [...newState];
      } else {
        return [...oldState];
      }
    });
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/*"
          element={
            <Landing
              listUsers={
                <ListUsers deleteUser={deleteUser} userList={userList} />
              }
            />
          }
        />
        <Route path="/add" element={<AddEditUser addUser={addUser} />} />
        <Route path="/edit/:id" element={<AddEditUser editUser={editUser} />} />
      </Routes>
    </div>
  );
}

export default App;

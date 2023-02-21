import { useContext, useState } from "react";
import { TechsContext } from "../../contexts/techsContext";
import { UserContext } from "../../contexts/UserContext";
export const Li = () => {
  const { user } = useContext(UserContext);

  const { handleEditOpenModal } = useContext(TechsContext);
  // const [thisTech, setThisTech] = useState(user.techs);

  return (
    <>
      {user.techs &&
        user.techs.map((tech) => {
          return (
            <li id={tech.id} onClick={handleEditOpenModal} key={tech.id}>
              <p>{tech.title}</p> <span>{tech.status}</span>
            </li>
          );
        })}
    </>
  );

  // return teste.forEach((element) => {
  //   user.techs === undefined
  //     ? null
  //     : user.techs.map((tech) => {
  //         return (
  //           <li>
  //             <p>{tech.title}</p> <span>{tech.status}</span>
  //           </li>
  //         );
  //       });
  // );
};

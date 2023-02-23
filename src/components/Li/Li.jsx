import { useContext, useEffect, useState } from "react";
import { TechsContext } from "../../contexts/techsContext";
import { UserContext } from "../../contexts/UserContext";
export const Li = () => {
  const { user, verifyLogged } = useContext(UserContext);

  const { handleEditOpenModal } = useContext(TechsContext);

  useEffect(() => {
    const thisFunction = async () => await verifyLogged();
    thisFunction();
  }, [user]);

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
};

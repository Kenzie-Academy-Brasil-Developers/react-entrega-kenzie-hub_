import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #12121480;

  @media (min-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #12121480;
  }
`;

export const ModalContent = styled.div`
  background-color: #212529;
  border-radius: 10px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 400px;
  margin: auto;

  position: relative;

  header {
    padding: 0px;
    width: 100%;
    height: 60px;
    display: flex;
    background-color: #343b41;
    justify-content: space-between;
  }

  header > h1 {
    position: absolute;
    font-size: 14px;
    top: 22px;
    left: 14px;
    color: #f8f9fa;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 10px 15px;
    gap: 15px;
  }
  label {
    color: white;
  }
  form > input {
    color: white;
    border: 1px solid white;
    background-color: #343b41;
    height: 48px;
    width: 100%;
    left: 0px;
    top: 28.788604736328125px;
    border-radius: 4px;
    padding: 0px 16px 0px 16px;
  }

  form > select {
    color: white;
    border: 1px solid white;
    background-color: #343b41;
    height: 48px;
    width: 100%;
    left: 0px;
    top: 28.78857421875px;
    border-radius: 4px;
    padding: 0px 16px 0px 16px;
  }

  @media (min-width: 768px) {
    background-color: #212529;
    border-radius: 10px;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);
    width: 500px;
    height: 400px;
    margin: auto;

    position: relative;

    header {
      padding: 0px;
      width: 100%;
      height: 60px;
      display: flex;
      background-color: #343b41;
      justify-content: space-between;
    }

    header > h1 {
      position: absolute;
      top: 14px;
      left: 33px;
      color: #f8f9fa;
    }

    form {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      padding: 10px 85px;
      gap: 15px;
    }
    label {
      color: white;
    }
    form > input {
      color: white;
      border: 1px solid white;
      background-color: #343b41;
      height: 48px;
      width: 329.92877197265625px;
      left: 0px;
      top: 28.788604736328125px;
      border-radius: 4px;
      padding: 0px 16px 0px 16px;
    }

    form > select {
      color: white;
      border: 1px solid white;
      background-color: #343b41;
      height: 48px;
      width: 329.92877197265625px;
      left: 0px;
      top: 28.78857421875px;
      border-radius: 4px;
      padding: 0px 16px 0px 16px;
    }
  }
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 33px;
  background-color: transparent;
  border: none;
  font-size: 24px;
  color: #999;
  cursor: pointer;
  &:hover {
    color: #000;
  }

  @media (min-width: 768px) {
    position: absolute;
    top: 14px;
    right: 33px;
    background-color: transparent;
    border: none;
    font-size: 24px;
    color: #999;
    cursor: pointer;
    &:hover {
      color: #000;
    }
  }
`;

export const BtnCadastro = styled.button`
  height: 48px;
  width: 100%;
  border-radius: 4.060661792755127px;
  padding: 0px 22px 0px 22px;
  background-color: #ff577f;
  color: white;
  border: none;
  font-weight: 500;
  font-size: 18px;

  @media (min-width: 768px) {
    height: 48px;
    width: 324px;
    border-radius: 4.060661792755127px;
    padding: 0px 22px 0px 22px;
    background-color: #ff577f;
    color: white;
    border: none;
    font-weight: 500;
    font-size: 18px;
  }
`;

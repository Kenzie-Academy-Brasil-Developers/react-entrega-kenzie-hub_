import styled from "styled-components";

export const MainLogin = styled.main`
  width: 100%;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 32px;
    color: #ff577f;
  }

  form > h2 {
    font-size: 28px;
    color: white;
    margin-bottom: 24px;
  }

  .divForm {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 22px;
    color: white;
    margin-bottom: 24px;
  }

  .divForm > input {
    height: 48px;
    width: 100%;
    border-radius: 4px;
    padding: 0px 16px 0px 16px;
    background-color: #343b41;
    border: none;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 96%;
    gap: 34px;
  }

  .buttons > button {
    height: 48px;
    width: 100%;
    border-radius: 4.060661792755127px;
    padding: 0px 22px 0px 22px;
    background-color: #ff577f;
    border: none;
    color: white;
    font-size: 16px;
  }

  .cadastro {
    width: 100%;
  }

  .buttons > span {
    color: white;
  }

  .buttons > .cadastro > button {
    height: 48px;
    width: 100%;
    border-radius: 4px;
    padding: 0px 22px 0px 22px;
    background-color: #868e96;
    border: none;
    color: white;
    font-size: 16px;
  }

  div > h1 {
    font-size: 32px;
    color: #ff577f;
  }

  form {
    height: max-content;
    width: 85%;
    border-radius: 4px;
    padding: 42px 22px 42px 22px;
    display: flex;
    flex-direction: column;
    color: white;
    align-items: center;
    background-color: #212529;
  }

  .divForm > p {
    color: red;
  }

  form > span {
    color: #868e96;
  }

  @media (min-width: 768px) {
    width: 100%;
    background-color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      margin-top: 20px;
      margin-bottom: 20px;
      font-size: 32px;
      color: #ff577f;
    }

    form > h2 {
      font-size: 28px;
      color: white;
      margin-bottom: 24px;
    }

    .divForm {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 22px;
      color: white;
      margin-bottom: 24px;
    }

    .divForm > input {
      height: 48px;
      width: 329.92877197265625px;
      border-radius: 4px;
      padding: 0px 16px 0px 16px;
      background-color: #343b41;
      border: none;
    }

    .buttons {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      gap: 34px;
    }

    .buttons > button {
      height: 48px;
      width: 100%;
      border-radius: 4.060661792755127px;
      padding: 0px 22px 0px 22px;
      background-color: #ff577f;
      border: none;
      color: white;
      font-size: 16px;
    }

    .cadastro {
      width: 100%;
    }

    .buttons > span {
      color: white;
    }

    .buttons > .cadastro > button {
      height: 48px;
      width: 100%;
      border-radius: 4px;
      padding: 0px 22px 0px 22px;
      background-color: #868e96;
      border: none;
      color: white;
      font-size: 16px;
    }

    div > h1 {
      font-size: 32px;
      color: #ff577f;
    }

    form {
      height: max-content;
      width: 369px;
      border-radius: 4px;
      padding: 42px 22px 42px 22px;
      display: flex;
      flex-direction: column;
      color: white;
      align-items: center;
      background-color: #212529;
    }

    .divForm > p {
      color: red;
    }

    form > span {
      color: #868e96;
    }
  }
`;

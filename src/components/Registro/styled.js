import styled from "styled-components";

export const Main = styled.main`
  height: 100%;
  width: 100%;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    gap: 62px;
    margin-bottom: 45px;
    margin-top: 45px;
  }

  .divForm {
    display: flex;
    flex-direction: column;
    gap: 22px;
    color: white;
  }

  .divForm > h2 {
    font-size: 28px;
    color: white;
  }

  div > .link > button {
    height: 40.10990524291992px;
    width: 100%;
    border-radius: 4px;
    padding: 0px 16px 0px 16px;
    background-color: #212529;
    color: white;
    font-weight: 500;
    border: none;
  }

  div > h1 {
    font-size: 32px;
    color: #ff577f;
  }

  form {
    width: 80%;
    border-radius: 4px;
    padding: 42px 22px 42px 22px;
    display: flex;
    flex-direction: column;
    color: white;
    align-items: center;
    background-color: #212529;
  }

  form > section {
    display: flex;
    flex-direction: column;
    color: white;
    gap: 22px;
    margin-bottom: 20px;
  }

  form > section > select {
    height: 48px;
    width: 102%;
    border-radius: 4px;
    padding: 0px 16px 0px 16px;
    background-color: #343b41;
    border: none;
    color: white;
  }

  form > section > input {
    height: 48px;
    width: 90%;
    border-radius: 4px;
    padding: 0px 16px 0px 16px;
    background-color: #343b41;
    border: none;
  }

  form > section > p {
    color: red;
  }

  form > span {
    color: #868e96;
  }

  form > button {
    height: 48px;
    width: 100%;
    border-radius: 4px;
    padding: 0px 22px 0px 22px;
    background-color: #ff577f;
    border: none;
    color: white;
    font-size: 16px;
  }

  @media (min-width: 768px) {
    height: 100%;
    width: 100%;
    background-color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    div {
      display: flex;
      align-items: center;
      gap: 180px;
      margin-bottom: 45px;
      margin-top: 45px;
    }

    .divForm {
      display: flex;
      flex-direction: column;
      gap: 22px;
      color: white;
    }

    .divForm > h2 {
      font-size: 28px;
      color: white;
    }

    div > .link > button {
      height: 40.10990524291992px;
      width: 67.48529052734375px;
      border-radius: 4px;
      padding: 0px 16px 0px 16px;
      background-color: #212529;
      color: white;
      font-weight: 500;
    }

    div > h1 {
      font-size: 32px;
      color: #ff577f;
    }

    form {
      width: 369px;
      border-radius: 4px;
      padding: 42px 22px 42px 22px;
      display: flex;
      flex-direction: column;
      color: white;
      align-items: center;
      background-color: #212529;
    }

    form > section {
      display: flex;
      flex-direction: column;
      color: white;
      gap: 22px;
      margin-bottom: 20px;
    }

    form > section > select {
      height: 48px;
      width: 100%;
      border-radius: 4px;
      padding: 0px 16px 0px 16px;
      background-color: #343b41;
      border: none;
      color: white;
    }

    form > section > input {
      height: 48px;
      width: 329.92877197265625px;
      border-radius: 4px;
      padding: 0px 16px 0px 16px;
      background-color: #343b41;
      border: none;
    }

    form > section > p {
      color: red;
    }

    form > span {
      color: #868e96;
    }

    form > button {
      height: 48px;
      width: 100%;
      border-radius: 4px;
      padding: 0px 22px 0px 22px;
      background-color: #ff577f;
      border: none;
      color: white;
      font-size: 16px;
    }
  }
`;

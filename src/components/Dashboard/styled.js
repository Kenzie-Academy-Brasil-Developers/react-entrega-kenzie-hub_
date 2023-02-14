import styled from "styled-components";

export const MainDashboard = styled.main`
  background-color: black;
  width: 100%;
  height: 100vh;

  header {
    width: 100%;
    height: 72px;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
    border-bottom: 1px solid #212529;
    align-items: center;
  }

  header > .btn {
    cursor: pointer;
    height: 32px;
    width: 55px;
    border-radius: 4px;
    padding: 0px 16px 0px 16px;
    background-color: #212529;
    color: white;
    border: none;
  }

  header > h1 {
    font-size: 24px;
    color: #ff577f;
  }

  .about {
    width: 100%;
    height: 118px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
    padding: 0 30px;
    border-bottom: 1px solid #212529;
  }

  .about > h2 {
    color: white;
    font-size: 16px;
  }

  .about > span {
    font-size: 10px;
    color: #868e96;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 23px;
    padding: 0 30px;
    width: 100%;
    padding-top: 37px;
  }

  section > h3 {
    color: white;
    font-size: 18px;
  }

  section > span {
    font-size: 16px;
    color: white;
  }

  @media (min-width: 768px) {
    background-color: black;
    width: 100%;
    height: 100vh;

    header {
      width: 100%;
      height: 72px;
      display: flex;
      justify-content: space-between;
      padding: 0 330px;
      border-bottom: 1px solid #212529;
      align-items: center;
    }

    header > .btn {
      cursor: pointer;
      height: 32px;
      width: 55.485294342041016px;
      border-radius: 4px;
      padding: 0px 16px 0px 16px;
      background-color: #212529;
      color: white;
      border: none;
    }

    header > h1 {
      font-size: 32px;
      color: #ff577f;
    }

    .about {
      width: 100%;
      height: 118px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 330px;
      border-bottom: 1px solid #212529;
    }

    .about > h2 {
      color: white;
      font-size: 18px;
    }

    .about > span {
      font-size: 12px;
      color: #868e96;
    }

    section {
      display: flex;
      flex-direction: column;
      gap: 23px;
      padding: 0 330px;
      width: 100%;
      padding-top: 37px;
    }

    section > h3 {
      color: white;
      font-size: 18px;
    }

    section > span {
      font-size: 16px;
      color: white;
    }
  }
`;

import styled from "styled-components";

export const MainDashboard = styled.main`
  background-color: black;
  min-width: 100%;
  height: 100%;
  overflow-x: hidden;
  /* min-height: 100vw; */

  ul {
    background-color: #212529;
    width: 99%;
    min-height: 100px;
    border-radius: 4px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  ul > li {
    height: 49px;
    border-radius: 4px;
    align-items: center;
    padding: 0 21px;
    width: 100%;
    display: flex;
    background-color: #121214;
    justify-content: space-between;
    color: white;
    cursor: pointer;
  }

  ul > li > p {
    font-size: 14px;
    color: white;
  }

  ul > li > span {
    font-size: 12px;
    color: #868e96;
  }

  ul > li:hover {
    background-color: #343b41;
  }

  header {
    width: 100%;
    height: 72px;
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
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
    min-height: 100%;
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

  .openModal {
    padding: 7px 10px;
    border-radius: 4px;
    background-color: #212529;
    font-size: 18px;
    color: white;
  }

  @media (min-width: 768px) {
    background-color: black;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .mainUL {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
    }
    header {
      width: 100%;
      height: 72px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    header > h2 {
      color: white;
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
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 23px;
      padding: 0 230px;
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

    .openModal {
      padding: 7px 10px;
      border-radius: 4px;
      background-color: #212529;
      font-size: 18px;
      color: white;
    }
  }
`;

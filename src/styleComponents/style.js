import styled from "styled-components";

export const Header = styled.div`
  @media (min-width: 640px) {
    padding: 20px 40px;
  }

  @media (min-width: 1024px) {
  }
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: #fff;
  color: #ddd;
  .button_box {
    background: red;
    display: flex;
  }
`;

export const NavBar = styled.div`
  @media (min-width: 640px) {
    .container {
      padding: 15px;
    }
  }
  @media (min-width: 1024px) {
    .container {
      padding: 20px;
    }
  }
  & > div.search_box {
    padding: 10px 20px;
    border-radius: 15px;
    margin: 30px auto;
    width: 80%;
  }
  & > div input {
    border: none;
    width: 100%;
    padding: 10px;
  }
  & > div input:focus-visible {
    outline: none;
  }
`;

export const Container = styled.div`
  .card_1:hover {
    box-shadow: ${(props) =>
      `0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px ${props.props.color}`};
  }
  .container {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    gap: 16px;
    max-width: 1280px;
    margin: 0 auto;
  }
  & > .container > div {
    min-height: 400px;
  }
  .card_style {
    border-radius: 20px;
    padding: 20px;
    min-height: 320px;
  }
  .title_box {
    display: flex;
    align-items: center;
  }
  .title_box > p {
    font-family: "pokemon";
  }
  .txtBox > p {
    font-family: "pokemon";
    word-break: break-word;
  }
  .img_box {
    display: flex;
    justify-content: center;
    padding: 20px;
  }

  .type_box {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    padding: 0 10px;
  }
  .type_box > div {
    width: 100%;
  }
  .type_box > div button {
    width: 100%;
  }
  @media (min-width: 640px) {
    .container {
      padding: 25px;
    }
    .img_box {
      display: flex;
      justify-content: center;
      padding: 50px;
    }
    .card_style {
      border-radius: 20px;
      padding: 20px;
      min-height: 450px;
    }
  }
  @media (min-width: 1024px) {
    .container {
      padding: 45px;
    }
  }
`;

import styled from "styled-components";

export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text.tertiary};
  font-size: 1.8rem;
  width: 200px;
  height: 80px;
  /* margin-right: 20px; */
  border-radius: 10px;
  background-color: ${(props) => props.theme.primary};
  box-shadow: 5px 5px 16px ${(props) => props.theme.buttonShadow1},
    -5px -5px 16px ${(props) => props.theme.buttonShadow2};
  cursor: pointer;
  border: none;
  &:focus {
    outline: none;
  }

  &:hover {
    box-shadow: inset 9px 9px 16px ${(props) => props.theme.buttonShadow1},
      inset -9px -9px 16px ${(props) => props.theme.buttonShadow2};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.6rem;
    width: 150px;
    height: 50px;

    box-shadow: none;

    &:hover {
      box-shadow: none;
    }
  }
`;

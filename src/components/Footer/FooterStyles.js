import styled from "styled-components";

export const FooterContainer = styled.footer`
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.footer};
  p {
    margin-bottom: 10px;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 10%;
  font-family: ${(props) => props.theme.fonts.fira};
  svg {
    width: 25px;
    height: 25px;
    color: ${(props) => props.theme.colors.text};
    transition: all 0.3 ease-out;
    &:hover {
      color: ${(props) => props.theme.colors.secondary};
      transition: all 0.3 ease-in;
    }
  }
`;
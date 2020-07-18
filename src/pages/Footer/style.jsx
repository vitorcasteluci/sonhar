import styled from "styled-components";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
export const RodapeContainer = styled.div`
  width: 100%; 
  height: 8.06%;
  background: #7b76fc;
`;

export const FollowUs = styled.h1`
  font-size: 16px;
  color: #fff2f3;
  text-align: left;
  opacity: 1;
  margin-top: 44px;
`;

export const Icon = styled(Link)`
  border-radius: 2px;
  font-size: 24px;
  margin-top: 41px;
  margin-left: 16px;
  color: #fff2f3;
`;

export const Social = styled.a`
  color: #fff2f3;
`;

export const RowStyled = styled(Row)`
  display: flex;
  padding-left: ${(props) => `${props.padding}%`};
`;

export const ColLinks = styled(Col)`


`;

export const RowStyledLinks = styled(RowStyled)`
  justify-content: center;
  width: 63%;
`;

export const Divider = styled.div`
  background: #fff2f3;
  height: 1px;
  width: 63%;
  margin: 0 auto;
`;

export const StyledLinks = styled(Link)`
  color: #ffffff;
  opacity: 1;
  letter-spacing: 0px;
  font-size: 16px;
  padding-top: 4%;
`;

export const RowAdress = styled(Row)`
  padding-left: ${(props) => `${props.padding}%`};
  padding-right: 24.4%;
  padding-top: 2.2%;
`;

export const Adress = styled.p`
  color: #fff2f3;
  font-size: 16px;
  text-align: center;
`;

export const LogoSonhar = styled.img`
<<<<<<< HEAD
  /* padding-left: 47.1%;
  padding-right: 47.2%; */
  padding-top: 0.8%

`
=======
  padding-left: 47.1%;
  padding-right: 47.2%;
  padding-top: 0.8%;
`;
>>>>>>> ee4353f5be55d2f4784b4e55eb96f93a520d64f5

export const Copyright = styled.p`
  color: #f2f2f2;
  font-size: 16px;
  text-align: center;
  padding-left: 42.4%;
  padding-right: 42.4%;
  padding-top: 1.2%;
`;

import styled from "styled-components";

export const Main = styled.section`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  box-sizing: border-box;
`;

export const DivTitle = styled.div`
  background-color: #335;
  padding: 5px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-evenly;
`;

export const ButtonAdd = styled.button`
  border: none;
  width: 30px;
  font-weight: bold;
  font-size: 20px;
`;

export const DivClients = styled.div``;
export const DivOneClient = styled.div`
  background-color: #353;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin-top: 5px;
`;

// nome    email   telefone

export const ConfirmModal = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalMaterial = styled.div`
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding-bottom: 10px;
  border: none;
  border-radius: 10px;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;

  @keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }
`;

export const ModalLock = styled.span`
  color: white;
  font-size: 28px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const ModalTitle = styled.div`
  margin-bottom: 10px;
  padding: 5px 16px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: darkblue;
  color: white;
`;

export const ContactModalTitle = styled.div`
  margin-bottom: 10px;
  padding: 5px 16px;
  text-align: center;
  display: flex;
  justify-content: space-around;
  background-color: #252;
  color: white;
`;

export const ModalBody = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 2px 16px;
`;

export const YesButton = styled.div`
  color: white;
  background-color: darkblue;
  border-radius: 5px;
  padding: 5px 10px;
  border: none;
  &:hover {
    cursor: pointer;
    color: darkblue;
    background-color: white;
    border: 1px solid darkblue;
  }
`;

export const NoButton = styled.div`
  color: white;
  background-color: orange;
  border-radius: 5px;
  padding: 5px 10px;
  border: none;
  &:hover {
    cursor: pointer;
    color: orange;
    background-color: white;
    border: 1px solid orange;
  }
`;

export const SpanTelEmail = styled.span`
  color: #000;
  margin-top: 10px;
`;

export const SpanContatos = styled.span`
  color: #fff;
  /* margin-top: 10px; */
  background-color: #353;
  padding: 5px;
`;

export const DivContatos = styled.div`
  border: 1px solid #353;
  padding: 5px;
`;

export const DivContact = styled.div`
  background-color: #ada;
  padding: 5px 15px;
  margin-top: 5px;
  border-radius: 15px;
  border: 1px solid #575;
`;

export const SpanContact = styled.span`
  color: #000;
`;

export const DivContatosTitulo = styled.div`
  margin-top: 10px;
  background-color: #353;
  padding: 5px 15px;
  display: flex;
  justify-content: space-between;
`;

export const ButtonExcluir = styled.button`
  margin-top: 30px;
  width: 150px;
  height: 30px;
  align-self: center;
`;

export const ConfirmRemoveModal = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalRemoveMaterial = styled.div`
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding-bottom: 10px;
  border: none;
  border-radius: 10px;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;

  @keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }
`;

export const ModalRemoveTitle = styled.div`
  margin-bottom: 10px;
  padding: 5px 16px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: darkblue;
  color: white;
`;

export const ModalRemoveBody = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2px 16px;
`;

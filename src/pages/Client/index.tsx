import { useEffect } from "react";
import RegisterModal from "../../components/RegisterModal";
import { api, useClient } from "../../contexts/ClientsProvider";
import {
  Main,
  DivTitle,
  ButtonAdd,
  DivClients,
  DivOneClient,
  ConfirmModal,
  ModalMaterial,
  ModalTitle,
  ContactModalTitle,
  ModalLock,
  ModalBody,
  SpanTelEmail,
  SpanContatos,
  DivContatos,
  DivContact,
  SpanContact,
  DivContatosTitulo,
} from "./style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterContactModal from "../../components/RegisterContactModal copy";

const Client = () => {
  const {
    clients,
    setClients,
    contacts,
    setContacts,
    displayModal,
    setDisplayModal,
    displayContactModal,
    setDisplayContactModal,
    currentClient,
    setCurrentClient,
    currentContacts,
    setCurrentContacts,
    currentContact,
    setCurrentContact,
    handleClientClick,
    handleContactClick,
    displayRegisterModal,
    setDisplayRegisterModal,
    handleNewClientClick,
    getClients,
    displayRegisterContactModal,
    setDisplayRegisterContactModal,
  } = useClient();

  useEffect(() => {
    getClients();
  }, []);

  return (
    <Main>
      {displayRegisterModal && <RegisterModal />}
      {displayModal && (
        <ConfirmModal
          onClick={(e) =>
            e.target === e.currentTarget && setDisplayModal(false)
          }
        >
          <ModalMaterial>
            <ModalTitle>
              <h2>{currentClient?.name}</h2>
              <ModalLock onClick={() => setDisplayModal(false)}>
                &times;
              </ModalLock>
            </ModalTitle>
            <ModalBody>
              <SpanTelEmail>
                <b>Email: </b>
                {currentClient.email}
              </SpanTelEmail>
              <SpanTelEmail>
                <b>Telefone: </b> {currentClient.phone}
              </SpanTelEmail>
              <DivContatosTitulo>
                <SpanContatos>Contatos</SpanContatos>
                <ButtonAdd onClick={() => setDisplayRegisterContactModal(true)}>
                  +
                </ButtonAdd>
              </DivContatosTitulo>
              <DivContatos>
                {currentContacts.map((contact, i) => {
                  return (
                    <DivContact
                      key={i}
                      onClick={() => handleContactClick(contact)}
                    >
                      <SpanContact>{contact.name}</SpanContact>
                    </DivContact>
                  );
                })}
              </DivContatos>
              {/* <YesButton>Sim</YesButton>
              <NoButton onClick={() => setDisplayModal(false)}>Não</NoButton> */}
            </ModalBody>
          </ModalMaterial>
        </ConfirmModal>
      )}

      {displayRegisterContactModal && <RegisterContactModal />}

      {displayContactModal && (
        <ConfirmModal
          onClick={(e) =>
            e.target === e.currentTarget && setDisplayContactModal(false)
          }
        >
          <ModalMaterial>
            <ContactModalTitle>
              <h2>{currentContact?.name}</h2>
              <ModalLock onClick={() => setDisplayContactModal(false)}>
                &times;
              </ModalLock>
            </ContactModalTitle>
            <ModalBody>
              <SpanTelEmail>
                <b>Email: </b>
                {currentContact.email}
              </SpanTelEmail>
              <SpanTelEmail>
                <b>Telefone: </b> {currentContact.phone}
              </SpanTelEmail>
              {/* <YesButton>Sim</YesButton>
              <NoButton onClick={() => setDisplayModal(false)}>Não</NoButton> */}
            </ModalBody>
          </ModalMaterial>
        </ConfirmModal>
      )}

      <DivTitle>
        <span>Clientes</span>
        <ButtonAdd onClick={() => handleNewClientClick()}>+</ButtonAdd>
      </DivTitle>
      <DivClients>
        {clients.map((client, i) => {
          return (
            <DivOneClient key={i} onClick={() => handleClientClick(client)}>
              <span>{client.name}</span>
              <span>{client.email}</span>
            </DivOneClient>
          );
        })}
      </DivClients>
      <ToastContainer />
    </Main>
  );
};

export default Client;

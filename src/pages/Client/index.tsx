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
  ButtonExcluir,
  YesButton,
  NoButton,
  ConfirmRemoveModal,
  ModalRemoveMaterial,
  ModalRemoveTitle,
  ModalRemoveBody,
} from "./style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterContactModal from "../../components/RegisterContactModal copy";

const Client = () => {
  const {
    clients,
    displayModal,
    setDisplayModal,
    displayContactModal,
    setDisplayContactModal,
    currentClient,
    currentContacts,
    currentContact,
    handleClientClick,
    handleContactClick,
    displayRegisterModal,
    handleNewClientClick,
    getClients,
    displayRegisterContactModal,
    setDisplayRegisterContactModal,
    displayConfirmRemoveModal,
    setDisplayConfirmRemoveModal,
    removeClient,
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
              <ButtonExcluir onClick={() => setDisplayConfirmRemoveModal(true)}>
                Excluir Cliente
              </ButtonExcluir>
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

      {displayConfirmRemoveModal && (
        <ConfirmRemoveModal
          onClick={(e) =>
            e.target === e.currentTarget && setDisplayConfirmRemoveModal(false)
          }
        >
          <ModalRemoveMaterial>
            <ModalRemoveTitle>
              <h2>Tem certeza que deseja excluir {currentClient.name}?</h2>
              <ModalLock onClick={() => setDisplayConfirmRemoveModal(false)}>
                &times;
              </ModalLock>
            </ModalRemoveTitle>
            <ModalRemoveBody>
              <YesButton onClick={() => removeClient()}>Sim</YesButton>
              <NoButton onClick={() => setDisplayConfirmRemoveModal(false)}>
                Não
              </NoButton>
            </ModalRemoveBody>
          </ModalRemoveMaterial>
        </ConfirmRemoveModal>
      )}
      <ToastContainer />
    </Main>
  );
};

export default Client;

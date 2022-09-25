import { createContext, useState, useContext, ReactNode } from "react";

import axios from "axios";
import { toast } from "react-toastify";
export const api = axios.create({
  baseURL: "http://localhost:3000/",
});

interface ClientsProviderProps {
  children: ReactNode;
}

export interface IClient {
  id: string;
  name: string;
  email: string;
  phone: string;
  contacts: Array<IContact>;
}

export interface IClientRegister {
  name: string;
  email: string;
  phone: string;
}

export interface IContact {
  id: string;
  client_id: number;
  name: string;
  email: string;
  phone: string;
}

export interface IContactRegister {
  name: string;
  email: string;
  phone: string;
}

interface ClientsProviderData {
  clients: Array<IClient>;
  setClients: (clients: Array<IClient>) => void;
  contacts: Array<IContact>;
  setContacts: (contacts: Array<IContact>) => void;
  displayModal: boolean;
  setDisplayModal: (displayModal: boolean) => void;
  displayContactModal: boolean;
  setDisplayContactModal: (displayContactModal: boolean) => void;
  currentClient: IClient;
  setCurrentClient: (currentClient: IClient) => void;
  currentContacts: Array<IContact>;
  setCurrentContacts: (currentContacts: Array<IContact>) => void;
  currentContact: IContact;
  setCurrentContact: (currentContact: IContact) => void;
  handleClientClick: (client: IClient) => void;
  handleContactClick: (contact: IContact) => void;
  displayRegisterModal: boolean;
  setDisplayRegisterModal: (displayRegisterModal: boolean) => void;
  handleNewClientClick: () => void;
  clientRegister: (data: IClientRegister) => void;
  getClients: () => void;
  displayRegisterContactModal: boolean;
  setDisplayRegisterContactModal: (
    displayRegisterContactModal: boolean
  ) => void;
  contactRegister: (data: IContactRegister, clientId: string) => void;
  displayConfirmRemoveModal: boolean;
  setDisplayConfirmRemoveModal: (displayConfirmRemoveModal: boolean) => void;
  removeClient: () => void;
}

const ClientsContext = createContext<ClientsProviderData>(
  {} as ClientsProviderData
);

const useClient = () => {
  const context = useContext(ClientsContext);

  return context;
};

const ClientsProvider = ({ children }: ClientsProviderProps) => {
  function getClients() {
    api
      .get("/clients")
      .then((response) => {
        const newClients = response.data;
        setClients(response.data);

        const newContacts = newClients.find(
          (client: IClient) => client.id === currentClient.id
        ).contacts;

        setCurrentContacts(newContacts);
      })
      .catch((response) => console.log(response));
  }

  const [clients, setClients] = useState([
    {
      id: "dhghvher",
      name: "José da Silva",
      email: "jose@mail.com",
      phone: "999988888",
      contacts: [
        {
          id: "asbt",
          client_id: 1,
          name: "Maria do Rosário",
          email: "maria@mail.com",
          phone: "97775555",
        },
        {
          id: "83838",
          client_id: 1,
          name: "Aldo Beraldo",
          email: "aldo@mail.com",
          phone: "98443333",
        },
      ],
    },
    {
      id: "asdad",
      name: "Maria do Rosário",
      email: "maria@mail.com",
      phone: "97775555",
      contacts: [
        {
          id: "bttr",
          client_id: 1,
          name: "Maria do Rosário",
          email: "maria@mail.com",
          phone: "97775555",
        },
        {
          id: "dvb",
          client_id: 1,
          name: "Aldo Beraldo",
          email: "aldo@mail.com",
          phone: "98443333",
        },
      ],
    },
  ]);

  const clientRegister = (data: IClientRegister) => {
    api
      .post("/clients/", data)
      .then((response) => {
        toast.success("Cliente cadastrado!");
        setDisplayRegisterModal(false);

        getClients();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Algo errado ocorreu!");
      });
  };

  const removeClient = () => {
    api
      .delete(`/clients/${currentClient.id}`)
      .then((response) => {
        toast.success("Cliente Removido!");
        setDisplayConfirmRemoveModal(false);
        setDisplayModal(false);

        getClients();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Algo errado ocorreu!");
      });
  };

  const contactRegister = (data: IContactRegister, clientId: string) => {
    api
      .post(`/contacts/${clientId}`, data)
      .then((response) => {
        toast.success("Contato cadastrado!");
        setDisplayRegisterContactModal(false);
        getClients();
        setCurrentContacts(currentClient.contacts);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Algo errado ocorreu!");
      });
  };

  const [contacts, setContacts] = useState([
    {
      id: "asda",
      client_id: 1,
      name: "Maria do Rosário",
      email: "maria@mail.com",
      phone: "97775555",
    },
    {
      id: "asdasd",
      client_id: 1,
      name: "Aldo Beraldo",
      email: "aldo@mail.com",
      phone: "98443333",
    },
    {
      id: "ddve",
      client_id: 2,
      name: "José da Silva",
      email: "jose@mail.com",
      phone: "999988888",
    },
    {
      id: "berd",
      client_id: 2,
      name: "Aldo Beraldo",
      email: "aldo@mail.com",
      phone: "98443333",
    },
  ]);

  const [displayModal, setDisplayModal] = useState(false);
  const [displayContactModal, setDisplayContactModal] = useState(false);
  const [currentClient, setCurrentClient] = useState(clients[0]);
  const [currentContacts, setCurrentContacts] = useState(contacts);
  const [currentContact, setCurrentContact] = useState(contacts[0]);
  const [displayRegisterModal, setDisplayRegisterModal] = useState(false);
  const [displayConfirmRemoveModal, setDisplayConfirmRemoveModal] =
    useState(false);

  const [displayRegisterContactModal, setDisplayRegisterContactModal] =
    useState(false);

  function handleNewClientClick() {
    setDisplayRegisterModal(true);
    setCurrentContacts([]);
  }

  function handleClientClick(client: IClient) {
    setCurrentClient(client);
    console.log(client.contacts);
    setCurrentContacts(client.contacts);
    setDisplayModal(true);
  }

  function handleContactClick(contact: IContact) {
    setCurrentContact(contact);
    setDisplayContactModal(true);
  }

  return (
    <ClientsContext.Provider
      value={{
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
        clientRegister,
        getClients,
        displayRegisterContactModal,
        setDisplayRegisterContactModal,
        contactRegister,
        displayConfirmRemoveModal,
        setDisplayConfirmRemoveModal,
        removeClient,
      }}
    >
      {children}
    </ClientsContext.Provider>
  );
};

export { ClientsProvider, useClient };

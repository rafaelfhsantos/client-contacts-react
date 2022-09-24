import { useClient } from "../../contexts/ClientsProvider";

import {
  Modal,
  ModalMaterial,
  ModalTitle,
  ModalLock,
  ModalBody,
  SpanTelEmail,
  DivContatosTitulo,
  SpanContatos,
  DivContatos,
  DivContact,
  SpanContact,
  Input,
  ButtonAdd,
  DivSalvarCancelar,
  YesButton,
  NoButton,
  SpanAddInfo,
  FormModal,
  ErrorSpan,
} from "./style";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  phone: string;
};

const RegisterModal = () => {
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
    setDisplayRegisterModal,
    clientRegister,
  } = useClient();

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    email: yup.string().required("Email é obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(formSchema),
    // defaultValues: isEditting && {
    //   name: actualEvent.name,
    //   date: actualEvent.email,
    // },
  });

  const onSubmitFunction: SubmitHandler<FormValues> = (data) => {
    // console.log(data);
    clientRegister(data);
  };

  return (
    <Modal
      onClick={(e) =>
        e.target === e.currentTarget && setDisplayRegisterModal(false)
      }
    >
      <ModalMaterial>
        <ModalTitle>
          <h2>Novo Cliente</h2>
          <ModalLock onClick={() => setDisplayRegisterModal(false)}>
            &times;
          </ModalLock>
        </ModalTitle>
        <ModalBody>
          <FormModal onSubmit={handleSubmit(onSubmitFunction)}>
            <SpanTelEmail>
              <b>Nome: </b>
            </SpanTelEmail>
            {errors.name && <ErrorSpan>{errors.name.message}</ErrorSpan>}
            <Input placeholder={"Nome"} {...register("name")} />
            <SpanTelEmail>
              <b>Email: </b>
            </SpanTelEmail>
            {errors.email && <ErrorSpan>{errors.email.message}</ErrorSpan>}
            <Input placeholder={"Email"} {...register("email")} />
            <SpanTelEmail>
              <b>Telefone: </b>
            </SpanTelEmail>
            <Input placeholder={"Telefone"} {...register("phone")} />
            {/* <DivContatosTitulo>
              <SpanContatos>Contatos</SpanContatos>
              <ButtonAdd>+</ButtonAdd>
            </DivContatosTitulo>
            <DivContatos>
              {currentContacts.length === 0 && (
                <SpanAddInfo>
                  Clique em '+' para adicionar um contato
                </SpanAddInfo>
              )}
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
            </DivContatos> */}
            <DivSalvarCancelar>
              <YesButton type={"submit"}>Salvar</YesButton>
              <NoButton onClick={() => setDisplayRegisterModal(false)}>
                Cancelar
              </NoButton>
            </DivSalvarCancelar>
          </FormModal>
        </ModalBody>
      </ModalMaterial>
    </Modal>
  );
};

export default RegisterModal;

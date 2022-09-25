import { useClient } from "../../contexts/ClientsProvider";

import {
  Modal,
  ModalMaterial,
  ModalTitle,
  ModalLock,
  ModalBody,
  SpanTelEmail,
  Input,
  DivSalvarCancelar,
  YesButton,
  NoButton,
  FormModal,
} from "./style";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  phone: string;
};

const RegisterContactModal = () => {
  const { currentClient, setDisplayRegisterContactModal, contactRegister } =
    useClient();

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
  });

  const onSubmitFunction: SubmitHandler<FormValues> = (data) => {
    // console.log(data);
    contactRegister(data, currentClient.id);
  };

  return (
    <Modal
      onClick={(e) =>
        e.target === e.currentTarget && setDisplayRegisterContactModal(false)
      }
    >
      <ModalMaterial>
        <ModalTitle>
          <h2>Novo Contato</h2>
          <ModalLock onClick={() => setDisplayRegisterContactModal(false)}>
            &times;
          </ModalLock>
        </ModalTitle>
        <ModalBody>
          <FormModal onSubmit={handleSubmit(onSubmitFunction)}>
            <SpanTelEmail>
              <b>Nome: </b>
            </SpanTelEmail>
            <Input placeholder={"Nome"} {...register("name")} />
            <SpanTelEmail>
              <b>Email: </b>
            </SpanTelEmail>
            <Input placeholder={"Email"} {...register("email")} />
            <SpanTelEmail>
              <b>Telefone: </b>
            </SpanTelEmail>
            <Input placeholder={"Telefone"} {...register("phone")} />
            <DivSalvarCancelar>
              <YesButton type={"submit"}>Salvar</YesButton>
              <NoButton onClick={() => setDisplayRegisterContactModal(false)}>
                Cancelar
              </NoButton>
            </DivSalvarCancelar>
          </FormModal>
        </ModalBody>
      </ModalMaterial>
    </Modal>
  );
};

export default RegisterContactModal;

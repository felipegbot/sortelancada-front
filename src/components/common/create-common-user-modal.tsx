import {
  Modal,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import { Card } from "@nextui-org/card";

interface CreateCommonUserModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function CreateCommonUserModal({
  isOpen,
  closeModal,
}: CreateCommonUserModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleConfirm = () => {
    console.log(name, phone);
    closeModal();
  };

  return (
    <Card isBlurred>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        backdrop="blur"
        placement="center"
        className="bg-black/50"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <span>Cadastro e Login</span>
              </ModalHeader>
              <ModalBody>
                <Input
                  value={name}
                  onValueChange={setName}
                  type="text"
                  label="Nome completo"
                />
                <Input
                  value={phone}
                  onValueChange={setPhone}
                  type="text"
                  label="Telefone"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancelar
                </Button>
                <Button color="primary" onPress={handleConfirm}>
                  Entrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </Card>
  );
}

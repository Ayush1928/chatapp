import { useLazyQuery } from "@apollo/client";
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Text, Stack, Input } from "@chakra-ui/react";
import { useState } from "react";
import UserOperations from "../../../../graphql/operations/user";
import { SearchUsersData, SearchUsersInput } from "../../../../util/types";

interface IConversationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConversationModal: React.FunctionComponent<IConversationModalProps> = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState("");
  const [searchUsers, { data, loading, error }] = useLazyQuery<SearchUsersData, SearchUsersInput>(UserOperations.Queries.searchUsers)
  console.log(data);
  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();
    searchUsers({ variables: { username } });
  }
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent pb={4}>
          <ModalHeader textAlign={"center"}>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={onSearch}>
              <Stack spacing={4}>
                <Input placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} />
                <Button type="submit" disabled={!username} isLoading={loading}>Search</Button>
              </Stack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ConversationModal;

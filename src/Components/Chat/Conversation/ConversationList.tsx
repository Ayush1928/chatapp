import { Box, Text } from "@chakra-ui/react";
import { Session } from "next-auth";
import ConversationModal from "./Modal/ConverstationModal";
import { useState } from "react";

interface IConversationListProps {
    session: Session
}

const ConversationList: React.FunctionComponent<IConversationListProps> = ({ session }) => {
    const [isOpen, setIsOpen] = useState(false);
    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);

    return (
        <Box width={"100%"}>
            <Box py={2} px={4} mb={4} bg="gray.600" borderRadius={6} cursor={"pointer"} onClick={onOpen}>
                <Text textAlign={"center"} fontWeight={600}>Find or start a conversation</Text>
            </Box>
            <ConversationModal isOpen={isOpen} onClose={onClose} />
        </Box>
    );
};

export default ConversationList;

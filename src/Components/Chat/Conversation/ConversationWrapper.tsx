import { Box } from "@chakra-ui/react";
import { Session } from "next-auth";
import ConversationList from "./ConversationList";

interface IConversationWrapperProps {
    session: Session
}

const ConversationWrapper: React.FunctionComponent<IConversationWrapperProps> = ({ session }) => {
    return (
        <Box width={{ base: "100%", md: "400px" }} bg={"gray.800"} py={6} px={4}  >
            <ConversationList session={session} />
        </Box>
    );
};

export default ConversationWrapper;

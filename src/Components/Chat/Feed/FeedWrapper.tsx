import { Button } from "@chakra-ui/react";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";

interface IFeedWrapperProps {
    session: Session;
}

const FeedWrapper: React.FunctionComponent<IFeedWrapperProps> = ({ session }) => {
    return (
        <div>FeedWrapper
            <Button onClick={()=>signOut()}>Log out</Button>
        </div>
        
    );
};

export default FeedWrapper;

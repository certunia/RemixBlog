import { useParams, Link } from "@remix-run/react";
import Title from "~/components/Title";
import Button from "~/components/Button";

function Post() {
    const params = useParams();
    const postId = String(params.postId);

    return (
        <>
            <Title text={postId}>
                <Button to='/posts' text='←back'/>
            </Title>
        </>
    )
}

export default Post;

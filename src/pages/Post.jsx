import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import configService from "../appwrite/config";
import storageService from "../appwrite/storage";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";


export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;




    useEffect(() => {
        const fetchPost = async () => {
            try {
                if (slug) {
                    const post = await configService.getPost(slug);
                    if (post) {
                        setPost(post);
                    } else {
                        navigate("/");
                    }
                } else {
                    navigate("/");
                }
            } catch (error) {
                console.error("Error fetching post:", error);
                // Handle error as needed, e.g., redirecting to an error page
            }
        };

        fetchPost();
    }, [slug, navigate]);


    const deletePost = async () => {
        try {
            const status = await configService.deletePost(post.$id);
            if (status) {
                await storageService.deleteFile(post.featuredImage);
                navigate("/");
            }
        } catch (error) {
            console.error("Error deleting post:", error);
            // Handle error as needed, e.g., showing an error message
        }
    };


    return post ? (
        <div className="py-8 mt-20">
            <Container>
                <div className="w-full flex justify-center mb-4 relative   rounded-xl p-2">
                    <img
                        src={storageService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3 px-3 py-2 text-[18px] font-semibold">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost} className="px-3 py-2 text-[18px] font-semibold">
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                <div className="browser-css">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null;
}
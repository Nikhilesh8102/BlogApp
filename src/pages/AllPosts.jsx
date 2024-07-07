import { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";
//import { Query } from 'appwrite';
import { useSelector } from 'react-redux';

function AllPosts() {
    const [posts, setPosts] = useState([]);
    const userId = useSelector(state => state.auth.userData.$id);
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                if (userId) {
                    const posts = await appwriteService.getPosts([]);
                    if (posts && posts.documents) {
                        const filteredPosts = posts.documents.filter(post => {
                            return post.userId === userId || post.status === 'active';
                        });
                        setPosts(filteredPosts);
                    }
                }
            } catch (error) {
                console.error('Failed to fetch posts:', error);
            }
        };

        fetchPosts();
    }, [userId]); // Add userId as a dependency
    console.log(posts);

    return (
        <div className='w-full py-8 mt-[53px] min-h-[58vh] '>
            <Container>
                <div className=' flex flex-wrap justify-center lg:justify-start'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-[300px] shrink-0'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts
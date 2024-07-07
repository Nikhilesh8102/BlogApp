import { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config";
// import authService from "../appwrite/auth";
import { Container, PostCard } from '../components'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    const isLoggedIn = useSelector(state => state.auth.status);
    const navigate = useNavigate();




    useEffect(() => {
        (async function fetchPosts() {
            try {
                //const loggedIn = await authService.getCurrentUser();

                if (isLoggedIn) {
                    const response = await appwriteService.getPosts();
                    if (response && response.documents) {
                        setPosts(response.documents);
                    }
                }
                else {
                    setPosts([]);
                }

            } catch (err) {
                setError('Failed to fetch posts.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        })();
    }, [isLoggedIn]);

    if (loading) {
        return (
            <div className="w-full py-8 mt-20 text-center min-h-[60vh]   ">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Loading posts...
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full py-8 mt-20 text-center min-h-[60vh] ">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                {error}
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }


    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-20 text-center min-h-[54.3vh] ">
                <Container>
                    <div className="flex flex-wrap  ">
                        <div className="p-2 w-full">
                            <h1 onClick={() => { navigate('/login') }} className="text-2xl font-bold hover:text-gray-500 hover:cursor-pointer">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8 min-h-[58vh] mt-[53px]  '>
            <Container>
                <div className=' flex flex-wrap gap-6 justify-center lg:justify-start '>
                    {posts.map((post) => (
                        <div key={post.$id} className=' w-[300px] shrink-0  '>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home
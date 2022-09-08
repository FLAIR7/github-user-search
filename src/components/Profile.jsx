import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import LoadingSpinner from "./spinner/LoadingSpinner";

const BASE_URL = "https://api.github.com/user/";

export const Profile = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        setLoad(true);
        async function getUserDetails() {
            try {
                const response = await fetch(`${BASE_URL}${id}`);
                const data = await response.json();
                console.log(data);

                if(data){
                    const {name, login, avatar_url, html_url,location, type} = data;
                    const newProfile = {
                        name: name,
                        login: login,
                        avatar_url: avatar_url,
                        html_url: html_url,
                        location: location,
                        type: type
                    };
                    setUser(newProfile);
                } else {
                    setUser(null);
                }
                setLoad(false);
            } catch(error) {
                console.log(error);
                setLoad(false);
            }
        }
        getUserDetails();
    }, [id])

    if(load) return <LoadingSpinner/>

    return ( 
        <>
            <div className="wh-100 mx-auto lg:w-10/12">
                <div className="mb-4">
                    <Link to="/" className='btn btn-ghost'>Back to Search</Link>
                </div>

                <div className="grid grid-cols-1 x1:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
                    <div className="custom-card-image mb-6 md:mb-0">
                        <div className="rounded-lg shadow-x1 image-full">
                            <figure>
                                <img src={user?.avatar_url} alt="profile"/>
                            </figure>
                            <div className="card-body justify-end">
                                <h2 className="card-title mb-0">
                                    {user?.name}
                                </h2>
                                <p>{user?.login}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2">
                        <div className="mb-6">
                            <h1 className="text-3x1 card-title"> 
                                {user?.name}
                                <div className="ml-2 mr-1 badge badge-success">
                                    {user?.type}
                                </div>
                            </h1>
                            <p></p>
                            <div className="mt-4 card-actions">
                                <a href={user?.html_url} target='_blank' rel="noreferrer" className='btn btn-outline'>
                                    Visit Github Profile
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
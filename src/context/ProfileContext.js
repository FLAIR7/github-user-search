import React, { useContext, useState, useEffect, useCallback } from "react";

const ProfileContext = React.createContext();

export function useProfile(){
    return useContext(ProfileContext);
}

const BASE_URL = "https://api.github.com/search/"

export function ProfileProvider({children}){
    const [userInput, setUserInput] = useState("alek");
    const [user, setUser] = useState([]);
    const [load, setLoad] = useState(false);
    const [resultTitle, setResultTitle] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const fetchUsers = useCallback(async() => {
        setLoad(true);
        try {
            user.length = 0;
            const response = await fetch(`${BASE_URL}users?q=${userInput}&page=${currentPage}&per_page=54`, {cache: "no-cache"});
            const data = await response.json();
            const docs = data.items;
            
            if(docs) {
                const newUser = docs.slice(0, 54).map((singleUser) => {
                    const {avatar_url, login, id} = singleUser;

                    return {
                        id: id,
                        avatar_url: avatar_url,
                        login: login
                    }
                });

                setUser(newUser);

                if(newUser.length > 1) {
                    setResultTitle("Your Search Result");
                } else {
                    setResultTitle("No Search Result Found!");
                }
            } else {
                setUser([]);
                setResultTitle("No Search Result Found!");
            }
            setLoad(false);
        } catch(error) {
            console.log(error);
            alert('API rate limit exceeded')
            setLoad(false);
        } 
    }, [userInput, user, load]);

    const getUserInput = () => {
        return userInput ? userInput : "";
    }

    const increasePage = () => {
        setCurrentPage(current => current + 1);
        fetchUsers();
    }

    const decreasePage = () => {
        setCurrentPage(current => Math.max(0, current - 1));
        fetchUsers();
    }

    useEffect(() => {
        fetchUsers();
        console.log(currentPage);
    }, [userInput, currentPage]);

    return (
        <ProfileContext.Provider value={{
            fetchUsers, 
            user,
            userInput,
            setUserInput,
            load,
            resultTitle,
            currentPage,
            decreasePage,
            setUser,
            setLoad,
            getUserInput, 
            increasePage}}
        >
            {children}
        </ProfileContext.Provider>
    )

}

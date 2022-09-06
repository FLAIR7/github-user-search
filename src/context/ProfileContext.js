import React, { useContext, useState, useEffect, useCallback } from "react";

const ProfileContext = React.createContext();

export function useProfile(){
    return useContext(ProfileContext);
}

const BASE_URL = "https://api.github.com/search/"

export function ProfileProvider({children}){
    const [userInput, setUserInput] = useState("alek");
    const [user, setUser] = useState([]);
    const [load, setLoad] = useState(true);
    const [resultTitle, setResultTitle] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    //let currentPage = 1;

    const handleProfileChange =  async (e) => {
        let value = e.target.value;
        if(value || value.replace(/\s/g, '').length) setUserInput(value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        if(userInput){
            currentPage = 1;
            fetchUsers();
            setLoad(true);
        }
    }

    const fetchUsers = useCallback(async() => {
        setLoad(true);
        try {
            user.length = 0;
            const response = await fetch(`${BASE_URL}users?q=${userInput}&page=${currentPage}&per_page=20`, {cache: "no-cache"});
            const data = await response.json();
            const docs = data.items;
            
            if(docs) {
                const newUser = docs.slice(0, 20).map((singleUser) => {
                    const {avatar_url, login} = singleUser;

                    return {
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
            // setLoad(false);
        } 
    }, [userInput, user, load]);

    const getUserInput = () => {
        return userInput ? userInput : "";
    }

    const increasePage = () => {
        currentPage += 1;
        fetchUsers();
    }

    const decreasePage = () => {
        currentPage -= 1;
        fetchUsers();
    }

    useEffect(() => {
        fetchUsers();
    }, [userInput])

    return (
        <ProfileContext.Provider value={{
            fetchUsers, 
            user,
            userInput,
            setUserInput,
            load,
            resultTitle,
            currentPage,
            handleProfileChange, 
            handleClick,
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

import React, { useContext, useState, useCallback, useEffect  } from "react";

const ProfileContext = React.createContext(null);

export function useProfile(){
    return useContext(ProfileContext);
}

export function ProfileProvider({children}){
    const [userInput, setUserInput] = useState("");
    const [user, setUser] = useState([]);
    // const [currentPage, setCurrentPage] = useState(1);
    const [load, setLoad] = useState(false);
    const [total, setTotal] = useState(0);

    let currentPage = 1;

    const handleProfileChange =  (e) => {
        let value = e.target.value;
        if(value || value.replace(/\s/g, '').length) setUserInput(value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        if(userInput){
            currentPage = 1;
            loadData();
            setLoad(true);
        }
    }

    const loadData = () => {
        user.length = 0;
        fetch(`https://api.github.com/search/users?q=${userInput}&page=${currentPage}&per_page=42`, {cache: "no-cache"})
        .then(data => data.json())
        .then(json => {
            json.items.map(a => {
                 user.push(a);
            })
            setUser(json.items);

            setTotal(json.total_count);

        })
    }

    function getUserInput(){
        return userInput ? userInput : "";
    }

    const increasePage = () => {
        currentPage = currentPage + 1;
        loadData();
    }

    const decreasePage = () => {
        currentPage = currentPage - 1;
        loadData();
    }

    return (
        <ProfileContext.Provider value={{
            loadData, 
            user,
            userInput,
            load,
            total,
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

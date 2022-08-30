import React, { useContext, useState, useCallback, useEffect } from "react";

const ProfileContext = React.createContext();

export function useProfile(){
    return useContext(ProfileContext);
}

export function ProfileProvider({children}){
    const [userInput, setUserInput] = useState("");
    const [user, setUser] = useState([]);
    const [load, setLoad] = useState(false);
    const [pages, setPages] = useState([]);
    const [total, setTotal] = useState(0);
    const [limit, setLimit] = useState(100);
    const [currentPage, setCurrentPage] = useState(1);

    function handleProfileChange(e){
        let value = e.target.value;
        if(value || value.replace(/\s/g, '').length) setUserInput(value);
    }

    function handleClick(e){
        e.preventDefault();
        if(userInput){
            loadData();
            setLoad(true);
        }
    }

    const loadData = useCallback(async () => {
        user.length = 0;
        await fetch(`https://api.github.com/search/users?q=${userInput}&per_page=21`)
        .then(data => data.json())
        .then(json => {
            json.items.map(a => {
                 user.push(a);
            })

            setTotal(json.total_count);
            console.log(user);

            const totalPages = Math.ceil(json.total_count / limit);
            console.log(totalPages);
            const arrayPages = [];
            for(let i = 1; i <= totalPages; i++) {
                arrayPages.push(i);
            }

            setPages(arrayPages);
            
        })
    }, [pages, user, userInput, total, limit])

    function getUserInput(){
        return userInput ? userInput : "";
    }

    function increasePage(){
        setPages(pages + 1);
        loadData();
    }

    return (
        <ProfileContext.Provider value={{
            loadData, 
            user,
            load,
            total,
            pages,
            handleProfileChange, 
            handleClick,
            getUserInput, 
            increasePage}}
        >
            {children}
        </ProfileContext.Provider>
    )

}
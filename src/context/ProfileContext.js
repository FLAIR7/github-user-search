import React, { useContext, useState } from "react";

const ProfileContext = React.createContext();

export function useProfile(){
    return useContext(ProfileContext);
}

export function ProfileProvider({children}){
    const [profile, setProfile] = useState("");
    const [user, setUser] = useState([]);
    const [load, setLoad] = useState(false);

    function handleProfileChange(e){
        let value = e.target.value;
        if(value || value.replace(/\s/g, '').length) setProfile(value);
    }

    function handleClick(e){
        e.preventDefault();
        if(profile){
            loadData();
            setLoad(true);
        }
    }

    function loadData(){
        user.length = 0; // clears the array
        fetch(`https://api.github.com/search/users?q=${profile}&page?=1&per_page=10`)
            .then(data => {
                return data.json();
            })
            .then(item => {
                setProfile(item.avatar_url);
                
                item.items.map(a => {
                     user.push(a);
                })

                console.log(user);
            })
            
        // setProfile(null);
    }

    function getProfile(){
        return profile ? profile : null;
    }

    function getLoad(){
        return load ? user : false;
    }

    function getUsers(){
        return user;
    }

    return (
        <ProfileContext.Provider value={{
            loadData, handleProfileChange, handleClick,getProfile, getLoad, getUsers}}>
            {children}
        </ProfileContext.Provider>
    )

}
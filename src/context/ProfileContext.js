import React, { createContext, useContext, useState } from "react";
import { Route } from "react-router-dom";
import { Main } from "../pages/main/Main";
import { RoutePages } from "../routes/RoutePages";


const ProfileContext = React.createContext();

export function useProfile(){
    return useContext(ProfileContext);
}

export function ProfileProvider({children}){
    const [profile, setProfile] = useState("");

    function handleProfileChange(e){
        let value = e.target.value;
        if(!value  || !value.replace(/\s/g, '').length || value.length < 4) {
            console.log("Não passou");
        } else {
            setProfile(value);
        }
    }

    function handleClick(e){
        if(profile){
            loadData();
        }
    }

    function loadData(){
        
        fetch(`https://api.github.com/users/${profile}`)
            .then(data => {
                return data.json();
            })
            .then(item => {
                setProfile(item.avatar_url);
                console.log(item.avatar_url);
            })
            
            setProfile(null);
    
    }

    function getProfile(){
        return profile ? profile : null;
    }

    return (
        <ProfileContext.Provider value={{loadData, handleProfileChange, handleClick,getProfile}}>
            {children}
        </ProfileContext.Provider>
    )

}
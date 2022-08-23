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
    const [user, setUser] = useState([]);
    const [load, setLoad] = useState(false);

    function handleProfileChange(e){
        let value = e.target.value;
        if(!value  || !value.replace(/\s/g, '').length) {
            console.log("Não passou");
        } else {
            setProfile(value);
        }
    }

    function handleClick(e){
        if(profile){
            loadData();
            setLoad(true);
        }
    }

    function loadData(){
        
        fetch(`https://api.github.com/search/users?q=${profile}&page?=1&per_page=10`)
            .then(data => {
                return data.json();
            })
            .then(item => {
                setProfile(item.avatar_url);
                for(var key in item) {
                    user.push(item[key]);
                }
                console.log(user);
            })
            
        setProfile(null);
    }

    function getProfile(){
        return profile ? profile : null;
    }

    function getLoad(){
        return load ? load : false;
    }

    return (
        <ProfileContext.Provider value={{loadData, handleProfileChange, handleClick,getProfile, getLoad}}>
            {children}
        </ProfileContext.Provider>
    )

}
export function Profile({user}){
    return (
        <div>
            <img src={user.avatar_url}/>
        </div>
    )    
}
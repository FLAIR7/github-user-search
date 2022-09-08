export function Footer(){
    return (
        <div className="d-flex justify-content-around border-top" style={{height: "5vh"}}>
            <div>
                <span>View the <a className="link-success text-decoration-none" 
                href="https://github.com/FLAIR7/github-user-search">source on github</a></span>
            </div>
            <div>
                <span><a className="link-success text-decoration-none" 
                href="https://docs.github.com/pt/rest">github api</a></span>
            </div>
        </div>
    )
}
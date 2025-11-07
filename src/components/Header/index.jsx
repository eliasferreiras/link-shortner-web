import './style.css'

export default function Header() {
    return (
        <header>
            <h1>Link Shortner</h1>
            <div className="profile">
                <h2>User Name</h2>
                <i className="fa-regular fa-user"></i>
            </div>
        </header>
    )
}
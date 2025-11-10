import './style.css'

export default function CardLink({ link, deleteAction }) {

    const baseUrl = import.meta.env.VITE_REDIRECT_URL || "http://localhost:4000/"

    return (
        <div className="card-links shadow-container">
            <div className="content">
                { 
                    link.title ? (<h2>{link.title}</h2>) : (<i id="null_icon" className="fa-solid fa-ban"></i>) 
                }

                <div className="shortLink">
                    <a href={baseUrl+link.short_code}>
                        {baseUrl+link.short_code}
                    </a>
                    <button>
                        <i className="fa-solid fa-copy"></i>
                    </button>
                    
                </div>

                <div className="fullLink">
                    <i className="fa-solid fa-right-left"></i>
                    <a href={link.target_url}>
                        {link.target_url}
                    </a>
                </div>

                <div className="cardDate">
                    <i className="fa-solid fa-calendar"></i>
                    10 Nov, 2025
                </div>
            </div>

            <div className="actions">
                <button onClick={
                    () => deleteAction(link.id)
                }>
                    <i id="delete_icon" className="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    )
}
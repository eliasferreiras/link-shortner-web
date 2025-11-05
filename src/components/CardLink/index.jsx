import './style.css'

export default function CardLink({ link, deleteAction }) {

    const baseUrl = import.meta.env.VITE_REDIRECT_URL

    return (
        <div className="card-links card-grid">
            { 
                link.title ? (<h2>{link.title}</h2>) : (<i id="null_icon" className="fa-solid fa-ban"></i>) 
            }

            <a href={baseUrl+link.short_code}>
                {baseUrl+link.short_code}
            </a>

            <a href={link.target_url}>
                {link.target_url}
            </a>

            <button onClick={
                () => deleteAction(link.id)
            }>
                <i id="delete_icon" className="fa-solid fa-circle-minus"></i>
            </button>
        </div>
    )
}
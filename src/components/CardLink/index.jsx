import './style.css'
import { formatDate } from '../../helpers/dateHelper.js'

export default function CardLink({ link, deleteAction }) {

    const baseUrl = import.meta.env.VITE_REDIRECT_URL || "http://localhost:4000/"

    async function copyToClipboard() {
        try {
            await navigator.clipboard.writeText(
                baseUrl+link.short_code
            )
            alert("Link copiado!")
        } catch (error) {
            console.error("Erro ao copiar:", error)
        }
    }

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
                    <button onClick={copyToClipboard}>
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
                    { formatDate(link.created_at) }
                </div>
            </div>

            <div className="actions">
                <button onClick={deleteAction}>
                    <i id="delete_icon" className="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    )
}
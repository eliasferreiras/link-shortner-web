import './style.css'
import { useRef } from 'react'

export default function FormLink({ createAction }) {
    const titleInput = useRef()
    const targetUrlInput = useRef()

    function createLink() {
        const newLink = {
            title: titleInput.current.value,
            target_url: targetUrlInput.current.value
        }

        clearForm()
        createAction(newLink)
    }

    function clearForm() {
        titleInput.current.value = ''
        targetUrlInput.current.value = ''
    }

    return (
        <form action="#">
            <input type="text" name="title" ref={titleInput} placeholder="Título do link (opcional)" />
            <input type="url" name="target_url" ref={targetUrlInput} placeholder="URL de destino" />
            <button type="button" onClick={createLink}>
                <span>Salvar</span> <i className="fa-solid fa-download"></i>
            </button>
        </form>
    )
}
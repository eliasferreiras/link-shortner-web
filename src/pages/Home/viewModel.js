import { useState } from 'react'
import service from '../../services/service'

export default function homeViewModel() {
    const [links, setLinks] = useState([])

    async function fetchLinks() {
        try {
            const response = await service.get('/links')
            setLinks(response.data)
        } catch (error) {
            console.error('Error fetching links:', error)
        }
    }

    async function createLink(newLink) {
        try {
            const response = await service.post('/links', newLink)
            setLinks([...links, response.data])
        } catch (error) {
            console.error('Error creating link:', error)
        }
    }

    async function delteLink(id) {
        try {
            await service.delete(`/links/${id}`)
            setLinks(links.filter(link => link.id !== id))
        } catch (error) {
            console.error('Error deleting link:', error)
        }
    }

    return {
        links,
        fetchLinks,
        createLink,
        delteLink
    }
}

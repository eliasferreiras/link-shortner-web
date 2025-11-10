import './style.css'
import { useEffect } from 'react'
import homeViewModel from './viewModel'

import Header from '../../components/Header'
import CardLink from '../../components/CardLink'
import FormLink from '../../components/FormLink'

export default function Home() {

    const { 
        links,
        fetchLinks,
        createLink, 
        delteLink 
    } = homeViewModel()

    useEffect(() => {
        fetchLinks()
    }, [])

    return (
        
        <div className="container">
            <Header />

            <main>
                <h1 className="mainContent">Criar link curto</h1>
                <section className="create shadow-container mainContent">
                    <h2>Detalhes do Link</h2>
                    <FormLink createAction={createLink}/>
                </section>

                <h1 className="mainContent">Links</h1>
                <section className="links mainContent">
                    { 
                        links.map(link => {
                            return (
                                <CardLink key={link.title} link={link} deleteAction={
                                    (id) => delteLink(id)
                                }/>
                            )
                        })
                    }
                </section>
            </main>
        </div>
    )
}
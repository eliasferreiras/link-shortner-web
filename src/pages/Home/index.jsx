import './style.css'
import { useEffect } from 'react'
import homeViewModel from './viewModel'

import Header from '../../components/Header'
import LinkTitles from '../../components/LinkTitles'
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
                <h1 className="mainContent">Criar link curto:</h1>
                <section className="create shadow-container mainContent">
                    
                    <FormLink createAction={createLink}/>
                </section>

                <section className="links shadow-container mainContent">
                    { 
                        links.map(link => {
                            return (
                                <CardLink key={link.title} link={link} deleteAction={
                                    (id) => delteLink(id)
                                }/>
                            )
                        })
                    }

                    <LinkTitles />
                </section>
            </main>
        </div>
    )
}
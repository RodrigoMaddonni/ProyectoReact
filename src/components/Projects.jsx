import Project from './pages/Project.jsx'

export default function Projects({projectsJson}) {
    return (
        <>
            <div>
                <h2 className="section-title">Proyectos</h2>
                <div className="projects-grid">
                    {
                        projectsJson.map(pr =>
                            <Project
                                key={pr.id}
                                id={pr.id}
                                title={pr.title}
                                desc={pr.desc}
                                lang={pr.languages}
                                img={pr.img}
                            />
                        )
                    }
                </div>
            </div>
        </>
    )
}
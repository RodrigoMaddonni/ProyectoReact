export default function Project({id, title, desc, lang, img}) {
    return (
        <>
            <div className="project-card">
                <div className='container-text'>
                    <h3>{title}</h3>
                    <p>{desc}</p><br />
                    <h5>{lang}</h5>
                </div>
                <div className='container-image'>
                    <img src={img} alt={title} />
                </div>
            </div>
        </>
    )
}
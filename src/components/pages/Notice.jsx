export default function Project({title, desc, cat, date}) {
    return (
        <>
            <div className="project-card">
                <div className='container-text'>
                    <h3>{title}</h3>
                    <p>{desc}</p><br />
                    <div className="meta">
                        <h5>{cat}</h5>
                        <h6>{date}</h6>
                    </div>
                </div>
            </div>
        </>
    )
}
import { useState, useEffect } from "react";

import Notice from './pages/Notice.jsx';

export default function Newsletter() {
    const [notices, setNotices] = useState([]);
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);
    const [error, setError] = useState("");

    // Comprobar si ya está suscrito al cargar la página
    useEffect(() => {
        const isSubscribed = localStorage.getItem("subscribed") === "true";
        setSubscribed(isSubscribed);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación simple del email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
        setError("Correo inválido");
        return;
        }

        setError("");
        setSubscribed(true);
        localStorage.setItem("subscribed", "true");
        localStorage.setItem("email", email);
    };

    useEffect(() => {
        const fetchNoticias = async () => {
            try {
                const response = await fetch("/data/notices.json");
                if (!response.ok) throw new Error("Error al cargar el JSON");
                const data = await response.json();
                setNotices(data || []);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchNoticias();
    }, []);

    return (
        <>  
            {!subscribed ? (
                <div className="newsletter-box">
                <h2 className="section-title">Newsletter</h2>
                <input
                    type="email"
                    placeholder="Tu email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className="primary" onClick={handleSubmit}>
                    Suscribirme
                </button>
                {error && <p style={{ color: "red" }}>{error}</p>}
                </div>
            ) : (
                <div>
                    <div className="newsletter-box">
                        <h2 className="section-title">¡Gracias por suscribirte!</h2>
                        <p>Accede a nuestras noticias exclusivas:</p>
                    </div>
                    <div className="projects-grid">
                        {
                            notices.map(not =>
                                <Notice
                                    key={not.id}
                                    title={not.title}
                                    desc={not.desc}
                                    cat={not.cat}
                                    date={not.date}
                                />
                            )
                        }
                    </div>
                </div>
            )}
        </>
    );
}

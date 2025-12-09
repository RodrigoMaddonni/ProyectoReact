import { useState } from "react";

export default function Contact() {
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");

    // Validación del email
    const handleSubmit = (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            setError("Correo inválido");
            return;
        }

        setError("");
    };

    return (
        <>
            <form>
                <h2 className="section-title">Contacto</h2>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nombre"
                />
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea rows="4" placeholder="Comentario"></textarea>
                <button className="primary" onClick={handleSubmit}>
                    Enviar
                </button>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
        </>
    )
}
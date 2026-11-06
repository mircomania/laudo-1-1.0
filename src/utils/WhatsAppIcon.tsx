export function WhatsAppIcon() {
    const whatsappLink = 'https://wa.me/5218120091197?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20Laudo.';

    const handleClick = (): void => {
        window.open(whatsappLink, '_blank', 'noopener,noreferrer');
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            className="whatsapp-button"
            aria-label="Haz click para chatear con un agente por WhatsApp"
            data-link="whatsapp-btn"
        >
            <span className="whatsapp-text bold-text">WhatsApp</span>
        </button>
    );
}

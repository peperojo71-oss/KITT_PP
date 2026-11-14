function hablarComoKitt(textoParaDecir) {
    if ('speechSynthesis' in window) {
        var mensaje = new SpeechSynthesisUtterance(textoParaDecir);
        mensaje.lang = 'es-ES';
        mensaje.rate = 0.95;    // Velocidad pausada y solemne
        mensaje.pitch = 0.7;    // Tono grave metálico
        mensaje.volume = 1.0;
        
        var voces = window.speechSynthesis.getVoices();
        var vozEspanol = voces.find(function(v) {
            return v.lang.startsWith('es');
        });
        if (vozEspanol) {
            mensaje.voice = vozEspanol;
        }

        window.speechSynthesis.speak(mensaje);
    }
}

async function consultarAGemini(preguntaUsuario) {
    console.log("Enviando a Gemini:", preguntaUsuario);
    let respuestaSimulada = "Entendido. Procesando datos a través de los circuitos cibernéticos.";
    hablarComoKitt(respuestaSimulada);
}
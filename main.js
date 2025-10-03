function sendEmail() {
    // Forzar nueva ventana maximizada en cualquier tipo de pantalla
    const url = "mailto:nhugai@nhug.ai";
    openMaximized(url);
}

function callCie10Api() {
    const url = "https://cie10.nhug.net";
    openMaximized(url);
}


// Función auxiliar para abrir ventana maximizada según la pantalla del usuario
function openMaximized(url) {
    // Obtener tamaño real de la pantalla
    const screenWidth = window.screen.availWidth;
    const screenHeight = window.screen.availHeight;

    // Abrir la ventana en tamaño disponible
    window.open(
        url,
        '_blank',
        `width=${screenWidth},height=${screenHeight},left=0,top=0`
    );
}

function sendEmail() {
    // Abrir mail en una ventana de 800x800 píxeles
    const url = "mailto:nhug@nhug.ai";
    openSmall(url);
}

function callCie10Api() {
    const url = "https://cie10.nhug.ai";
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

// Nueva función para abrir una ventana de 800x800 píxeles centrada
function openSmall(url) {
    // Tamaño 800x800 píxeles, centrada
    const width = 800;
    const height = 800;
    const left = (window.screen.availWidth - width) / 2;
    const top = (window.screen.availHeight - height) / 2;

    window.open(
        url,
        '_blank',
        `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
    );
}

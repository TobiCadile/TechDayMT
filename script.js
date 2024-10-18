// Lista de usuarios y contraseñas correctas
const secretAgents = [
    { username: "agente001", password: "alpha001" },
    { username: "agente002", password: "bravo002" },
    { username: "agente003", password: "charlie003" },
    { username: "agente004", password: "delta004" },
    { username: "agente005", password: "echo005" },
    { username: "agente006", password: "foxtrot006" },
    { username: "agente007", password: "golf007" },
    { username: "agente008", password: "hotel008" },
    { username: "agente009", password: "india009" },
];

// Capturar el formulario de login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevenir que el formulario recargue la página

    // Obtener valores de usuario y contraseña del formulario
    const username = document.getElementById('username').value.trim();  // Eliminar espacios extra
    const password = document.getElementById('password').value.trim();  // Eliminar espacios extra

    console.log("Usuario ingresado:", username);
    console.log("Contraseña ingresada:", password);

    // Verificar si existe el usuario y la contraseña
    const userFound = secretAgents.find(agent => agent.username === username && agent.password === password);

    if (userFound) {
        // Si el usuario y contraseña son correctos
        console.log("Autenticación exitosa. Redirigiendo a la página secreta...");
        window.location.href = "secret.html";  // Redirigir a la página secreta
    } else {
        // Si el usuario o contraseña son incorrectos
        console.log("Fallo en la autenticación. Usuario o contraseña incorrectos.");
        alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
    }
});
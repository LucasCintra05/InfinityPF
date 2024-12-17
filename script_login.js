// Autenticação de Usuário
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simples validação de usuário e senha
    if (username === "comum" && password === "1234") {
        window.location.href = "gestor_comum.html"
        
    } else if (username === "batman" && password === "4321"){
        window.location.href = "gestor_batman.html"
        
    }else {
        document.getElementById("login-status").textContent = "Acesso negado!";
        document.getElementById("login-status").style.color = "red";
    }
});


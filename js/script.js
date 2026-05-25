const togglePassword = document.querySelector('#togglePassword');
const passwordInput = document.querySelector('#Senha');
const loginForm = document.querySelector('.form-caixa');

// 1. Lógica do Olho (Visualizar Senha)
if (togglePassword && passwordInput) {
    togglePassword.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Alterna o ícone
        this.textContent = type === 'password' ? '👁️' : '🙄';
    });
}

// 2. Lógica de Login e Transição
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão

        const nome = document.querySelector('#Nome').value;
        const senha = document.querySelector('#Senha').value;

        if (nome !== "" && senha.length >= 4) {
            window.location.href = "page.html"; 
        } else {
            alert("Por favor, preencha os dados corretamente (Senha deve ter no mínimo 4 dígitos).");
        }
    });
}

// 3. Lógica dos Ícones de Navegação
const icones = document.querySelectorAll('.icone-btn');

icones.forEach(icone => {
    icone.style.cursor = 'pointer'; 
    
    icone.addEventListener('click', () => {
        // Usa o atributo ALT que você definiu no HTML para decidir para onde ir
        if (icone.alt === "Checklist") {
            window.location.href = "checklistdemanuseio.html";
        } else if (icone.alt === "Chat") {
            window.location.href = "chat.html";
        } else if (icone.alt === "Desperdício") {
            window.location.href = "registrar_desperdicio.html";
        }
    });
});
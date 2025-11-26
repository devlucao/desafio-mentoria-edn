// Carregar usuários do localStorage
let users = JSON.parse(localStorage.getItem("users")) || [
  { id: 1, username: "admin", email: "admin@email.com", senha: "admin123" }
];

// Função para salvar usuários no localStorage
function saveUsers() {
  localStorage.setItem("users", JSON.stringify(users));
}

// Função simples de validação de email
function isValidEmail(email) {
  return email.includes("@") && email.includes(".");
}

// LÓGICA DA PÁGINA DE CADASTRO
if (document.title.includes("Cadastro")) {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Verificar se username já existe no sistema
    const userExists = users.find((user) => user.username === username);

    if (userExists) {
      alert("Username já cadastrado, tente novamente.");
      return;
    }

    // Verificar validade do e-mail
    if (!isValidEmail(email)) {
      alert("Insira um e-mail válido");
      return;
    }

    // Criar objeto do novo usuário
    const newUser = {
      id: users.length + 1,
      username: username,
      email: email,
      password: password,
    };

    // Adicionar usuário ao array e salvar
    users.push(newUser);
    saveUsers();

    alert("Cadastro realizado com sucesso!");
    form.reset();
  });
}

// LÓGICA DA PÁGINA DE LOGIN
if (document.title.includes("Login")) {
  const form = document.querySelector("form");


  form.addEventListener("submit", function (event) {
    event.preventDefault();


    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();


    // Procurar usuário no localStorage
    const foundUser = users.find((user) => user.username === username);


    if (foundUser.password !== password) {
      alert("Credenciais inválidas, tente novamente");
      return;
    }

    alert("Login realizado com sucesso!");
    form.reset();
  });
}
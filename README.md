## 📘 Funcionamento do Cadastro
Quando o usuário preenche o formulário de cadastro:
1. O sistema carrega a lista atual de usuários do localStorage.
2. Verifica se o username já existe.
3. Verifica se o email é válido.
4. Se tudo estiver correto:
- Cria um objeto com `id`, `username`, `email` e `password`.
- Armazena esse objeto no array `users`.
- Salva o array novamente no localStorage.
- Exibe: **"Cadastro realizado com sucesso!"**

## Estrutura de um usuário salvo
```json
{
"id": 1,
"username": "lucas",
"email": "lucas@email.com",
"password": "1234"
}
```

---

# 🔐 Funcionamento do Login
1. O sistema carrega todos os usuários do localStorage.
2. Busca por um usuário com o username informado.
3. Se não existir → mensagem: **"Usuário não cadastrado"**.
4. Se existir mas a senha estiver errada → **"Credenciais inválidas"**.
5. Se username + senha estiverem corretos → **"Login realizado com sucesso!"**.
---
# 💾 Como o localStorage é utilizado?
- Ao carregar o script, os usuários são carregados:
```js
let users = JSON.parse(localStorage.getItem("users")) || [];
```
- Sempre que algo é alterado, os dados são salvos:
```js
localStorage.setItem("users", JSON.stringify(users));
```
✔️ Dados permanecem mesmo fechando o navegador.  
✖️ Não existe criptografia (didático, não para produção).
---
# 🧑‍🎓 Para quem este projeto é indicado?
Este material foi desenvolvido para **estudantes iniciantes** em JavaScript que precisam aprender:
- Manipulação do DOM
- Eventos de formulário
- Validação simples
- Armazenamento local com localStorage
---
# 🧪 Possíveis extensões
Sugestões para evoluir a aplicação:
- Criptografar a senha com `CryptoJS`
- Criar página de perfil após login
- Implementar logout
- Usar módulos ES6 para organizar melhor o código
- Criar um backend real com Node.js
---
# 📝 Licença
Este projeto é de uso livre para fins educativos.

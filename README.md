# 🎁 Amigo Secreto

Uma aplicação simples e divertida para realizar sorteios de **Amigo Secreto** diretamente no navegador.  
O usuário adiciona nomes à lista e, com um clique, sorteia um amigo secreto de forma aleatória.

---

## ✨ Funcionalidades

- ➕ **Adicionar nomes** à lista através de um campo de texto
- ✅ **Validação** para impedir nomes vazios
- 👁️ **Visualização** da lista de amigos adicionados em tempo real
- 🎲 **Sorteio aleatório** de um amigo secreto
- 📱 **Interface responsiva** e amigável

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura da página |
| CSS3 | Estilização e layout responsivo |
| JavaScript (ES6+) | Lógica de adicionar e sortear amigos |

---

## 📁 Estrutura de Arquivos

```
amigo-secreto/
├── index.html      # Estrutura da página
├── style.css       # Estilização da aplicação
├── app.js          # Lógica de adicionar e sortear amigos
├── README.md       # Documentação do projeto
└── assets/
    ├── amigo-secreto.png       # Imagem do banner
    └── play_circle_outline.png # Ícone do botão sortear
```

---

## 🚀 Como Usar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Reidner-Verdino/amigo-secreto.git
   cd amigo-secreto
   ```

2. **Abra o projeto:**  
   Abra o arquivo `index.html` diretamente no navegador.

3. **Adicione os participantes:**  
   Digite o nome no campo de entrada e clique em **Adicionar**.  
   Repita para todos os participantes.

4. **Faça o sorteio:**  
   Clique em **Sortear amigo** e veja o resultado na tela!

---

## 🧠 Lógica do Projeto

### Adicionando participantes

```js
// Valida o campo e adiciona o nome ao array
function adicionarAmigo() {
    let nome = document.getElementById("amigo").value.trim();
    if (nome === "") { alert("Por favor, insira um nome."); return; }
    amigos.push(nome);
    atualizarLista();
}
```

### Sorteio aleatório

```js
// Gera um índice aleatório e exibe o nome sorteado
function sortearAmigo() {
    let indice = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indice];
    // Exibe o resultado na tela
}
```

---

## 👨‍💻 Autor

Desenvolvido por **Reidner Verdino**

---

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e distribuir.

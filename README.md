# 🛒 Alura Store Brasil — Análise de Desempenho

Projeto desenvolvido como parte do **Challenge 1 de Data Science** da [Alura](https://www.alura.com.br).

---

## 📌 Objetivo

Auxiliar o **Sr. João** a decidir qual das 4 lojas da rede Alura Store deve ser **vendida** para liberar capital para um novo empreendimento. A decisão é baseada em análise de dados reais de vendas, utilizando Python, Pandas e Matplotlib.

---

## 🗂️ Estrutura do Projeto

```
AluraStoreBrasil/
├── AluraStoreBrasil.ipynb    # Notebook principal com toda a análise
├── README.md                # Este arquivo
└── imagens/                 # Gráficos gerados (após executar o notebook)
    ├── grafico_faturamento.png
    ├── grafico_categorias.png
    ├── grafico_avaliacoes.png
    ├── grafico_top_produtos.png
    ├── grafico_dashboard.png
    ├── grafico_geo.png
    └── grafico_geo_estado.png
```

---

## 📊 Análises Realizadas

| # | Análise | Descrição |
|---|---------|-----------|
| 1 | **Faturamento Total** | Soma do valor de todas as vendas por loja |
| 2 | **Vendas por Categoria** | Contagem de produtos vendidos por categoria |
| 3 | **Avaliação Média** | Nota média dos clientes (1 a 5) por loja |
| 4 | **Produtos Mais/Menos Vendidos** | Ranking de produtos por volume de vendas |
| 5 | **Frete Médio** | Custo médio de frete por loja |
| 6 *(Extra)* | **Distribuição Geográfica** | Mapa de dispersão de vendas por coordenadas |

---

## 📈 Gráficos Gerados

- **Barras horizontais** — Faturamento total por loja
- **Barras agrupadas** — Vendas por categoria em cada loja
- **Barras + distribuição** — Avaliação média e distribuição de notas
- **Barras horizontais** — Top 10 produtos mais vendidos por loja
- **Dashboard 3-em-1** — Faturamento, frete médio e avaliação lado a lado
- **Dispersão geográfica** — Localização das vendas com intensidade por preço *(extra)*

---

## 🛠️ Tecnologias Utilizadas

| Biblioteca | Versão | Uso |
|---|---|---|
| `Python` | 3.x | Linguagem principal |
| `Pandas` | ≥ 1.3 | Manipulação e análise de dados |
| `Matplotlib` | ≥ 3.4 | Criação dos gráficos |
| `NumPy` | ≥ 1.21 | Cálculos numéricos |

---

## 🚀 Como Executar

### Opção 1 — Google Colab (recomendado)
1. Acesse [colab.research.google.com](https://colab.research.google.com)
2. Faça upload do arquivo `AluraStoreBrasil.ipynb`
3. Execute todas as células com `Runtime → Run all`

### Opção 2 — Localmente

```bash
# Clone o repositório
git clone https://github.com/Reidner-Verdino/alura-store-brasil.git
cd alura-store-brasil

# Instale as dependências
pip install pandas matplotlib numpy

# Abra o Jupyter
jupyter notebook AluraStoreBrasil.ipynb
```

---

## 🔍 Fonte dos Dados

Os dados são carregados diretamente dos arquivos CSV hospedados no repositório oficial do desafio:

```
https://raw.githubusercontent.com/alura-es-cursos/challenge1-data-science/
refs/heads/main/base-de-dados-challenge-1/loja_X.csv
```

Cada arquivo contém as seguintes colunas:

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| `Produto` | texto | Nome do produto vendido |
| `Categoria do Produto` | texto | Categoria do item |
| `Preço` | numérico | Valor de venda |
| `Frete` | numérico | Custo do frete |
| `Data da Compra` | data | Data da transação |
| `Vendedor` | texto | Nome do vendedor |
| `Local da compra` | texto | Estado (UF) do comprador |
| `Avaliação da compra` | inteiro | Nota do cliente (1–5) |
| `Tipo de pagamento` | texto | Forma de pagamento utilizada |
| `Quantidade de parcelas` | inteiro | Número de parcelas |
| `lat` | numérico | Latitude da compra |
| `lon` | numérico | Longitude da compra |

---

## ✅ Conclusão

> **Recomendação: Vender a Loja 4**

A Loja 4 apresenta o **menor faturamento**, a **pior avaliação média dos clientes** e nenhum diferencial que justifique a manutenção em detrimento de um novo empreendimento. Vender esta unidade é a decisão mais estratégica para o Sr. João.

---

## 👤 Autor

Desenvolvido por Reidner Verdino como parte do Challenge 1 — Alura | Data Science

---

*© 2026 — Projeto educacional sem fins lucrativos*

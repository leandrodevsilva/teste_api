# Sistema de Busca de Operadoras de Saúde

Este projeto consiste em uma aplicação full-stack para busca de operadoras de saúde, composta por:
- **Backend**: Servidor Python (Flask) com busca fuzzy (difusa)
- **Frontend**: Interface Vue.js para interação com o usuário
- **Documentação**: Coleção Postman para testar a API

## 📋 Visão Geral

O sistema permite buscar operadoras de saúde por:
- Nome/Razão Social
- Cidade
- UF (Unidade Federativa)

Utiliza algoritmos de similaridade para encontrar correspondências mesmo com termos parcialmente corretos.

## 🛠️ Tecnologias

- **Backend**: Python, Flask, Pandas, FuzzyWuzzy
- **Frontend**: Vue.js, HTML, CSS
- **Ferramentas**: Postman (para testes de API)

## 🚀 Como Executar

### Pré-requisitos
- Python 3.x
- Node.js (para o frontend Vue.js)
- Postman (opcional, para testar a API diretamente)

### Backend (Python)
1. Instale as dependências:
   ```bash
   pip install flask pandas fuzzywuzzy python-Levenshtein

2. Coloque o arquivo CSV (Relatorio_cadop.csv) na pasta do projeto

3. Execute o servidor: `python Servidor.py`

## Frontend (Vue.js)
Navegue até a pasta do frontend

Instale as dependências:

`npm install`

Execute a aplicação:

`npm run serve`

### Testes com Postman

Importe a coleção `Colecao_postman.json` no Postman para testar os endpoints da API.

## 📚 Documentação da API
Endpoint

`GET /buscar_operadoras`

Exemplo de Resposta

```json
Copy
[
  {
    "Razao_Social": "AMIL ASSISTENCIA MEDICA INTERNACIONAL LTDA",
    "Nome_Fantasia": "AMIL",
    "Registro": "123456",
    "CNPJ": "00.000.000/0001-00",
    "Cidade": "Rio de Janeiro",
    "UF": "RJ",
    "Relevancia": 95
  }
]
```

## 🖥️ Interface do Usuário
A interface Vue.js oferece:

- Campo de busca interativo

- Exibição de resultados em tabela

- Feedback visual (carregamento, erros, resultados vazios)

- Design responsivo

## 📌 Observações Importantes

1. O arquivo CSV (Relatorio_cadop.csv) deve estar no mesmo diretório que o servidor Python

2. A URL do endpoint no frontend deve ser ajustada conforme o ambiente

3. O sistema usa busca fuzzy com threshold de 50% de similaridade

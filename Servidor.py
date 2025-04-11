# Server em Python para integração
from flask import Flask, request, jsonify
import pandas as pd
from fuzzywuzzy import fuzz

app = Flask(__name__)

# Comando que carrega os dados do arquivo CSV
df = pd.read_csv('Relatorio_cadop.csv', sep=';')

# "Relatorio_cadop.cvs" deve ser mudado de acordo com o nome real do arquivo à ser integrado

@app.route('/buscar_operadoras', methods=['GET'])
def buscar_operadoras():
    termo = request.args.get('termo', '')
    limite = int(request.args.get('limite', 10))
    
    if not termo:
        return jsonify({"error": "Parâmetro 'termo' é obrigatório"}), 400
    
    # Função para calcular a relevância de cada registro
    def calcular_relevancia(row):
        campos = [
            str(row['Razao_Social']),
            str(row['Nome_Fantasia']),
            str(row['Cidade']),
            str(row['UF'])
        ]
        return max(fuzz.partial_ratio(termo.lower(), campo.lower()) for campo in campos if pd.notna(campo))
    
    # Aplica a função de relevância e ordena os resultados
    df['Relevancia'] = df.apply(calcular_relevancia, axis=1)
    resultados = df[df['Relevancia'] > 50].sort_values('Relevancia', ascending=False).head(limite)
    
    # Converte para formato JSON
    resultados_json = resultados.to_dict(orient='records')
    return jsonify(resultados_json)

if __name__ == '__main__':
    app.run(debug=True)
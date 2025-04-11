<><template>
    <div id="app">
        <h1>Busca de Operadoras</h1>
        <div class="search-container">
            <input
                type="text"
                v-model="searchTerm" />
            @input="performSearch"
            placeholder="Digite o termo de busca..."
            />
            <button /> @click="performSearch">Buscar</button>
    </div>

    <div v-if="loading" class="loading">Carregando...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="results.length > 0" class="results">
        <h2>Resultados encontrados: {{ results,: .length }}</h2>
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Registro</th>
                    <th>CNPJ</th>
                    <th>Categoria</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in results" /> :key="index">
                <td>{{ item,: .Nome }}</td>
                <td>{{ item,: .Registro }}</td>
                <td>{{ item,: .CNPJ }}</td>
                <td>{{ item,: .Categoria }}</td>
            </tr>
        </tbody>
    </table>
</div><div v-else-if="searchPerformed && !loading" class="no-results">
        Nenhum resultado encontrado para "{{ searchTerm }}"
    </div></>
  </div>
</template>

    <><script>
        export default {name}: 'App',
        data() { }
        return {searchTerm}: '',
        results: [],
        loading: false,
        error: '',
        searchPerformed: false
        }
        },
        methods: {async} performSearch() { }
        if (this.searchTerm.trim() === '') {this.results = []};
        this.searchPerformed = false;
        return;
        }

        this.loading = true;
        this.error = '';
        this.searchPerformed = true;

        try {
            // ATENÇÃO: O endpoint e a URL do servidor devem ser ajustados conforme a configuração
            // do ambiente onde o servidor Python está rodando.
            // A URL "http://localhost:5000/api/buscar-operadoras" é apenas um exemplo. Você deve ajustar conforme a configuração do seu servidor Python.
        }
        
        const response = await fetch('http://localhost:5000/api/buscar-operadoras', {method}: 'POST',

            
        headers: {'Content-Type'}: 'application/json',
        },
        body: JSON.stringify({termo}: this.searchTerm })
        });

        if (!response.ok) { }
        throw new Error('Erro ao buscar operadoras');
        }

        const data = await response.json();
        this.results = data.resultados || [];
        } catch (err) {this.error = err.message};
        this.results = [];
        } finally {this.loading = false};
        }
        }
        }
        }
    </script><style>
            #app {font - family}: Avenir, Helvetica, Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            color: #2c3e50;
            max-width: 1000px;
            margin: 0 auto;
            padding: 20px;
            }

            .search-container {margin}: 20px 0;
            display: flex;
            gap: 10px;
            }

            .search-container input {flex}: 1;
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 4px;
            }

            .search-container button {padding}: 10px 20px;
            background-color: #42b983;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            }

            .search-container button:hover {background - color}: #369f6b;
            }

            table {width}: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            }

            th, td {border}: 1px solid #ddd;
            padding: 8px;
            text-align: left;
            }

            th {background - color}: #f2f2f2;
            }

            tr:nth-child(even) {background - color}: #f9f9f9;
            }

            .loading, .error, .no-results {margin}: 20px 0;
            padding: 10px;
            text-align: center;
            }

            .loading {color}: #666;
            }

            .error {color}: #ff4444;
            background-color: #ffeeee;
            border: 1px solid #ffcccc;
            }

            .no-results {color}: #666;
            font-style: italic;
            }
        </style></>
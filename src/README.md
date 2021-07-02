O projeto está dispoível em:
Git Hub:
https://github.com/frannfn-unesc/frann-projeto-final
https://github.com/frannfn-unesc/frann-api-secundaria

Heroku:
https://dashboard.heroku.com/apps/frann-projeto-final
https://dashboard.heroku.com/apps/frann-api-secundaria

Nesse projeto foram importadas a bibliotecas:
- mongoose;
- Express;
- Axios.

Foi realizada a configuração de autenticação para poder acessar a API principal.

Foi criada uma API secundária, para ser pego as informações da marca.

Nos dois recursos da API principal, produto e tipo, foram realizadas configurações de query strings e limitador.

Os dois recursos da API principal estão configurados conforme padrão REST.

Na pasta src, possui o arquivo index.js, onde chama as rotas e faz a autenticação.

Na pasta routes, estão todas as rotas e funções. Há nessa pasta um arquivo index.js, que chama as demais rotas.

Na pasta models, estão os modelos e esquemas.

Na pasta data, está a configuração para integração com o banco de dados MongoDB.
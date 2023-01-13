            #language: pt

            Funcionalidade: Login na plataforma
            Como cliente da EBAC-SHOP
            Quero fazer o meu login
            Para visualizar meus pedidos

            Contexto: Dado que eu acesse a tela de login da EBAC-SHOP

            Esquema do Cenário: Login válido
            Quando eu inserir meu username <username>
            E minha senha <senha>
            E clicar no botão 'LOGIN'
            Então a plataforma deve ser direcionada para a tela de checkout

            Exemplos:
            | username  | senha     |
            | artmanhas | bankai3#  |
            | manobrown | reimic22! |

Cenário: Login inválido
Quando eu inserir meu username "artmanhas"
E minha senha "fran"
E clicar no botão "LOGIN"
Então deve exibir a mensagem de alerta "Usuário ou senha inválidos"


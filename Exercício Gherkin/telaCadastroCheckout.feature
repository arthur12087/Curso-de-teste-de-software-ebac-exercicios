#language: pt

Funcionalidade: Tela de cadastro - Checkout
Como Cliente da EBAC-SHOP
Quero fazer/concluir meu cadastro
Para finalizar minha compra 

Contexto: Dado que eu esteja na página de checkout

Cenário: Cadastro de dados obrigatórios
Quando eu preencher os campos obrigatórios marcados com asterisco
E clicar em "FINALIZAR COMPRA"
Então o sistema deve cadastrar a compra

Cenário: Campo e-mail com formato inválido
Quando eu preencher o meu endereço de e-mail "art$petalmail.com"
Então o sistema deve inserir uma mensagem de erro

Cenário: Cadastro com campos vazios
Quando eu clicar em "FINALIZAR COMPRA"
Então o sistema deve exibir uma mensagem de alerta
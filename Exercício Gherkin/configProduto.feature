#language: pt

Funcionalidade: Configurar Produto
Como cliente da EBAC-SHOP
Quero configurar meu produto de acordo com meu tamanho e gosto
E escolher a quantidade
Para depois inserir no carrinho

Contexto: Dado que eu acesse o site da EBAC-SHOP

Cenário: Seleções obrigatórias do gosto do cliente
Dado que eu acesse a página de um produto
E clique no botão "Comprar"
Então a plataforma deve informar que as seleções 'cor,tamanho,quantidade' são obrigatórias


Cenário: Máximo de 10 produtos por venda
Dado que eu esteja na tela de visualização do carrinho
E tenha "11" produtos distintos listados no carrinho
Então deve aparecer a mensagem "Limite máximo de 10 produtos"

Cenário: Botão 'limpar' deve voltar a página ao estado original
Dado que eu acesse a página de um produto
E configure o meu produto
Quando eu clicar no botão 'limpar'
Então a página deve voltar ao estado original
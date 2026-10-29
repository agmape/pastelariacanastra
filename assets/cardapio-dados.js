/*
  CARDÁPIO DA PASTELARIA CANASTRA LOJA 2
  ---------------------------------------
  Para mudar um preço, um nome ou tirar um item, edite só este arquivo.
  - preco: "10,00"                      → um preço só
  - precos: [["Média", "28,00"], ...]   → vários tamanhos
  - foto: nome do arquivo em assets/img (opcional; itens com foto viram cartão)
*/
window.CARDAPIO = [
  {
    id: "pasteis",
    titulo: "Pastéis",
    icone: "deco-ic-pastel.png",
    frase: "Frito na hora, crocante e com recheio generoso.",
    grupos: [
      {
        titulo: "Salgados",
        itens: [
          { nome: "Carne", preco: "10,00" },
          { nome: "Queijo", preco: "10,00", foto: "pastel-queijo.jpg" },
          { nome: "Palmito", preco: "10,00" },
          { nome: "Bacalhau", preco: "15,00" },
          { nome: "Carne e queijo", preco: "10,00", foto: "pastel-carne-queijo.jpg" },
          { nome: "Frango com palmito", preco: "10,00" },
          { nome: "Frango com requeijão", preco: "10,00" },
          { nome: "Calabresa com requeijão", preco: "10,00" },
          { nome: "Presunto e muçarela", preco: "10,00" },
          { nome: "Pastel de pizza", preco: "10,00" },
          { nome: "Carne seca com requeijão", preco: "13,00", foto: "pastel-carne-seca.jpg" }
        ]
      },
      {
        titulo: "Doces",
        icone: "deco-ic-chocolate.png",
        itens: [
          { nome: "Nutella", preco: "13,00" },
          { nome: "Romeu e Julieta", desc: "queijo com goiabada", preco: "13,00", foto: "pastel-romeu-julieta.jpg" },
          { nome: "Banana com requeijão", desc: "açúcar e canela", preco: "13,00" }
        ]
      }
    ],
    enfeite: "deco-pastel-nutella.jpg"
  },
  {
    id: "salgados",
    titulo: "Salgados",
    icone: "deco-ic-coxinha.png",
    grupos: [
      {
        itens: [
          { nome: "Mini pizza", preco: "15,00", foto: "mini-pizza.jpg" },
          { nome: "Esfirras", desc: "carne ou frango com requeijão", preco: "10,00", foto: "esfirras.jpg" },
          { nome: "Coxinha", preco: "10,00" },
          { nome: "Esfirra de carne", preco: "10,00" },
          { nome: "Esfirra de frango com requeijão", preco: "10,00" }
        ]
      }
    ]
  },
  {
    id: "caldos",
    titulo: "Caldos",
    icone: "deco-ic-caldo.png",
    frase: "Porção de 500 ml.",
    grupos: [
      {
        itens: [
          { nome: "Frango", preco: "15,00" },
          { nome: "Mandioca com calabresa", preco: "15,00" },
          { nome: "Feijão com calabresa e bacon", preco: "15,00" }
        ]
      }
    ]
  },
  {
    id: "pratos",
    titulo: "Pratos e massas",
    icone: "deco-ic-porcao.png",
    frase: "Comida caseira, em travessa, pronta para levar.",
    grupos: [
      {
        itens: [
          { nome: "Filé mignon à parmegiana", preco: "65,00", foto: "file-parmegiana.jpg" },
          { nome: "Escondidinho de carne seca", precos: [["Média", "30,00"], ["Grande", "60,00"]], foto: "escondidinho.jpg" },
          { nome: "Lasanha à bolonhesa", desc: "com molho branco de 4 queijos", precos: [["Média", "28,00"], ["Grande", "50,00"]], foto: "lasanha.jpg", contain: true },
          { nome: "Inhoque de batata à bolonhesa", precos: [["Média", "28,00"], ["Grande", "50,00"]], foto: "inhoque-bolonhesa.jpg" },
          { nome: "Panquecas", desc: "carne moída, frango com requeijão ou presunto e muçarela", precos: [["Média · 3 un.", "25,00"], ["Grande · 6 un.", "50,00"]], foto: "panqueca.jpg" },
          { nome: "Torta de pão de forma", desc: "cremosa, com batata palha", preco: "20,00", foto: "torta-pao-de-forma.jpg" }
        ]
      }
    ]
  },
  {
    id: "porcoes",
    titulo: "Porções",
    icone: "deco-ic-porcao.png",
    frase: "Para dividir com a mesa.",
    grupos: [
      {
        itens: [
          { nome: "Filé de frango acebolado", desc: "400 g", preco: "38,00" },
          { nome: "Contra filé acebolado", desc: "400 g", preco: "55,00" },
          { nome: "Batata frita", desc: "400 g", preco: "28,00" },
          { nome: "Batata frita especial", desc: "400 g", preco: "38,00" },
          { nome: "Calabresa acebolada", preco: "30,00" },
          { nome: "Filé de tilápia frito", desc: "500 g", preco: "55,00" },
          { nome: "Enroladinho de calabresa", preco: "35,00" }
        ]
      }
    ]
  },
  {
    id: "cafe",
    titulo: "Café e padaria",
    icone: "deco-ic-suco.png",
    frase: "Para o café da manhã e o lanche da tarde.",
    grupos: [
      {
        itens: [
          { nome: "Cappuccino", preco: "12,00", foto: "cappuccino.jpg" },
          { nome: "Pão de queijo artesanal", desc: "100% caipira", precos: [["Pacote", "25,00"]], foto: "pao-de-queijo.jpg" },
          { nome: "Sanduíche natural", desc: "patê de frango com cenoura, alface, tomate e maionese", preco: "12,00", foto: "sanduiche-natural.jpg" },
          { nome: "Rosquinhas de coco", precos: [["Bandeja", "8,00"]], foto: "rosquinhas-coco.jpg" },
          { nome: "Inhoque gaúcho cadeirinha", precos: [["500 g", "20,00"]], foto: "inhoque-gaucho.jpg" }
        ]
      }
    ]
  },
  {
    id: "doces",
    titulo: "Bolos e sobremesas",
    icone: "deco-ic-chocolate.png",
    grupos: [
      {
        itens: [
          { nome: "Bolo Red Velvet", preco: "35,00", foto: "bolo-red-velvet.jpg" },
          { nome: "Bolo de cenoura com brigadeiro gourmet", preco: "25,00", foto: "bolo-cenoura.jpg" },
          { nome: "Merengue de morango", preco: "13,00", foto: "merengue-morango.jpg" },
          { nome: "Torta Sonho de Valsa", preco: "13,00", foto: "torta-sonho-de-valsa.jpg" },
          { nome: "Cheesecake", preco: "13,00", foto: "cheesecake.jpg" }
        ]
      }
    ]
  },
  {
    id: "bebidas",
    titulo: "Bebidas",
    icone: "deco-ic-refri.png",
    enfeite: "deco-sucos.jpg",
    grupos: [
      {
        titulo: "Refrigerantes",
        icone: "deco-ic-refri.png",
        itens: [
          { nome: "Coca-Cola lata", desc: "350 ml", preco: "6,00" },
          { nome: "Coca-Cola Zero lata", desc: "350 ml", preco: "6,00" },
          { nome: "Coca-Cola mini lata", desc: "220 ml", preco: "5,00" },
          { nome: "Guaraná Antarctica lata", desc: "350 ml", preco: "6,00" },
          { nome: "Sprite lata", desc: "350 ml", preco: "6,00" },
          { nome: "Fanta lata", desc: "350 ml", preco: "6,00" },
          { nome: "Coca-Cola 600 ml", preco: "9,00" },
          { nome: "Coca-Cola Zero 600 ml", preco: "9,00" },
          { nome: "Coca-Cola 1 litro", preco: "11,00" },
          { nome: "Coca-Cola Zero 1 litro", preco: "11,00" },
          { nome: "Coca-Cola 2 litros", preco: "15,00" },
          { nome: "Fanta 1 litro", preco: "10,00" },
          { nome: "H2OH! Limoneto", desc: "500 ml", preco: "7,00" }
        ]
      },
      {
        titulo: "Sucos",
        icone: "deco-ic-suco.png",
        itens: [
          { nome: "Laranja natural", desc: "da fruta", precos: [["Copo 300 ml", "10,00"], ["Jarra 780 ml", "19,00"]] },
          { nome: "Suco de polpa", desc: "caju, limão, morango, maracujá ou abacaxi com hortelã", precos: [["Copo 400 ml", "10,00"], ["Jarra 780 ml", "19,00"]] },
          { nome: "Del Valle lata", desc: "310 ml", preco: "7,00" },
          { nome: "Kapo", preco: "6,00" },
          { nome: "Prats laranja", desc: "300 ml", preco: "10,00" },
          { nome: "Prats uva", desc: "300 ml", preco: "11,00" }
        ]
      },
      {
        titulo: "Energéticos",
        icone: "deco-ic-raio.png",
        itens: [
          { nome: "Red Bull", desc: "250 ml", preco: "12,00" },
          { nome: "Monster", desc: "473 ml", preco: "13,00" }
        ]
      },
      {
        titulo: "Águas",
        icone: "deco-ic-gota.png",
        itens: [
          { nome: "Água sem gás", preco: "4,00" },
          { nome: "Água com gás", preco: "5,00" }
        ]
      }
    ]
  },
  {
    id: "cervejas",
    titulo: "Cervejas e drinks",
    icone: "deco-ic-caneca.png",
    enfeite: "deco-balde.jpg",
    grupos: [
      {
        titulo: "Cervejas",
        icone: "deco-ic-caneca.png",
        colunas: true,
        itens: [
          { nome: "Antarctica", precos: [["Lata 350 ml", "7,00"], ["Garrafa 600 ml", "12,00"]] },
          { nome: "Antarctica Original", precos: [["Lata 350 ml", "8,00"], ["Garrafa 600 ml", "15,00"]] },
          { nome: "Brahma", precos: [["Lata 350 ml", "7,00"], ["Garrafa 600 ml", "12,00"]] },
          { nome: "Amstel", precos: [["Lata 350 ml", "7,00"], ["Garrafa 600 ml", "12,00"]] },
          { nome: "Heineken", precos: [["Lata 350 ml", "9,00"], ["Garrafa 600 ml", "17,00"]] },
          { nome: "Heineken Ultimate", precos: [["Lata 350 ml", "12,00"], ["Long neck 330 ml", "12,00"]] },
          { nome: "Império Ultra", precos: [["Lata 350 ml", "10,00"], ["Long neck 330 ml", "10,00"]] },
          { nome: "Império Gold", precos: [["Long neck", "8,00"]] },
          { nome: "Império Lager", precos: [["Long neck", "8,00"]] }
        ]
      },
      {
        titulo: "Drinks",
        icone: "deco-ic-drink.png",
        itens: [
          { nome: "Caipirinha", preco: "25,00" },
          { nome: "Campari", preco: "25,00" }
        ]
      }
    ]
  }
];

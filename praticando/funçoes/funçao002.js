function escreverEndereco (rua, cidade, estado, ...complementos) {
    console.log(rua)
    console.log(cidade)
    console.log(estado)

    console.log(complementos)
}

escreverEndereco('Rua do Registro', 'Contagem', 'Estado de MG', 'NÚMERO 364', 'CASA 3')

/* Perceba que depois do que não declaramos como parámetro tudo foi armazenado como um array. Essa é função de uma function cujo número de parâmetros você não sabe. Damos o nome a isso de variáel rest.*/
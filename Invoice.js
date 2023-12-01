class Invoice 
{

#numeroFaturado
#descItem
#qtdItem
#precoItem

/**
 * 
 * @param {Number} pNumeroFaturado 
 * @param {String} pDescItem 
 * @param {Number} pQtdItem 
 * @param {Number} pPrecoItem 
 * @returns 
 */
constructor(pNumeroFaturado, pDescItem, pQtdItem, pPrecoItem){
    
this.#numeroFaturado = pNumeroFaturado
this.#descItem = pDescItem
this.#qtdItem = pQtdItem
this.#precoItem = pPrecoItem

if(pQtdItem < 0 ){
    return this.#qtdItem = 0;

}else if(pPrecoItem < 0){

   return this.#precoItem = 0.0;
}


}
get numeroFaturado(){
    return this.#numeroFaturado
}
 
get descItem(){
    return this.#descItem
}

get qtdItem(){
    return this.#qtdItem
}

get precoItem(){
    return this.#precoItem
}

set numeroFaturado(novoNumeroFaturado){
    this.#numeroFaturado = novoNumeroFaturado
}

set descItem(novoDescItem){
    this.#descItem = novoDescItem
}

set qtdItem(novoQtdItem){
    this.#qtdItem = novoQtdItem
}

set precoItem(novoPrecoItem){
    this.#precoItem = novoPrecoItem
}

getInvoiceAmount(){
   return (this.#qtdItem * this.#precoItem) ;
}

}

let invoice1 = new Invoice(23456, "Descrição do item", -4, -5);
console.log(invoice1.getInvoiceAmount());
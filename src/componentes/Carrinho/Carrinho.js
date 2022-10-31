import React from 'react'
import Produtos from './data/Produtos'
import Cards from './Cards'

function Carrinho() {
    return (
        <section>
        {
            Produtos.map((item) =>(<Cards />
            ))}
        </section>
    )
}

export default Carrinho
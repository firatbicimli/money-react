import React from 'react'

const Product = ({ product, basket, setBasket }) => {

    const basketItem = basket.find(item => item.id === product.id)

    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id)
        if(checkBasket){
            checkBasket.amount += 1
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
        } else {
            setBasket([...basket, {
                id: product.id,
                amount: 1
            }])
        }
    }

  return (
    <>
        <div className='product'>
            <h6>{product.title}</h6>
            <div className='price'>$ {product.price}</div>
            <div className='actions'>
                <button>Sat</button>
                <span className='amount'>{basketItem && basketItem.amount || 0}</span>
                <button onClick={addBasket}>Satın Al</button>
            </div>
            <style jsx>{`
                .product {
                padding: 10px;
                background: #fff;
                border: 1px solid #ddd;
                margin-bottom: 20px;
                }
            `}</style>
        </div>
    </>
  )
}

export default Product

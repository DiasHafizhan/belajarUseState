import { useState } from "react"
import CartShop from "../Fragment/Counter"


const products = [
  {
    id: 1,
    image: "/image/shoes.jpg",
    name: "Nike",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio incidunt nostrum at sunt saepe similique, blanditiis neque in earum consequatur!",
    price: 5000000
  },
  {
    id: 2,
    image: "/image/shoes.jpg",
    name: "Adidas",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio incidunt nostrum at sunt saepe similique, blanditiis neque in earum consequatur!",
    price: 1500000
  },
  {
    id: 3,
    image: "/image/shoes.jpg",
    name: "Convers",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio incidunt nostrum at sunt saepe similique, blanditiis neque in earum consequatur!",
    price: 500000
  },
]



const Shop = () => {

  const [cart, setCart] = useState([
    {
      id: 1,
      jmh: 1
    }
  ])

  const handleCartToBuy = (id) => {
    if(cart.find((item) => item.id === id)){
      setCart(
        cart.map(item => item.id === id ? {...item, jmh: item.jmh + 1} : item)
      )
    } else{
      setCart([...cart, {id, jmh: 1}] )
    }
  }

  return (
    <div className="flex justify-between">
      <div className="w-1/1 flex flex-wrap bg-red-200">
        {products.map((data) => {
          return (
            <CartShop key={data.id}>
              <CartShop.Top image={data.image} />
              <CartShop.Body title={data.name}>
                {data.desc}
              </CartShop.Body>
              <CartShop.Footer
                price={data.price}
                id={data.id}
                handleCartToBuy={handleCartToBuy}
              />
            </CartShop>
          )
        })}
      </div>

      <div className="w-1/2 mt-20 px-5">
        <h1 className="text-2xl text-slate-800 font-bold mb-5 px-4">Cart</h1>

        <table className="text-left table-auto border-separate border-spacing-x-5">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Jumlah</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              const product = products.find((product) => product.id === item.id)
              return (
                <tr key={item.id}>
                  <th>{product.name}</th>
                  <th>{product.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</th>
                  <th>{item.jmh}</th>
                  <th>{(item.jmh * product.price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</th>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Shop
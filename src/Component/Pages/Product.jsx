import { Fragment, useState } from "react"
import CardProduct from "../Fragment/CardProduct"
import Button from "../Element/Button"

const products = [
  {
    id: 1,
    image: "/image/shoes.jpg",
    name: "Sepatu Baru",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed corrupti esse maxime odit qui delectus beatae animi, magnam nostrum quisquam, illo ut maiores, veniam aut.",
    price: 1500000
  },
  {
    id: 2,
    image: "/image/shoes.jpg",
    name: "Sepatu Lama",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed corrupti esse maxime odit qui delectus beatae animi, magnam nostrum quisquam, illo ut maiores, veniam aut.",
    price: 100000
  },
]

const email = localStorage.getItem('email')

const Produtc = () => {

  const handleLogout = () => {
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    window.location.href = '/login'
  }

  const [cart, setCart] = useState([
    {
      id: 1,
      qyt: 1
    }
  ])

  const handleAddToCart = (id) => {
    if (cart.find((item => item.id === id))) {
      setCart(
        cart.map(item => item.id === id ? { ...item, qyt: item.qyt + 1 } : item)
      )
    } else {
      setCart([...cart, { id, qty: 1 }])
    }
  }

  return (
    <Fragment>
      <div className="flex justify-end bg-blue-500 text-white px-5 items-center gap-5 p-5">
        {email}
        <Button classname="bg-black" onClick={handleLogout}>Logout</Button>
      </div>
      <div className="flex justify-center py-4 gap-20">
        <div className="flex flex-wrap w-2/1">
          {products.map((data) => {
            return (
              <CardProduct key={data.id}>
                <CardProduct.Header image={data.image} />
                <CardProduct.Body title={data.name}>
                  {data.desc}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={data.price}
                  id={data.id}
                  handleAddToCart={handleAddToCart} />
              </CardProduct>
            )
          })}
        </div>
        <div className="w-2/2">
          <h1 className="text-3xl text-blue-600 font-bold">Cart</h1>
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
                    <th>
                      {product.price.toLocaleString('id-ID',  { style: 'currency', currency: 'IDR' })}
                    </th>
                    <th>{item.qyt}</th>
                    <th>
                      {(item.qyt * product.price).toLocaleString('id-ID',  { style: 'currency', currency: 'IDR' })}
                      </th>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

    </Fragment>
  )
}

export default Produtc
import Button from "../Element/Button"


const CartShop = (props) => {
  const {children} = props

  return (
    <div className="max-w-sm p-3 border border-slate-500 mx-auto mt-20 rounded-lg">
      {children}

    </div>
  )
}

const Top = (props) => {
  const {image} = props

  return (
    <img src={image} alt="" className="w-full object-cover" />
  )
}

const Body = (props) => {
  const {title, children} = props

  return (
    <div className="px-3">
      <h2 className="text-2xl text-slate-800 font-bold mb-2">
        {title}
      </h2>
      <p className="text-base mb-5">
        {children}
      </p>
    </div>
  )
}

const Footer = (props) => {
  const {price, handleCartToBuy, id} = props

  return (
    <div className="px-3 flex justify-between items-center">
      <span>{price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</span>
      <Button className="bg-blue-600" onClick={() => handleCartToBuy(id)}>Buy</Button>
    </div>
  )
}

CartShop.Top = Top
CartShop.Body = Body
CartShop.Footer = Footer


export default CartShop
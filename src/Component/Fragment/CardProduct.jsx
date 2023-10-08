import Button from "../Element/Button"

const CardProduct = (props) => {
  const { children } = props

  return (
    <div>
      <div className="w-full max-w-sm p-4 flex flex-col justify-between bg-gray-400 shadow border border-gray-200">
        {children}
      </div>
    </div>
  )
}

const Header = (props) => {
  const { image } = props

  return (
    <img src={image} alt="" className="w-full object-cover" />
  )
}

const Body = (props) => {
  const { title, children } = props

  return (
    <div className="px-4 h-full">
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="text-base">{children}</p>
    </div>
  )
}

const Footer = (props) => {
  const {price, handleAddToCart, id} = props

  return (
    <div className="flex items-center justify-between px-4">
      <span className="font-semibold text-lg">{price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</span>
      <Button onClick={() => handleAddToCart(id)}>Buy</Button>
    </div>
  )
}

CardProduct.Header = Header
CardProduct.Body = Body
CardProduct.Footer = Footer

export default CardProduct
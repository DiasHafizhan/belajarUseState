

const Label = (props) => {
  const {children} = props


  return (
    <label htmlFor="htmlFor" className="block text-slate-700 font-bold mb-2">
      {children}
    </label>
  )
}

export default Label
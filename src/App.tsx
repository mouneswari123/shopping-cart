import ProductList from './components/ProductList'
import Basket from './components/Basket'
import './styles/app.css'

export default function App() {
  return (
    <div className="container">
      <ProductList />
      <Basket />
    </div>
  )
}

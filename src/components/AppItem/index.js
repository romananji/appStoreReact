// Write your code here
import './index.css'

const AppItem = props => {
  const {itemDetails} = props
  const {imageUrl, appName} = itemDetails
  return (
    <li className="app">
      <img src={imageUrl} alt={appName} className="app-image" />
      <h1 className="app-name">{appName}</h1>
    </li>
  )
}
export default AppItem

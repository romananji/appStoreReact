// Write your code here
import './index.css'

const TabItem = props => {
  const {itemDetails, onChangeTabId, isActiveTabId} = props
  const activeTabClassName = isActiveTabId && 'active-tab'
  const {tabId, displayText} = itemDetails
  const onChangeTab = () => {
    onChangeTabId(tabId)
  }
  return (
    <li>
      <button
        type="button"
        className={`button ${activeTabClassName}`}
        onClick={onChangeTab}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem

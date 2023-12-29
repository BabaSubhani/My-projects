import './index.css'

const TabItem = props => {
  const {tabDetails, changeTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const changeTab = () => {
    changeTabId(tabId)
  }

  const highLightColor = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${highLightColor}`}
        onClick={changeTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

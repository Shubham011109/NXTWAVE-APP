import React from 'react'

const HeaderContext = React.createContext({
  activeTheme: 'light',
  savedVideos: [],
  addSavedVideos: () => {},
  onChangeTheme: () => {},
})

export default HeaderContext

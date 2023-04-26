import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './assets/styles/index.css'
// import './assets/styles/reset.css'

// 1)proje içinde npm install sass
// 2)scss uzantılı dosya açılması main.jsx içinde import edilmesi.
// 3)index.css içerisindeki kodların index.scss e aktarılması kodların scss e göre düzenlenmesi
import "./assets/styles/index.scss"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

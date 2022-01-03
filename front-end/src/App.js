import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Chat, Join } from './pages'

const App = () => (
  <Router>
    <Routes>
      <Route path="/" exact element={<Join />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  </Router>
)

export default App

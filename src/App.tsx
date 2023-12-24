import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './Homepage'
import { Projects } from './pages'

type Props = {}

const App = (props: Props) => {
	return (
		<Router>
			<Routes>
				<Route index element={<Homepage />} />
				<Route path='/projects' element={<Projects />} />
			</Routes>
		</Router>
	)
}

export default App

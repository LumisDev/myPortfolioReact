import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

type Props = {}

const Projects = (props: Props) => {
	return (
		<div>
			<div className='flex flex-col items-center justify-center w-screen h-fit bg-green-600 p-4'>
				<motion.div
					initial={{
						opacity: 0,
						y: -200
					}}
					animate={{
						opacity: 1,
						y: 0
					}}
					transition={{
						duration: 1,
						type: 'spring',
						bounce: 0.5
					}}
				>
					<h1 className='text-3xl font-extrabold text-yellow-500'>
						My projects
					</h1>
					<h2 className="text-lg font-bold text-white hover:text-gray-500">
						<Link to='/'>Back to home...</Link>
					</h2>
				</motion.div>
			</div>
		</div>
	)
}

export default Projects

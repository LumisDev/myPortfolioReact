import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
type Props = {}

const Homepage = (props: Props) => {
	return (
		<div>
			<div className='flex flex-col items-center justify-center w-screen h-fit bg-green-600 p-4'>
				<Link to='/'>
					<motion.h1
						className='text-4xl font-extrabold text-yellow-300'
						initial={{ y: -200, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 2, type: 'spring', bounce: 0.5 }}
					>
						Welcome to my portfolio!
					</motion.h1>
				</Link>
			</div>
			<div className='w-screen h-screen bg-red-600'>
				<div className='flex flex-col justify-center items-center w-screen h-fit m-auto p-2'>
					<motion.div
						initial={{
							x: -200,
							opacity: 0
						}}
						animate={{
							x: 0,
							opacity: 1
						}}
						transition={{
							duration: 3,
							type: 'spring',
							bounce: 0.5,
							delay: 2.5,
							delayChildren: 1
						}}
					>
						Here you can see my projects and other things that I do
						<motion.button
							className='button'
							initial={{
								x: -200,
								opacity: 0
							}}
							animate={{
								x: 0,
								opacity: 1
							}}
							transition={{
								duration: 2,
								type: 'spring',
								bounce: 0.5
							}}
						>
							<Link to='/projects'>View my projects</Link>
						</motion.button>
						<motion.button
							className='button'
							initial={{
								x: -200,
								opacity: 0
							}}
							animate={{
								x: 0,
								opacity: 1
							}}
							transition={{
								duration: 2,
								type: 'spring',
								bounce: 0.5
							}}
						>
							<Link to='/skills'>View my skills</Link>
						</motion.button>
						<motion.button
							className='button'
							initial={{
								x: -200,
								opacity: 0
							}}
							animate={{
								x: 0,
								opacity: 1
							}}
							transition={{
								duration: 2,
								type: 'spring',
								bounce: 0.5
							}}
						>
							<Link to='/contact'>Contact me!</Link>
						</motion.button>
					</motion.div>
				</div>
			</div>
		</div>
	)
}

export default Homepage

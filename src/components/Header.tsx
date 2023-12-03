"use client";

import Link from "next/link";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Header({ navigations }: { navigations: any }) {
	return (
		<header className='w-full justify-center flex items-center bg-white p-4'>
			<nav className='w-full flex items-center max-w-7xl justify-between'>
				<Navbrand />
				<Navmenu navigations={navigations} />
				<Navtools navigations={navigations} />
			</nav>
		</header>
	);
}

function Navbrand() {
	return (
		<div className='_brand'>
			<h1 className='text-primary font-bold text-sm sm:text-lg lg:text-xl'>
				{process.env.NEXT_PUBLIC_APP}
			</h1>
		</div>
	);
}

function Navmenu({ navigations }: { navigations: any }) {
	return (
		<div className='_menu hidden md:flex'>
			<ul className='menu bg-transparent menu-horizontal rounded-box'>
				{navigations.map(
					(item: { name: string; path: string; icon: string }, i: number) => {
						return (
							<li key={i}>
								<Link
									className='text-neutral-400 hover:text-primary duration-300 ease-in-out text-xs sm:text-sm font-bold'
									href={item.path}>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth='1.5'
										stroke='currentColor'
										className='w-4 h-4'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d={item.icon}
										/>
									</svg>
									{item.name}
								</Link>
							</li>
						);
					}
				)}
			</ul>
		</div>
	);
}

function Navtools({ navigations }: { navigations: any }) {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<div className='flex justify-center items-center md:gap-4'>
			<label className='swap swap-rotate text-primary'>
				{/* this hidden checkbox controls the state */}
				<input type='checkbox' />

				{/* sun icon */}
				<svg
					className='swap-on fill-current w-5 h-5'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'>
					<path d='M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z' />
				</svg>

				{/* moon icon */}
				<svg
					className='swap-off fill-current w-5 h-5'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'>
					<path d='M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z' />
				</svg>
			</label>
			<label className='btn btn-circle border-none md:hidden hover:bg-white swap swap-rotate text-primary bg-white'>
				{/* this hidden checkbox controls the state */}
				<input
					onClick={() => {
						setShowMenu(!showMenu);
					}}
					type='checkbox'
				/>

				{/* hamburger icon */}
				<svg
					className='swap-off fill-current'
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 512 512'>
					<path d='M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z' />
				</svg>

				{/* close icon */}
				<svg
					className='swap-on fill-current'
					xmlns='http://www.w3.org/2000/svg'
					width='24'
					height='24'
					viewBox='0 0 512 512'>
					<polygon points='400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49' />
				</svg>
			</label>
			<button className='btn text-white btn-primary btn-md'>
				<ArrowRightOnRectangleIcon className='w-5' />
				Login
			</button>

			<FloatMenu
				showMenu={showMenu}
				setShowMenu={setShowMenu}
				navigations={navigations}
			/>
		</div>
	);
}

function FloatMenu({
	showMenu,
	setShowMenu,
	navigations,
}: {
	showMenu: any;
	setShowMenu: any;
	navigations: any;
}) {
	return (
		<div
			className={`absolute md:hidden ease-in-out duration-1000 top-24 ${
				showMenu ? "right-4" : "right-[-300px] opacity-0"
			}`}>
			<ul className='menu bg-white w-56 rounded-box'>
				{navigations.map(
					(item: { path: string; name: string; icon: string }, i: number) => {
						return (
							<li key={i}>
								<Link
									className='text-neutral-400 hover:text-primary duration-300 ease-in-out text-xs sm:text-sm font-bold'
									href={item.path}>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth='1.5'
										stroke='currentColor'
										className='w-4 h-4'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d={item.icon}
										/>
									</svg>
									{item.name}
								</Link>
							</li>
						);
					}
				)}
			</ul>
		</div>
	);
}

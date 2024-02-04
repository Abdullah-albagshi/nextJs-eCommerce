'use client';

import React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

type Props = {
	isSearchToggled: boolean;
	setIsSearchToggled: React.Dispatch<React.SetStateAction<boolean>>;
} & React.HTMLProps<HTMLInputElement>;

const Search = ({
	isSearchToggled,
	setIsSearchToggled,
	className,
	...props
}: Props) => {
	const router = useRouter();
	const [search, setSearch] = React.useState('');

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		router.push(`/?q=${search}`);
	};
	const clearSearch = () => {
		setSearch('');
		router.push('/');
		setIsSearchToggled(false);
	};

	return (
		<div
			className={cn(
				'animate-fade-in bg-white p-3 h-0 transition-all  ease-in-out ',
				isSearchToggled ? 'h-32' : 'h-0',
				className
			)}
			{...props}
		>
			<form onSubmit={onSubmit}>
				<div className='relative'>
					<input
						type='text'
						placeholder='Search products'
						className={cn(
							'w-full p-3 border-0 border-b text-2xl',
							'placeholder-text-ecm-gray',
							isSearchToggled ? 'block' : 'hidden'
						)}
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
					<span
						className={cn(
							'absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer',
							isSearchToggled ? 'block' : 'hidden'
						)}
						onClick={clearSearch}
					>
						<X size={24} strokeWidth={2} />
					</span>
				</div>

				<p
					className={cn(
						'text-ecm-gray text-sm p-3 h-0 animate-fade-in transition-all duration-200 ease-in-out',
						search.length === 0 ? 'hidden' : 'block h-10'
					)}
				>
					press{' '}
					<span className='text-ecm-yellow'>
						<u> Enter</u>{' '}
					</span>{' '}
					to search.
				</p>
			</form>
		</div>
	);
};

export default Search;

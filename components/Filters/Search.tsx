'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

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
  // read the query from the URL
	const searchParams = useSearchParams();
	const query = searchParams.get('q');
  // when the form is submitted, we update the URL with the search query
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		if (!e.currentTarget) return;
		const search = e.currentTarget.querySelector('input')?.value || '';
		e.preventDefault();
		router.push(`/?q=${search}`);
	};
  // clear the search query from the URL
	const closeSearch = () => {
		router.push('/');
		setIsSearchToggled(false);
	};

	return (
		<div
			className={cn(
				'animate-fade-in bg-white p-3 h-0 transition-all  ease-in-out ',
				isSearchToggled ? 'h-40' : 'h-0',
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
					/>
					<span
						className={cn(
							'absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer',
							isSearchToggled ? 'block' : 'hidden'
						)}
						onClick={closeSearch}
					>
						<X size={24} strokeWidth={2} />
					</span>
				</div>

				<p
					className={cn(
						'text-ecm-gray text-sm p-3 h-0 animate-fade-in transition-all duration-200 ease-in-out',
						!isSearchToggled ? 'hidden' : 'block h-10'
					)}
				>
					press{' '}
					<span className='text-ecm-yellow'>
						<u> Enter</u>{' '}
					</span>{' '}
					to search.
				</p>
				<p
					className={cn(
						'h-0 p-3 text-sm transition-all duration-200 ease-in-out text-ecm-gray animate-fade-in',
						(query && isSearchToggled) ? 'block h-10' : 'hidden'
					)}
				>
					{query ? `Search results for "${query}"` : 'No search results'}
				</p>
			</form>
		</div>
	);
};

export default Search;

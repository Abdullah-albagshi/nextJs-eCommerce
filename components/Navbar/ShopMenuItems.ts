export type MenuItem = {
	title: string;
	href: string;
	children: {
    title: string;
    href: string;
    isNew: boolean;
  }[]
};
export const shopMenuItems: MenuItem[] = [
	{
		title: 'Shop Catalog',
		href: '#',
		children: [
			{
				title: 'Shop – Categories Grid',
				href: '#',
				isNew: false,
			},
			{
				title: 'Shop – Fullscreen',
				href: '#',
				isNew: false,
			},
			{
				title: 'Shop – Header Search ',
				href: '#',
				isNew: true,
			},
		],
	},
	{
		title: 'Product Layouts',
		href: '#',
		children: [
			{
				title: 'No Background',
				href: '#',
				isNew: false,
			},
			{
				title: 'Swatches & Labels ',
				href: '#',
				isNew: true,
			},
			{
				title: 'Extended Description',
				href: '#',
				isNew: false,
			},
		],
	},
	{
		title: 'Product Types',
		href: '#',
		children: [
			{
				title: 'Simple',
				href: '#',
				isNew: false,
			},
			{
				title: 'Variable',
				href: '#',
				isNew: false,
			},
			{
				title: 'Grouped',
				href: '#',
				isNew: false,
			},
		],
	},
	{
		title: 'Shop Pages',
		href: '#',
		children: [
			{
				title: 'Cart',
				href: '#',
				isNew: false,
			},
			{
				title: 'Checkout',
				href: '#',
				isNew: false,
			},
			{
				title: 'Order Tracking',
				href: '#',
				isNew: false,
			},
		],
	},
];

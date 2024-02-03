export type Categories =
	| 'bags'
	| 'decoration'
	| 'essentials'
	| 'interior'
	| 'all';

export type CategoryHref = `/product-category/${Categories}` | '/';

export type Category = {
	key: Categories;
	name: string;
	href: `/product-category/${Categories}` | '/' 
	image: string;
};


export type CategoryCarousel = {
  key: string;
  title: string;
  category: Categories;
  link: Category['href'];
  image: string;
  mobileImage: string;
  textColor: string;
};

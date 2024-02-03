import { Category, CategoryCarousel } from "@/types/Categories";

export const Categories: Category[] = [
  {
    key: 'all',
    name: 'All',
    href: '/',
    image: 'https://savoy.nordicmade.com/wp-content/uploads/2020/08/category-thumb-all.jpg',
  },
  {
    key: 'bags',
    name: 'Bags & Backpacks',
    href: '/product-category/bags',
    image: 'https://savoy.nordicmade.com/wp-content/uploads/2020/08/category-thumb-bags-backpacks.jpg',
  },
  {
    key: 'decoration',
    name: 'Decoration',
    href: '/product-category/decoration',
    image: 'https://savoy.nordicmade.com/wp-content/uploads/2020/08/category-thumb-decoration.jpg',
  },
  {
    key: 'essentials',
    name: 'Essentials',
    href: '/product-category/essentials',
    image: 'https://savoy.nordicmade.com/wp-content/uploads/2020/08/category-thumb-essentials.jpg',
  },
  {
    key: 'interior',
    name: 'Interior',
    href: '/product-category/interior',
    image: 'https://savoy.nordicmade.com/wp-content/uploads/2020/08/category-thumb-interior.jpg',
  }
]

export const CategoryItems: CategoryCarousel[] = [
  {
    key: 'lamp',
    title: 'Contemporary Pendant Lighting',
    category: 'interior',
    link: '/product-category/interior',
    image:
      'https://savoy.nordicmade.com/wp-content/uploads/2015/08/slider-pendant-lighting.jpg',
    mobileImage:
      'https://savoy.nordicmade.com/wp-content/uploads/2015/08/slider-pendant-lighting-alt.jpg',
    textColor: 'md:text-white',
  },
  {
    key: 'clock',
    title: 'Minimalist Rotating Disc Wall Clock',
    category: 'decoration',
    link: '/product-category/decoration',
    image:
      'https://savoy.nordicmade.com/wp-content/uploads/2015/08/slider-wall-clock.jpg',
    mobileImage:
      'https://savoy.nordicmade.com/wp-content/uploads/2015/08/slider-wall-clock-alt.jpg',
    textColor: 'text-black',
  },
  {
    key: 'basket',
    title: 'Bamboo Zigzag Pattern Basket',
    category: 'essentials',
    link: '/product-category/essentials',
    image:
      'https://savoy.nordicmade.com/wp-content/uploads/2015/08/slider-basket.jpg',
    mobileImage:
      'https://savoy.nordicmade.com/wp-content/uploads/2015/08/slider-basket-alt.jpg',
    textColor: 'text-black',
  },
];
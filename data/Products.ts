import { Product } from '@/types/Product';

export const Products: Product[] = [
	{
		id: '1',
		name: 'Herschel Little America Backpack',
    slug: 'herschel-little-america',
		price: 120,
		discount: 10,
		colors: [
			{
				colorHash: '#cfa880',
				colorName: 'Brown',
			},
			{
				colorHash: '#f3c6c6',
				colorName: 'Pink',
			},
		],
		images: [
			'https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-hans-backpack.jpg',
			'https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-hans-backpack-2.jpg',
		],
		thumbnails: [
			'https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-hans-backpack-300x372.jpg',
			'https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-hans-backpack-2-450x558.jpg',
		],
		quantity: 3,
		description: `Designed for simplicity and made from high quality materials. Its sleek geometry and material combinations creates a modern personalized look.`,
		category: 'bags',
		additionalInfo: {
			weight: '0.5 kg',
			dimensions: '25 × 25 × 25 cm',
			material: 'Cotton',
			other: 'Vegan',
			size: 'Small',
		},
		serialNumber: 'N/A',
		rating: 4.5,
		reviews: [
			{
				id: 1,
				name: 'John Doe',
				avatar:
					'https://secure.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=96&d=mm&r=g',
				date: 'August 23, 2020',
				content: 'test',
				rating: 5,
			},
			{
				id: 2,
				name: 'Jane Doe',
				avatar:
					'https://secure.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=96&d=mm&r=g',
				date: 'August 23, 2020',
				content: 'test',
				rating: 4,
			},
		],
		relatedProducts: [
			{
				id: '2',
				name: 'Herschel Little America Backpack',
        slug: 'herschel-little-america-backpack',
				price: 120,
				discount: 0,
				colors: [
					{
						colorHash: '#e3e3e3',
						colorName: 'Gray',
					},
					{
						colorHash: '#000000',
						colorName: 'Black',
					},
					{
						colorHash: '#cfa880',
						colorName: 'Brown',
					},
					{
						colorHash: '#f3c6c6',
						colorName: 'Pink',
					},
				],
				images: [
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1.jpg',
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-2.jpg',
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-3.jpg',
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-4.jpg',
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-5.jpg',
				],
				thumbnails: [
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-100x100.jpg',
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-2-100x100.jpg',
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-3-100x100.jpg',
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-4-100x100.jpg',
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-5-100x100.jpg',
				],
				quantity: 1,
				description: `
          <p>
            The Herschel Little America™ backpack is an iconic silhouette, pairing classic mountaineering style with modern functionality.
          </p>
          <ul>
            <li>Signature striped fabric liner</li>
            <li>Padded and fleece lined 15″ laptop sleeve</li>
            <li>Adjustable drawcord closure</li>
            <li>Magnetic strap closures with metal pin clips</li>
            <li>Front pocket with hidden zipper and key clip</li>
          </ul>
        `,
				category: 'bags',
				additionalInfo: {
					weight: '0.5 kg',
					dimensions: '25 × 25 × 25 cm',
					material: 'Cotton',
					other: 'Vegan',
					size: 'Small',
				},
				serialNumber: 'N/A',
				rating: 4.5,
				reviews: [],
				relatedProducts: [],
				tags: ['Bags', 'Backpacks', 'Herschel', 'Little America'],
			},
		],
		tags: ['Bags', 'Backpacks', 'Herschel', 'Little America'],
	},
  {
		id: '2',
		name: 'Herschel Little America Backpack',
    slug: 'herschel-little-america-backpack',
		price: 120,
		discount: 0,
		colors: [],
		images: [
			'https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-hans-backpack.jpg',
			'https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-hans-backpack-2.jpg',
		],
		thumbnails: [
			'https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-hans-backpack-300x372.jpg',
			'https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-hans-backpack-2-450x558.jpg',
		],
		quantity: 1,
		description: `
      <p>
        The Herschel Little America™ backpack is an iconic silhouette, pairing classic mountaineering style with modern functionality.
      </p>
      <ul>
        <li>Signature striped fabric liner</li>
        <li>Padded and fleece lined 15″ laptop sleeve</li>
        <li>Adjustable drawcord closure</li>
        <li>Magnetic strap closures with metal pin clips</li>
        <li>Front pocket with hidden zipper and key clip</li>
        <li>Internal media pocket with headphone port</li>
        <li>Contoured shoulder straps and air mesh back padding</li>
        <li>Classic woven label</li>
      </ul>
    `,
		category: 'essentials',
		additionalInfo: {
			weight: '0.5 kg',
			dimensions: '25 × 25 × 25 cm',
			material: 'Cotton',
			other: 'Vegan',
			size: 'Small',
		},
		serialNumber: 'N/A',
		rating: 4,
		reviews: [
			{
				id: 1,
				name: 'John Doe',
				avatar:
					'https://secure.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=96&d=mm&r=g',
				date: 'August 23, 2020',
				content: 'test',
				rating: 5,
			},
			{
				id: 2,
				name: 'Jane Doe',
				avatar:
					'https://secure.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=96&d=mm&r=g',
				date: 'August 23, 2020',
				content: 'test',
				rating: 4,
			},
		],
		relatedProducts: [
			{
				id: '2',
				name: 'Herschel Little America Backpack',
        slug: 'herschel-little-america-backpack',
				price: 120,
				discount: 0,
				colors: [
					{
						colorHash: '#e3e3e3',
						colorName: 'Gray',
					},
					{
						colorHash: '#000000',
						colorName: 'Black',
					},
					{
						colorHash: '#cfa880',
						colorName: 'Brown',
					},
					{
						colorHash: '#f3c6c6',
						colorName: 'Pink',
					},
				],
				images: [
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1.jpg',
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-2.jpg',
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-3.jpg',
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-4.jpg',
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-5.jpg',
				],
				thumbnails: [
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-100x100.jpg',
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-2-100x100.jpg',
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-3-100x100.jpg',
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-4-100x100.jpg',
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-5-100x100.jpg',
				],
				quantity: 1,
				description: `
          <p>
            The Herschel Little America™ backpack is an iconic silhouette, pairing classic mountaineering style with modern functionality.
          </p>
          <ul>
            <li>Signature striped fabric liner</li>
            <li>Padded and fleece lined 15″ laptop sleeve</li>
            <li>Adjustable drawcord closure</li>
            <li>Magnetic strap closures with metal pin clips</li>
            <li>Front pocket with hidden zipper and key clip</li>
          </ul>
        `,
				category: 'bags',
				additionalInfo: {
					weight: '0.5 kg',
					dimensions: '25 × 25 × 25 cm',
					material: 'Cotton',
					other: 'Vegan',
					size: 'Small',
				},
				serialNumber: 'N/A',
				rating: 4.5,
				reviews: [],
				relatedProducts: [],
				tags: ['Bags', 'Backpacks', 'Herschel', 'Little America'],
			},
		],
		tags: ['Bags', 'Backpacks', 'Herschel', 'Little America'],
	},
  {
		id: '3',
		name: 'Herschel Little America Backpack',
    slug: 'herschel-little',
		price: 120,
		discount: 0,
		colors: [
			{
				colorHash: '#cfa880',
				colorName: 'Brown',
			},
			{
				colorHash: '#f3c6c6',
				colorName: 'Pink',
			},
		],
		images: [
			'https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-hans-backpack.jpg',
			'https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-hans-backpack-2.jpg',
		],
		thumbnails: [
			'https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-hans-backpack-300x372.jpg',
			'https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-hans-backpack-2-450x558.jpg',
		],
		quantity: 1,
		description: `
      <p>
        The Herschel Little America™ backpack is an iconic silhouette, pairing classic mountaineering style with modern functionality.
      </p>
      <ul>
        <li>Signature striped fabric liner</li>
        <li>Padded and fleece lined 15″ laptop sleeve</li>
        <li>Adjustable drawcord closure</li>
        <li>Magnetic strap closures with metal pin clips</li>
        <li>Front pocket with hidden zipper and key clip</li>
        <li>Internal media pocket with headphone port</li>
        <li>Contoured shoulder straps and air mesh back padding</li>
        <li>Classic woven label</li>
      </ul>
    `,
		category: 'essentials',
		additionalInfo: {
			weight: '0.5 kg',
			dimensions: '25 × 25 × 25 cm',
			material: 'Cotton',
			other: 'Vegan',
			size: 'Small',
		},
		serialNumber: 'N/A',
		rating: 4.5,
		reviews: [
			{
				id: 1,
				name: 'John Doe',
				avatar:
					'https://secure.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=96&d=mm&r=g',
				date: 'August 23, 2020',
				content: 'test',
				rating: 5,
			},
			{
				id: 2,
				name: 'Jane Doe',
				avatar:
					'https://secure.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=96&d=mm&r=g',
				date: 'August 23, 2020',
				content: 'test',
				rating: 4,
			},
		],
		relatedProducts: [
			{
				id: '2',
				name: 'Herschel Little America Backpack',
        slug: 'herschel-little-america-backpack',
				price: 120,
				discount: 0,
				colors: [
					{
						colorHash: '#e3e3e3',
						colorName: 'Gray',
					},
					{
						colorHash: '#000000',
						colorName: 'Black',
					},
					{
						colorHash: '#cfa880',
						colorName: 'Brown',
					},
					{
						colorHash: '#f3c6c6',
						colorName: 'Pink',
					},
				],
				images: [
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1.jpg',
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-2.jpg',
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-3.jpg',
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-4.jpg',
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-5.jpg',
				],
				thumbnails: [
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-100x100.jpg',
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-2-100x100.jpg',
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-3-100x100.jpg',
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-4-100x100.jpg',
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-5-100x100.jpg',
				],
				quantity: 1,
				description: `
          <p>
            The Herschel Little America™ backpack is an iconic silhouette, pairing classic mountaineering style with modern functionality.
          </p>
          <ul>
            <li>Signature striped fabric liner</li>
            <li>Padded and fleece lined 15″ laptop sleeve</li>
            <li>Adjustable drawcord closure</li>
            <li>Magnetic strap closures with metal pin clips</li>
            <li>Front pocket with hidden zipper and key clip</li>
          </ul>
        `,
				category: 'bags',
				additionalInfo: {
					weight: '0.5 kg',
					dimensions: '25 × 25 × 25 cm',
					material: 'Cotton',
					other: 'Vegan',
					size: 'Small',
				},
				serialNumber: 'N/A',
				rating: 4.5,
				reviews: [],
				relatedProducts: [],
				tags: ['Bags', 'Backpacks', 'Herschel', 'Little America'],
			},
		],
		tags: ['Bags', 'Backpacks', 'Herschel', 'Little America'],
	},
  {
		id: '4',
		name: 'Herschel Little America Backpack',
    slug: 'herschel',
		price: 120,
		discount: 0,
		colors: [
			{
				colorHash: '#cfa880',
				colorName: 'Brown',
			},
			{
				colorHash: '#f3c6c6',
				colorName: 'Pink',
			},
      {
        colorHash: '#e3e3e3',
        colorName: 'Gray',
      },
      {
        colorHash: '#000000',
        colorName: 'Black',
      },
		],
		images: [
			'https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-hans-backpack.jpg',
			'https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-hans-backpack-2.jpg',
		],
		thumbnails: [
			'https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-hans-backpack-300x372.jpg',
			'https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-hans-backpack-2-450x558.jpg',
		],
		quantity: 1,
		description: `
      <p>
        The Herschel Little America™ backpack is an iconic silhouette, pairing classic mountaineering style with modern functionality.
      </p>
      <ul>
        <li>Signature striped fabric liner</li>
        <li>Padded and fleece lined 15″ laptop sleeve</li>
        <li>Adjustable drawcord closure</li>
        <li>Magnetic strap closures with metal pin clips</li>
        <li>Front pocket with hidden zipper and key clip</li>
        <li>Internal media pocket with headphone port</li>
        <li>Contoured shoulder straps and air mesh back padding</li>
        <li>Classic woven label</li>
      </ul>
    `,
		category: 'essentials',
		additionalInfo: {
			weight: '0.5 kg',
			dimensions: '25 × 25 × 25 cm',
			material: 'Cotton',
			other: 'Vegan',
			size: 'Small',
		},
		serialNumber: 'N/A',
		rating: 4.5,
		reviews: [
			{
				id: 1,
				name: 'John Doe',
				avatar:
					'https://secure.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=96&d=mm&r=g',
				date: 'August 23, 2020',
				content: 'test',
				rating: 5,
			},
			{
				id: 2,
				name: 'Jane Doe',
				avatar:
					'https://secure.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=96&d=mm&r=g',
				date: 'August 23, 2020',
				content: 'test',
				rating: 4,
			},
		],
		relatedProducts: [
			{
				id: '4',
				name: 'Herschel Little America Backpack',
        slug: 'herschel-little-america-backpack',
				price: 120,
				discount: 0,
				colors: [
					{
						colorHash: '#e3e3e3',
						colorName: 'Gray',
					},
					{
						colorHash: '#000000',
						colorName: 'Black',
					},
					{
						colorHash: '#cfa880',
						colorName: 'Brown',
					},
					{
						colorHash: '#f3c6c6',
						colorName: 'Pink',
					},
				],
				images: [
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1.jpg',
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-2.jpg',
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-3.jpg',
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-4.jpg',
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-5.jpg',
				],
				thumbnails: [
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-100x100.jpg',
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-2-100x100.jpg',
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-3-100x100.jpg',
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-4-100x100.jpg',
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-5-100x100.jpg',
				],
				quantity: 1,
				description: `
          <p>
            The Herschel Little America™ backpack is an iconic silhouette, pairing classic mountaineering style with modern functionality.
          </p>
          <ul>
            <li>Signature striped fabric liner</li>
            <li>Padded and fleece lined 15″ laptop sleeve</li>
            <li>Adjustable drawcord closure</li>
            <li>Magnetic strap closures with metal pin clips</li>
            <li>Front pocket with hidden zipper and key clip</li>
          </ul>
        `,
				category: 'bags',
				additionalInfo: {
					weight: '0.5 kg',
					dimensions: '25 × 25 × 25 cm',
					material: 'Cotton',
					other: 'Vegan',
					size: 'Small',
				},
				serialNumber: 'N/A',
				rating: 4.5,
				reviews: [],
				relatedProducts: [],
				tags: ['Bags', 'Backpacks', 'Herschel', 'Little America'],
			},
		],
		tags: ['Bags', 'Backpacks', 'Herschel', 'Little America'],
	},{
		id: '5',
		name: 'Herschel Little America Backpack',
    slug: 'backpack',
		price: 120,
		discount: 0,
		colors: [],
		images: [
			'https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-hans-backpack.jpg',
			'https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-hans-backpack-2.jpg',
		],
		thumbnails: [
			'https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-hans-backpack-300x372.jpg',
			'https://savoy.nordicmade.com/wp-content/uploads/2015/08/product-hans-backpack-2-450x558.jpg',
		],
		quantity: 1,
		description: `
      <p>
        The Herschel Little America™ backpack is an iconic silhouette, pairing classic mountaineering style with modern functionality.
      </p>
      <ul>
        <li>Signature striped fabric liner</li>
        <li>Padded and fleece lined 15″ laptop sleeve</li>
        <li>Adjustable drawcord closure</li>
        <li>Magnetic strap closures with metal pin clips</li>
        <li>Front pocket with hidden zipper and key clip</li>
        <li>Internal media pocket with headphone port</li>
        <li>Contoured shoulder straps and air mesh back padding</li>
        <li>Classic woven label</li>
      </ul>
    `,
		category: 'essentials',
		additionalInfo: {
			weight: '0.5 kg',
			dimensions: '25 × 25 × 25 cm',
			material: 'Cotton',
			other: 'Vegan',
			size: 'Small',
		},
		serialNumber: 'N/A',
		rating: 4.5,
		reviews: [
			{
				id: 1,
				name: 'John Doe',
				avatar:
					'https://secure.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=96&d=mm&r=g',
				date: 'August 23, 2020',
				content: 'test',
				rating: 5,
			},
			{
				id: 2,
				name: 'Jane Doe',
				avatar:
					'https://secure.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=96&d=mm&r=g',
				date: 'August 23, 2020',
				content: 'test',
				rating: 4,
			},
		],
		relatedProducts: [
			{
				id: '4',
				name: 'Herschel Little America Backpack',
        slug: 'herschel-little-america-backpack',
				price: 120,
				discount: 0,
				colors: [
					{
						colorHash: '#e3e3e3',
						colorName: 'Gray',
					},
					{
						colorHash: '#000000',
						colorName: 'Black',
					},
					{
						colorHash: '#cfa880',
						colorName: 'Brown',
					},
					{
						colorHash: '#f3c6c6',
						colorName: 'Pink',
					},
				],
				images: [
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1.jpg',
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-2.jpg',
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-3.jpg',
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-4.jpg',
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-5.jpg',
				],
				thumbnails: [
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-100x100.jpg',
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-2-100x100.jpg',
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-3-100x100.jpg',
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-4-100x100.jpg',
					'https://savoy.nordicmade.com/wp-content/uploads/2020/08/product-1-5-100x100.jpg',
				],
				quantity: 1,
				description: `
          <p>
            The Herschel Little America™ backpack is an iconic silhouette, pairing classic mountaineering style with modern functionality.
          </p>
          <ul>
            <li>Signature striped fabric liner</li>
            <li>Padded and fleece lined 15″ laptop sleeve</li>
            <li>Adjustable drawcord closure</li>
            <li>Magnetic strap closures with metal pin clips</li>
            <li>Front pocket with hidden zipper and key clip</li>
          </ul>
        `,
				category: 'bags',
				additionalInfo: {
					weight: '0.5 kg',
					dimensions: '25 × 25 × 25 cm',
					material: 'Cotton',
					other: 'Vegan',
					size: 'Small',
				},
				serialNumber: 'N/A',
				rating: 4.5,
				reviews: [],
				relatedProducts: [],
				tags: ['Bags', 'Backpacks', 'Herschel', 'Little America'],
			},
		],
		tags: ['Bags', 'Backpacks', 'Herschel', 'Little America'],
	},
];

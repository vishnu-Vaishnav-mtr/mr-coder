export type ProjectCategory = 'shopify' | 'wordpress';
export type ProjectSubCategory = 'themes' | 'ecommerce' | 'websites' | 'plugins';

export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    link: string;
    category: ProjectCategory;
    subCategory: ProjectSubCategory;
    tech: string[];
    featured?: boolean;
}

export const projectsData: Project[] = [
    // Shopify - Themes
    {
        id: 's-theme-1',
        title: 'Bikanervala',
        description: 'Ultra-fast, accessible theme focusing on core web vitals and mobile-first experience.',
        image: '/projects/bikaner.webp',
        link: '#',
        category: 'shopify',
        subCategory: 'ecommerce',
        tech: ['Liquid', 'CSS Variables', 'Vanilla JS']
    },
    {
        id: 's-theme-2',
        title: 'Indigocosmetic',
        description: 'Ultra-fast, accessible theme focusing on core web vitals and mobile-first experience.',
        image: '/projects/indigocosmetic.webp',
        link: '#',
        category: 'shopify',
        subCategory: 'ecommerce',
        tech: ['Liquid', 'CSS Variables', 'Vanilla JS']
    },
    {
        id: 's-theme-3',
        title: 'Lucera',
        description: 'A premium, high-conversion Shopify 2.0 theme built for luxury fashion brands. Features advanced filtering and fluid animations.',
        image: '/projects/lucera.webp',
        link: '#',
        category: 'shopify',
        subCategory: 'ecommerce',
        tech: ['Liquid', 'Tailwind', 'Alpine.js'],
        featured: true
    },
    {
        id: 's-theme-4',
        title: 'Lunauk',
        description: 'A premium, high-conversion Shopify 2.0 theme built for luxury fashion brands. Features advanced filtering and fluid animations.',
        image: '/projects/lunauk.webp',
        link: '#',
        category: 'shopify',
        subCategory: 'ecommerce',
        tech: ['Liquid', 'Tailwind', 'Alpine.js'],
        featured: true
    },
    {
        id: 's-theme-5',
        title: 'Bodyboost',
        description: 'A premium, high-conversion Shopify 2.0 theme built for luxury fashion brands. Features advanced filtering and fluid animations.',
        image: '/projects/bodyboost.webp',
        link: '#',
        category: 'shopify',
        subCategory: 'ecommerce',
        tech: ['Liquid', 'Tailwind', 'Alpine.js'],
        featured: true
    },
    {
        id: 's-theme-6',
        title: 'Clickaaroo',
        description: 'A premium, high-conversion Shopify 2.0 theme built for luxury fashion brands. Features advanced filtering and fluid animations.',
        image: '/projects/clickaaro.webp',
        link: '#',
        category: 'shopify',
        subCategory: 'ecommerce',
        tech: ['Liquid', 'Tailwind', 'Alpine.js'],
        featured: true
    },
    {
        id: 's-theme-7',
        title: 'Playmaker',
        description: 'A premium, high-conversion Shopify 2.0 theme built for luxury fashion brands. Features advanced filtering and fluid animations.',
        image: '/projects/playmaker.webp',
        link: '#',
        category: 'shopify',
        subCategory: 'ecommerce',
        tech: ['Liquid', 'Tailwind', 'Alpine.js'],
        featured: true
    },
    {
        id: 's-theme-8',
        title: 'Iddunlife',
        description: 'A premium, high-conversion Shopify 2.0 theme built for luxury fashion brands. Features advanced filtering and fluid animations.',
        image: '/projects/iddunlife.webp',
        link: '#',
        category: 'shopify',
        subCategory: 'ecommerce',
        tech: ['Liquid', 'Tailwind', 'Alpine.js'],
        featured: true
    },
    // {
    //     id: 's-site-1',
    //     title: 'Urban Outfitters Clone',
    //     description: 'Complete store implementation with custom checkout extensions and loyalty program integration.',
    //     image: '/projects/shopify-site-1.jpg',
    //     link: '#',
    //     category: 'shopify',
    //     subCategory: 'themes',
    //     tech: ['Shopify Plus', 'React', 'Hydrogen']
    // },

    // WordPress - Plugins
    // {
    //     id: 'wp-plugin-1',
    //     title: 'WooCommerce Dynamic Pricing',
    //     description: 'Custom plugin for advanced bulk discount rules and tiered pricing logic.',
    //     image: '/projects/wp-plugin-1.jpg',
    //     link: '#',
    //     category: 'wordpress',
    //     subCategory: 'plugins',
    //     tech: ['PHP', 'React', 'WordPress REST API']
    // },
    // WordPress - websites
    {
        id: 'wp-website-1',
        title: 'sherecruit',
        description: 'Custom plugin for advanced bulk discount rules and tiered pricing logic.',
        image: '/projects/sherecruit.webp',
        link: '#',
        category: 'wordpress',
        subCategory: 'websites',
        tech: ['PHP', 'React', 'WordPress REST API']
    },

    {
        id: 'wp-website-2',
        title: 'schibelllaw',
        description: 'Custom plugin for advanced bulk discount rules and tiered pricing logic.',
        image: '/projects/schibelllaw.webp',
        link: '#',
        category: 'wordpress',
        subCategory: 'websites',
        tech: ['PHP', 'React', 'WordPress REST API']
    },
    {
        id: 'wp-website-3',
        title: 'grdoffplan',
        description: 'Custom plugin for advanced bulk discount rules and tiered pricing logic.',
        image: '/projects/grdoffplan.webp',
        link: '#',
        category: 'wordpress',
        subCategory: 'websites',
        tech: ['PHP', 'React', 'WordPress REST API']
    },
    {
        id: 'wp-website-4',
        title: 'signatureglobals',
        description: 'Custom plugin for advanced bulk discount rules and tiered pricing logic.',
        image: '/projects/signatureglobals.webp',
        link: '#',
        category: 'wordpress',
        subCategory: 'websites',
        tech: ['PHP', 'React', 'WordPress REST API']
    },
    {
        id: 'wp-website-5',
        title: 'ghaderi',
        description: 'Custom plugin for advanced bulk discount rules and tiered pricing logic.',
        image: '/projects/ghaderi.webp',
        link: '#',
        category: 'wordpress',
        subCategory: 'websites',
        tech: ['PHP', 'React', 'WordPress REST API']
    },
    {
        id: 'wp-website-6',
        title: 'galvin',
        description: 'Custom plugin for advanced bulk discount rules and tiered pricing logic.',
        image: '/projects/galvin.webp',
        link: '#',
        category: 'wordpress',
        subCategory: 'websites',
        tech: ['PHP', 'React', 'WordPress REST API']
    },
    {
        id: 'wp-website-7',
        title: 'lachauffers',
        description: 'Custom plugin for advanced bulk discount rules and tiered pricing logic.',
        image: '/projects/lachauffers.webp',
        link: '#',
        category: 'wordpress',
        subCategory: 'websites',
        tech: ['PHP', 'React', 'WordPress REST API']
    },
    {
        id: 'wp-website-8',
        title: 'mindframe',
        description: 'Custom plugin for advanced bulk discount rules and tiered pricing logic.',
        image: '/projects/mindframe.webp',
        link: '#',
        category: 'wordpress',
        subCategory: 'websites',
        tech: ['PHP', 'React', 'WordPress REST API']
    },
    {
        id: 'wp-website-9',
        title: 'musclefoodshop',
        description: 'Custom plugin for advanced bulk discount rules and tiered pricing logic.',
        image: '/projects/musclefoodshop.webp',
        link: '#',
        category: 'wordpress',
        subCategory: 'websites',
        tech: ['PHP', 'React', 'WordPress REST API']
    },
    {
        id: 'wp-website-10',
        title: 'scollective',
        description: 'Custom plugin for advanced bulk discount rules and tiered pricing logic.',
        image: '/projects/scollective.webp',
        link: '#',
        category: 'wordpress',
        subCategory: 'websites',
        tech: ['PHP', 'React', 'WordPress REST API']
    },
    {
        id: 'wp-website-11',
        title: 'showtimefireworks',
        description: 'Custom plugin for advanced bulk discount rules and tiered pricing logic.',
        image: '/projects/showtimefireworks.webp',
        link: '#',
        category: 'wordpress',
        subCategory: 'websites',
        tech: ['PHP', 'React', 'WordPress REST API']
    },
    {
        id: 'wp-website-12',
        title: 'GLO',
        description: 'Custom plugin for advanced bulk discount rules and tiered pricing logic.',
        image: '/projects/glo.webp',
        link: '#',
        category: 'wordpress',
        subCategory: 'websites',
        tech: ['PHP', 'React', 'WordPress REST API']
    },
];

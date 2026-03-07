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
        description: 'This is a traditional Indian sweet brands. I built on Shopify for a traditional Indian sweet brand. It focuses on emotional storytelling, a high-converting layout, and smooth performance during high-traffic seasons.',
        image: '/projects/bikaner.webp',
        link: 'https://bikanervala.ae/',
        category: 'shopify',
        subCategory: 'ecommerce',
        tech: ['Liquid', 'CSS Variables', 'Vanilla JS']
    },
    {
        id: 's-theme-2',
        title: 'Indigocosmetic',
        description: 'A clean, conversion-focused Shopify storefront built for modern skincare brands with strong emphasis on trust and mobile experience.',
        image: '/projects/indigocosmetic.webp',
        link: 'https://indigocosmetics.nl/',
        category: 'shopify',
        subCategory: 'ecommerce',
        tech: ['Liquid', 'CSS Variables', 'Vanilla JS']
    },
    {
        id: 's-theme-3',
        title: 'Lucera',
        description: 'Designed a modern furniture website with clear product layouts, strong images, and an easy browsing experience.',
        image: '/projects/lucera.webp',
        link: 'https://luceradesigno.com',
        category: 'shopify',
        subCategory: 'ecommerce',
        tech: ['Liquid', 'CSS Variables', 'Vanilla JS'],
        featured: true
    },
    {
        id: 's-theme-4',
        title: 'Lunauk',
        description: 'Developed an elegant website for a women’s fashion brand, highlighting new collections with a smooth and simple buying journey.',
        image: '/projects/lunauk.webp',
        link: 'https://lunauk.co.uk',
        category: 'shopify',
        subCategory: 'ecommerce',
        tech: ['Liquid', 'CSS Variables', 'Vanilla JS'],
        featured: true
    },
    {
        id: 's-theme-5',
        title: 'Bodyboost',
        description: 'A performance-focused supplement brand website designed to clearly present products for energy, focus, recovery, and daily health support.',
        image: '/projects/bodyboost.webp',
        link: 'https://bodyboostofficial.com',
        category: 'shopify',
        subCategory: 'ecommerce',
        tech: ['Liquid', 'CSS Variables', 'Vanilla JS'],
        featured: true
    },
    {
        id: 's-theme-6',
        title: 'Clickaaroo',
        description: 'An online gift shop focused on custom printed T-shirts and mugs, with a playful design and easy checkout experience.',
        image: '/projects/clickaaro.webp',
        link: 'https://clicka-roo.com',
        category: 'shopify',
        subCategory: 'ecommerce',
        tech: ['Liquid', 'CSS Variables', 'Vanilla JS'],
        featured: true
    },
    {
        id: 's-theme-7',
        title: 'Playmaker',
        description: 'A premium, high-conversion Shopify 2.0 theme built for luxury fashion brands. Features advanced filtering and fluid animations.',
        image: '/projects/playmaker.webp',
        link: 'https://playmaker-exiliensoft.myshopify.com',
        category: 'shopify',
        subCategory: 'ecommerce',
        tech: ['Liquid', 'CSS Variables', 'Vanilla JS'],
        featured: true
    },
    {
        id: 's-theme-8',
        title: 'Iddunlife',
        description: 'A premium, high-conversion Shopify 2.0 theme built for luxury fashion brands. Features advanced filtering and fluid animations.',
        image: '/projects/iddunlife.webp',
        link: 'https://idunnlife.com',
        category: 'shopify',
        subCategory: 'ecommerce',
        tech: ['Liquid', 'CSS Variables', 'Vanilla JS'],
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
        description: 'A purpose, website dedicated to supporting young female athletes, helping them grow through sports and reach their full potential.',
        image: '/projects/sherecruit.webp',
        link: 'https://insight-athletics.com',
        category: 'wordpress',
        subCategory: 'websites',
        tech: ['PHP', 'React', 'WordPress REST API']
    },

    {
        id: 'wp-website-2',
        title: 'schibelllaw',
        description: 'A professional website for a New Jersey law firm focused on supporting workers when injuries or disabilities affect their health, income, and daily life.',
        image: '/projects/schibelllaw.webp',
        link: 'https://schibelllaw.com',
        category: 'wordpress',
        subCategory: 'websites',
        tech: ['PHP', 'React', 'WordPress REST API']
    },
    {
        id: 'wp-website-3',
        title: 'grdoffplan',
        description: 'A real estate platform focused on new property projects in Dubai, helping investors discover off-plan opportunities and secure properties at early-stage prices.',
        image: '/projects/grdoffplan.webp',
        link: 'https://grdoffplan.com',
        category: 'wordpress',
        subCategory: 'websites',
        tech: ['PHP', 'React', 'WordPress REST API']
    },
    {
        id: 'wp-website-4',
        title: 'signatureglobals',
        description: 'A property-focused website showcasing residential projects in India, designed to help buyers easily discover new housing opportunities.',
        image: '/projects/signatureglobals.webp',
        link: 'https://www.signatureglobal.in',
        category: 'wordpress',
        subCategory: 'websites',
        tech: ['PHP', 'React', 'WordPress REST API']
    },
    {
        id: 'wp-website-5',
        title: 'ghaderi',
        description: 'A professional real estate website presenting property services in Dubai, built to reflect the company’s legacy of trust, transparency, and client-focused approach.',
        image: '/projects/ghaderi.webp',
        link: 'https://ghaderirealtydubai.com',
        category: 'wordpress',
        subCategory: 'websites',
        tech: ['PHP', 'React', 'WordPress REST API']
    },
    {
        id: 'wp-website-6',
        title: 'VFI',
        description: 'A creative platform focused on fashion and technology, supporting learning, innovation, and training in modern creative industries.',
        image: '/projects/VFI.webp',
        link: 'https://valenciafashioninstitute.com',
        category: 'wordpress',
        subCategory: 'websites',
        tech: ['PHP', 'React', 'WordPress REST API']
    },
    {
        id: 'wp-website-7',
        title: 'lachauffers',
        description: 'A straightforward car rental website in the UK that helps customers quickly find and book vehicles for their travel needs.',
        image: '/projects/lachauffers.webp',
        link: 'https://lachauffeurs.co.uk/',
        category: 'wordpress',
        subCategory: 'websites',
        tech: ['PHP', 'React', 'WordPress REST API']
    },
    {
        id: 'wp-website-8',
        title: 'mindframe',
        description: 'A focused website for a sports psychology consultancy, presenting performance coaching and research-based methods in a clear and accessible way..',
        image: '/projects/mindframe.webp',
        link: 'https://mindframeperformance.com',
        category: 'wordpress',
        subCategory: 'websites',
        tech: ['PHP', 'React', 'WordPress REST API']
    },
    {
        id: 'wp-website-9',
        title: 'musclefoodshop',
        description: 'An online store for sports nutrition and health supplements, offering trusted global brands for athletes, fitness enthusiasts, and people focused on healthy living.',
        image: '/projects/musclefoodshop.webp',
        link: 'https://musclefoodshop.com',
        category: 'wordpress',
        subCategory: 'websites',
        tech: ['PHP', 'React', 'WordPress REST API']
    },
    {
        id: 'wp-website-10',
        title: 'scollective',
        description: 'A professional website for a financial advisory team focused on collaboration, growth, and helping clients build a better financial future.',
        image: '/projects/scollective.webp',
        link: 'https://scollective.com.sg',
        category: 'wordpress',
        subCategory: 'websites',
        tech: ['PHP', 'React', 'WordPress REST API']
    },
    {
        id: 'wp-website-11',
        title: 'showtimefireworks',
        description: 'A vibrant online store for a London-based fireworks shop, showcasing high-quality fireworks for celebrations, events, and unforgettable displays.',
        image: '/projects/showtimefireworks.webp',
        link: 'https://showtimefireworks.co.uk',
        category: 'wordpress',
        subCategory: 'websites',
        tech: ['PHP', 'React', 'WordPress REST API']
    },
    {
        id: 'wp-website-12',
        title: 'GLO',
        description: 'A professional website for a financial advisory team built around leadership, shared values, and a mission to positively impact thousands of lives.',
        image: '/projects/glo.webp',
        link: 'https://jlorg.com',
        category: 'wordpress',
        subCategory: 'websites',
        tech: ['PHP', 'React', 'WordPress REST API']
    },
        {
        id: 'wp-website-13',
        title: 'Aerolight',
        description: 'Aerolight Srl  positions itself as an innovative Italian company in the growing engineering sector, i.e., engineering applied to high-tech indoor cultivation.',
        image: '/projects/aerolight.webp',
        link: 'https://aerolight.it',
        category: 'wordpress',
        subCategory: 'websites',
        tech: ['PHP', 'React', 'WordPress REST API']
    },
        {
        id: 'wp-website-14',
        title: 'AfricaTimes',
        description: 'A digital magazine covering business, culture, and inspiring stories from across Africa, highlighting leaders, entrepreneurs, and global developments.',
        image: '/projects/africaTimes.webp',
        link: 'https://africatimesmagazine.com',
        category: 'wordpress',
        subCategory: 'websites',
        tech: ['PHP', 'React', 'WordPress REST API']
    },
    {
        id: 'wp-website-15',
        title: 'galvin',
        description: 'A professional website for a UK-based marine engineering company providing diesel engine support, inspections, and repair services for marine and offshore industries worldwide.',
        image: '/projects/galvin.webp',
        link: 'https://www.galvinmarine.com',
        category: 'wordpress',
        subCategory: 'websites',
        tech: ['PHP', 'React', 'WordPress REST API']
    },
];

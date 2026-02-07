export const profile = {
	fullName: 'Giorgos Leloudas',
	title: 'Senior Researcher',
	institute: 'DTU Space',
    sidebarLabel: "Dr. Giorgos Leloudas",
	author_name: '', // Author name to be highlighted in the papers section
	research_areas: [
		 { title: 'Supernovae', description: 'Stars that explode', field: 'physics', slug: 'supernovae', icon: '/images/research/supernovae.jpg',},
         { title: 'Tidal Disruption Events', description: 'Stars that get destroyed by black holes', field: 'physics' , slug: 'tde', icon: '/images/research/tde.jpg',},
         { title: 'Transient surveys', description: 'Large projects to find transient phenomena', field: 'physics' , slug: 'surveys', icon: '/images/research/surveys2.png',},
         { title: 'Gravitational waves', description: 'Their electromagnetic counterparts', field: 'physics' , slug: 'GW', icon: '/images/research/BNSgold.jpg',},
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'giorgos@space.dtu.dk',
	linkedin: '',
	x: '',
	bluesky: '',
	github: 'https://github.com/AstroGiorgos',
	gitlab: '',
	scholar: '',
	inspire: '',
	arxiv: '',
	orcid: 'https://orcid.org/0000-0002-8597-0756',
}

export const template = {
	website_url: 'https://localhost:4321', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'light', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'dark', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Astro Academia',
	default_description: 'Astro Academia is a template for academic websites.',
	default_image: '/images/astro-academia.png',
}

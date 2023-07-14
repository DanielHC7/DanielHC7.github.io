// gitprofile.config.js

const config = {
  github: {
    username: 'danielhc7', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 2, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'daniel-huertas-',
    twitter: '',
    mastodon: '',
    facebook: 'Daniel Huertas',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'dhuertasc@yahoo.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'R',
    'MySQL',
    'Power BI',
    'Tableau Desktop',
    'VMWare',
    'Fusion Sphere',
    'Linux',
  ],
  experiences: [
    {
      company: 'America Movil',
      position: 'Sr Network Planning Engineer',
      from: 'August 2008',
      to: 'December 2021',
      companyLink: 'https://www.claro.com.pe',
    },
    {
      company: 'Telecom Italia Mobile',
      position: 'Sr VAS Network Planning Engineer',
      from: 'February 2001',
      to: 'August 2008',
      companyLink: 'https://www.tim.it',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Durham College',
      degree: 'Data Analytics for Business Decision Making',
      from: 'January 2023',
      to: 'August 2023',
    },
    {
      institution: 'Humber College',
      degree: 'Wireless Telecommunications',
      from: 'January 2022',
      to: 'August 2022',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Load Balancers in Cloud',
      description:
        'Implementation of Application Load Balancers over AWS and Azure clouds. August 2022',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Asterisk using Virtualbox',
      description:
        'Implementation of Asterisk server over a Virtual Machine using Virtualbox. February 2022',
      imageUrl: ' https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

};

export default config;

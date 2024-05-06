// Config file for generating assets and usage docs from vectors
const config = {
  'bike_worcester-logo': {
    // Sub-directory in src
    name: 'Bike Worcester logo', // Human readable name
    thumbnail: 'square',
    variants: [
      {
        file: 'square', // The base filename of the source vector file (without extension)
        name: 'Square', // Human readable name (displayed in the docs)
        sizes: [512, 1024, 2048], // Sizes to generate (in pixels)
        scalable: true, // Produce a scalable vector version - this removes fixed sizes from svg file
        description:
          'Square logo for general use (for smaller sized icons use Badge).', // Description of the variant (displayed in the docs)
        mono: true, // Produce a monochrome version of the logo (src must have a -mono.svg version available)
      },
      {
        file: 'wide',
        name: 'Wide',
        sizes: [512, 1024, 2048],
        scalable: true,
        description: 'Wide logo for letterheads and headers.',
        mono: true,
      },
      {
        file: 'badge',
        name: 'Badge',
        sizes: [16, 32, 64, 512],
        description:
          'Smaller sized logo where ledgibility is difficult (website favicons, for example), or if logo appears near to "Bike Worcester" text.',
      },
      {
        file: 'thumbnail',
        name: 'Thumbnail',
        sizes: [1200],
        description: 'Thumbnail for social sharing and website/blog use',
      },
      {
        file: 'titles-black',
        name: 'Titles on black',
        sizes: [1920, 3840],
        description: 'Wide logo on black for 16:9 video titles.',
      },
      {
        file: 'titles-white',
        name: 'Titles on white',
        sizes: [1920, 3840],
        description: 'Wide logo on white for 16:9 video titles.',
      },
    ],
    colours: {
      // Keys are the colours used in, and complimentary to, the logo (in order of priority, without # prefix)
      // Values are the background colours to contrast the key colour
      '3E5062': 'E3E3E3', // logo base
      '81CA9F': '1C1C1C', // logo fore
      '623E62': 'E3E3E3', // colour 1 base
      '3E623E': 'E3E3E3', // colour 3 base
      '8187CA': '1C1C1C', // colour 1 fore
      CA81AC: '1C1C1C', // colour 2 fore
      CAC381: '1C1C1C', // colour 3 fore
      '1C1C1C': 'E3E3E3',
      E3E3E3: '1C1C1C',
    },
    typography: [
      {
        name: 'Logo',
        font: 'Jost Extra Bold',
        link: 'https://fonts.google.com/specimen/Jost',
      },
    ],
  },
  'bikebus-logo': {
    name: 'BikeBus logo',
    thumbnail: 'badge',
    variants: [
      {
        file: 'full',
        name: 'Badge and text',
        sizes: [512, 1024, 2048],
        scalable: true,
        description: 'Full logo for general use, space permitting.',
        mono: true,
      },
      {
        file: 'text',
        name: 'Text only',
        sizes: [512, 1024, 2048],
        scalable: true,
        description:
          'Text only logo for use where space is limited or for website header bars.',
        mono: true,
      },
      {
        file: 'tall',
        name: 'Tall text only',
        sizes: [512, 1024, 2048],
        multicolours: true,
        scalable: true,
        description: 'Text only logo for narrow spaces.',
      },
      {
        file: 'ribbon',
        name: 'Ribbon for Bike Bus medals',
        sizes: [],
        multicolours: true,
        scalable: true,
        description:
          'Tileable ribbon design for use with end-of-year Bike Bus medals.',
      },
      {
        file: 'medal',
        name: 'Medal design for Bike Bus medals',
        sizes: [],
        multicolours: true,
        scalable: true,
        description: 'Medal design for end-of-year Bike Bus medals.',
      },
      {
        file: 'badge',
        name: 'Badge only',
        sizes: [16, 32, 64, 512],
        description:
          'Smaller sized logo where ledgibility is difficult (website favicons, for example), or if logo appears near to "BikeBus" text.',
        scalable: true,
        mono: true,
      },
      {
        file: 'curved',
        name: 'Badge and text on a curved baseline',
        sizes: [512, 1024, 2048],
        scalable: true,
        description:
          'Full logo for around the edges of badges and circular signs.',
        mono: true,
      },
      {
        file: 'titles-black',
        name: 'Titles on black',
        sizes: [1920, 3840],
        description: 'Lighter colour logo on black for 16:9 video titles.',
      },
      {
        file: 'titles-white',
        name: 'Titles on white',
        sizes: [1920, 3840],
        description: 'Darker colour logo on white for 16:9 video titles.',
      },
      {
        file: 'flag',
        name: 'Flag',
        sizes: [3840],
        scalable: true,
        description: 'Flag design for use on Bike Buses.',
        multicolours: true,
      },
      {
        file: 'banner',
        name: 'Banner',
        sizes: [3840],
        scalable: true,
        description: 'Banner design for displaying outside schools.',
        multicolours: true,
      },
      {
        file: 'stop-sign',
        name: 'Stop Sign',
        sizes: [1920, 3840],
        description: 'Stop signs design',
        multicolours: true,
      },
    ],
    colours: {
      // Keys are the colours used in, and complimentary to, the logo (in order of priority, without # prefix)
      // Values are the background colours to contrast the key colour
      '3E5062': 'E3E3E3', // logo base
      '81CA9F': '1C1C1C', // logo fore
      '623E62': 'E3E3E3', // colour 1 base
      '3E623E': 'E3E3E3', // colour 3 base
      '8187CA': '1C1C1C', // colour 1 fore
      CA81AC: '1C1C1C', // colour 2 fore
      CAC381: '1C1C1C', // colour 3 fore
      '1C1C1C': 'E3E3E3',
      E3E3E3: '1C1C1C',
    },
    typography: [
      {
        name: 'Logo',
        font: 'Jost Extra Bold',
        link: 'https://fonts.google.com/specimen/Jost',
      },
    ],
  },
  'critical_mass-logo': {
    name: 'Critical Mass logo',
    thumbnail: 'full',
    variants: [
      {
        file: 'full',
        name: 'Default sticker',
        sizes: [512, 1024, 2048],
        scalable: true,
        description: 'The default sticker design in Bike Worcester colours',
      },
      {
        file: 'sticker',
        name: 'Sticker in various colours',
        sizes: [512, 1024, 2048],
        scalable: true,
        description:
          'Various colour options for the sticker design, for use on the standard BW background.',
        multicolours: true,
      },
      {
        file: 'sticker-2col',
        name: 'Sticker in two colours',
        sizes: [512, 1024, 2048],
        description:
          'Two colour sticker design for use on coloured backgrounds.',
        scalable: true,
        multicolours: true,
      },
      {
        file: 'sticker-mono',
        name: 'Sticker in monochrome',
        sizes: [512, 1024, 2048],
        description:
          'Monochrome sticker design for use on coloured backgrounds.',
        scalable: true,
        multicolours: true,
      },
      {
        file: 'titles-black',
        name: 'Titles on black',
        sizes: [1920, 3840],
        description: 'Lighter colour logo on black for 16:9 video titles.',
      },
      {
        file: 'titles-white',
        name: 'Titles on white',
        sizes: [1920, 3840],
        description: 'Darker colour logo on white for 16:9 video titles.',
      },
    ],
    colours: {
      // Keys are the colours used in, and complimentary to, the logo (in order of priority, without # prefix)
      // Values are the background colours to contrast the key colour
      '3E5062': 'FFFFFF', // logo base
      '81CA9F': '1C1C1C', // logo fore
      '623E62': 'FFFFFF', // colour 1 base
      '3E623E': 'FFFFFF', // colour 3 base
      '8187CA': '1C1C1C', // colour 1 fore
      CA81AC: '1C1C1C', // colour 2 fore
      CAC381: '1C1C1C', // colour 3 fore
      '1C1C1C': 'FFFFFF',
      FFFFFF: '1C1C1C',
    },
    typography: [
      {
        name: 'Logo',
        font: 'Jost Extra Bold',
        link: 'https://fonts.google.com/specimen/Jost',
      },
    ],
  },
  'kidical_mass-logo': {
    name: 'Kidical Mass logo',
    thumbnail: 'sticker',
    variants: [
      {
        file: 'sticker',
        name: 'Sticker using various colour combinations',
        sizes: [512, 1024, 2048],
        scalable: true,
        multicolours: true,
      },
    ],
    colours: {
      // Keys are the colours used in, and complimentary to, the logo (in order of priority, without # prefix)
      // Values are the background colours to contrast the key colour
      CA81AC: '623E62', // logo base
      CAC381: '623E62', // logo fore
      '81CA9f': '3E5062', // colour 1 base
      '000000': '8187CA',
      FFFFFF: '3E5062', // colour 1 fore
    },
    typography: [
      {
        name: 'Logo',
        font: 'Jost Extra Bold',
        link: 'https://fonts.google.com/specimen/Jost',
      },
    ],
  },
};

Object.keys(config).forEach((dir) => {
  config[dir].colourList = Object.keys(config[dir].colours);
});

module.exports = config;

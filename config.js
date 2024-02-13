// Config file for generating assets and usage docs from vectors

module.exports = {
  'bike_worcester-logo': {
    // Sub-directory in src
    name: 'Bike Worcester logo', // Human readable name
    thumbnail: 'square',
    variants: [
      {
        file: 'square',
        name: 'Square',
        sizes: [512, 1024, 2048],
        scalable: true, // Produce a scalable vector version - this removes fixed sizes from svg file
        description:
          'Square logo for general use (for smaller sized icons use Badge).',
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
    colours: [
      // Colours used in, and complimentary to, the logo (in order of priority, without # prefix)
      '3E5062',
      '81CA9F',
      // additional palette colours
      '623E62', // colour 1 base
      '62503E', // colour 2 base
      '3E623E', // colour 3 base
      '8187CA', // colour 1 fore
      'CA81AC', // colour 2 fore
      'CAC381', // colour 3 fore
    ],
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
      ...['violet', 'pink', 'yellow', 'purple', 'green'].map((colour) => ({
        file: `${colour}-banner`,
        name: `Banner ${colour}`,
        sizes: [],
        description: `Banner design in ${colour} for displaying outside schools.`,
        copy: true,
      })),
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
    colours: [
      // Colours used in, and complimentary to, the logo (in order of priority, without # prefix)
      '3E5062', // logo base
      '81CA9F', // logo fore
      '623E62', // colour 1 base
      '3E623E', // colour 3 base
      '8187CA', // colour 1 fore
      'CA81AC', // colour 2 fore
      'CAC381', // colour 3 fore
    ],
    typography: [
      {
        name: 'Logo',
        font: 'Jost Extra Bold',
        link: 'https://fonts.google.com/specimen/Jost',
      },
    ],
  },
};

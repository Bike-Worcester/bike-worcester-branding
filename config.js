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
    ],
    colours: [
      // Colours used in, and complimentary to, the logo (in order of priority, without # prefix)
      '3E5062',
      '81CA9F',
    ],
  },
};

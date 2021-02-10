const { date } = require('faker');

exports.seed = function (knex) {
  // Inserts seed entries
  return knex('stores').insert([
    {
      owner_id: '00ulthapbErVUwVJy4x6',
      name: 'SuperStore Rug Emporium',
      description: 'Rugs, Rugs, Rugs! Discount Rugs, Fine Rugs, Bathroom Rugs!',
      location: {
        address_components: [
          { long_name: '945', short_name: '945', types: ['street_number'] },
          {
            long_name: 'Lombard Street',
            short_name: 'Lombard St',
            types: ['route'],
          },
          {
            long_name: 'Russian Hill',
            short_name: 'Russian Hill',
            types: ['neighborhood', 'political'],
          },
          {
            long_name: 'San Francisco',
            short_name: 'SF',
            types: ['locality', 'political'],
          },
          {
            long_name: 'San Francisco County',
            short_name: 'San Francisco County',
            types: ['administrative_area_level_2', 'political'],
          },
          {
            long_name: 'California',
            short_name: 'CA',
            types: ['administrative_area_level_1', 'political'],
          },
          {
            long_name: 'United States',
            short_name: 'US',
            types: ['country', 'political'],
          },
          { long_name: '94133', short_name: '94133', types: ['postal_code'] },
          {
            long_name: '2217',
            short_name: '2217',
            types: ['postal_code_suffix'],
          },
        ],
        adr_address:
          '<span class="street-address">945 Lombard St</span>, <span class="locality">San Francisco</span>, <span class="region">CA</span> <span class="postal-code">94133-2217</span>, <span class="country-name">USA</span>',
        formatted_address: '945 Lombard St, San Francisco, CA 94133, USA',
        geometry: {
          location: { lat: 37.801948, lng: -122.417032 },
          viewport: {
            south: 37.80078406970849,
            west: -122.4184177802915,
            north: 37.80348203029149,
            east: -122.4157198197085,
          },
        },
        icon:
          'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png',
        name: '945 Lombard St',
        place_id: 'ChIJu6a38uWAhYAReuQWfAB14zY',
        plus_code: {
          compound_code: 'RH2M+Q5 Russian Hill, San Francisco, CA, USA',
          global_code: '849VRH2M+Q5',
        },
        reference: 'ChIJu6a38uWAhYAReuQWfAB14zY',
        types: ['street_address'],
        url:
          'https://maps.google.com/?q=945+Lombard+St,+San+Francisco,+CA+94133,+USA&ftid=0x808580e5f2b7a6bb:0x36e375007c16e47a',
        utc_offset: -480,
        vicinity: 'San Francisco',
        html_attributions: [],
        utc_offset_minutes: -480,
      },
      phone_number: 5554443333,
      branding_image: '',
      operating_hours: '',
      created_at: date.past(),
    },
    {
      owner_id: '00ultx74kMUmEW8054x6',
      name: 'Nicholas Mullen',
      description:
        'Selling my personal Junk: Hawaiian shirts, mixed ammunition, unmatched fine china.',
      location: {
        address_components: [
          {
            long_name: 'San Diego Avenue',
            short_name: 'San Diego Ave',
            types: ['route'],
          },
          {
            long_name: 'San Diego',
            short_name: 'San Diego',
            types: ['locality', 'political'],
          },
          {
            long_name: 'San Diego County',
            short_name: 'San Diego County',
            types: ['administrative_area_level_2', 'political'],
          },
          {
            long_name: 'California',
            short_name: 'CA',
            types: ['administrative_area_level_1', 'political'],
          },
          {
            long_name: 'United States',
            short_name: 'US',
            types: ['country', 'political'],
          },
        ],
        adr_address:
          '<span class="street-address">San Diego Ave</span>, <span class="locality">San Diego</span>, <span class="region">CA</span>, <span class="country-name">USA</span>',
        formatted_address: 'San Diego Ave, San Diego, CA, USA',
        geometry: {
          location: { lat: 32.7477893, lng: -117.1913686 },
          viewport: {
            south: 32.7464403197085,
            west: -117.1927175802915,
            north: 32.7491382802915,
            east: -117.1900196197085,
          },
        },
        icon:
          'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png',
        name: 'San Diego Avenue',
        place_id:
          'EiFTYW4gRGllZ28gQXZlLCBTYW4gRGllZ28sIENBLCBVU0EiLiosChQKEgkTisMRJ6vegBEFR2wzou6mBBIUChIJSx6SrQ9T2YARed8V_f0hOg0',
        reference:
          'EiFTYW4gRGllZ28gQXZlLCBTYW4gRGllZ28sIENBLCBVU0EiLiosChQKEgkTisMRJ6vegBEFR2wzou6mBBIUChIJSx6SrQ9T2YARed8V_f0hOg0',
        types: ['route'],
        url:
          'https://maps.google.com/?q=San+Diego+Ave,+San+Diego,+CA,+USA&ftid=0x80deab2711c38a13:0x4a6eea2336c4705',
        utc_offset: -480,
        vicinity: 'San Diego',
        html_attributions: [],
        utc_offset_minutes: -480,
      },
      phone_number: 5551234567,
      branding_image: '',
      operating_hours: '',
      created_at: date.past(),
    },
    {
      owner_id: '00ultwew80Onb2vOT4x6',
      name: "Bezo's Enterprises",
      description: 'Books, Rockets, Washington News Media',
      location: {
        address_components: [
          { long_name: '446', short_name: '446', types: ['street_number'] },
          {
            long_name: 'South Los Angeles Street',
            short_name: 'S Los Angeles St',
            types: ['route'],
          },
          {
            long_name: 'Downtown Los Angeles',
            short_name: 'Downtown Los Angeles',
            types: ['neighborhood', 'political'],
          },
          {
            long_name: 'Los Angeles',
            short_name: 'Los Angeles',
            types: ['locality', 'political'],
          },
          {
            long_name: 'Los Angeles County',
            short_name: 'Los Angeles County',
            types: ['administrative_area_level_2', 'political'],
          },
          {
            long_name: 'California',
            short_name: 'CA',
            types: ['administrative_area_level_1', 'political'],
          },
          {
            long_name: 'United States',
            short_name: 'US',
            types: ['country', 'political'],
          },
          { long_name: '90013', short_name: '90013', types: ['postal_code'] },
        ],
        adr_address:
          '<span class="street-address">446 S Los Angeles St</span>, <span class="locality">Los Angeles</span>, <span class="region">CA</span> <span class="postal-code">90013</span>, <span class="country-name">USA</span>',
        formatted_address: '446 S Los Angeles St, Los Angeles, CA 90013, USA',
        geometry: {
          location: { lat: 34.04609440000001, lng: -118.2471536 },
          viewport: {
            south: 34.0448251697085,
            west: -118.2486212302915,
            north: 34.0475231302915,
            east: -118.2459232697085,
          },
        },
        icon:
          'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png',
        name: '446 S Los Angeles St',
        place_id:
          'EjA0NDYgUyBMb3MgQW5nZWxlcyBTdCwgTG9zIEFuZ2VsZXMsIENBIDkwMDEzLCBVU0EiMRIvChQKEgmnVh76NcbCgBEr2qqfv_lwShC-AyoUChIJu7YNmMzHwoARN4vu7ftWMRw',
        reference:
          'EjA0NDYgUyBMb3MgQW5nZWxlcyBTdCwgTG9zIEFuZ2VsZXMsIENBIDkwMDEzLCBVU0EiMRIvChQKEgmnVh76NcbCgBEr2qqfv_lwShC-AyoUChIJu7YNmMzHwoARN4vu7ftWMRw',
        types: ['street_address'],
        url:
          'https://maps.google.com/?q=446+S+Los+Angeles+St,+Los+Angeles,+CA+90013,+USA&ftid=0x80c2c635fa1e56a7:0x95c957a03ead5c33',
        utc_offset: -480,
        vicinity: 'Los Angeles',
        html_attributions: [],
        utc_offset_minutes: -480,
      },
      phone_number: 5559876543,
      branding_image: '',
      operating_hours: '',
      created_at: date.past(),
    },
  ]);
};

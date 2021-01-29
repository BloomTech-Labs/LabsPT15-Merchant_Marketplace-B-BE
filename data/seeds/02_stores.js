const { date } = require('faker');

exports.seed = function (knex) {
  // Inserts seed entries
  return knex('stores').insert([
    {
      id: 0,
      owner_id: '00ulthapbErVUwVJy4x6',
      name: 'SuperStore Rug Emporium',
      description: 'Rugs, Rugs, Rugs! Discount Rugs, Fine Rugs, Bathroom Rugs!',
      location: '100 Davidson Street, Maine',
      phone_number: 5554443333,
      branding_image: '',
      operating_hours: '',
      created_at: date.past(),
    },
    {
      id: 1,
      owner_id: '00ultx74kMUmEW8054x6',
      name: 'Nicholas Mullen',
      description:
        'Selling my personal Junk: Hawaiian shirts, mixed ammunition, unmatched fine china.',
      location: '35 Sampsonite Avenue, Lingdon Nevada, 22556',
      phone_number: 5551234567,
      branding_image: '',
      operating_hours: '',
      created_at: date.past(),
    },
    {
      id: 2,
      owner_id: '00ultwew80Onb2vOT4x6',
      name: "Bezo's Enterprises",
      description: 'Books, Rockets, Washington News Media',
      location: '1378 California Drive, California, 0001',
      phone_number: 5559876543,
      branding_image: '',
      operating_hours: '',
      created_at: date.past(),
    },
  ]);
};

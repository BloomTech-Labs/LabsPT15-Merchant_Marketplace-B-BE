exports.seed = function (knex) {
  // Inserts seed entries
  return knex('stores').insert([
    {
      id: 0,
      owner_id:'00ulthapbErVUwVJy4x6',
      name: 'SuperStore Rug Emporium',
      description: 'Rugs, Rugs, Rugs! Discount Rugs, Fine Rugs, Bathroom Rugs!',
      location: '100 Davidson Street, Maine',
      phone_number: '(555) 444-3333',
      branding_image:'',
      operating_hours:'',
      created_at:''
    },
    {
      id: 1,
      owner_id:1,
      name: 'Nicholas Mullen',
      description: 'Selling my personal Junk: Hawaiian shirts, mixed ammunition, unmatched fine china.',
      location: '35 Sampsonite Avenue, Lingdon Nevada, 22556',
      phone_number: '(555) 123-4567',
      branding_image:'',
      operating_hours:'',
      created_at:''
    },
    {
      id: 2,
      owner_id:2,
      name: 'Bezo\'s Enterprises',
      description: 'Books, Rockets, Washington News Media',
      location: '1378 California Drive, California, 0001',
      phone_number: '(555) 987-6543',
      branding_image:'',
      operating_hours:'',
      created_at:''
    },
  ]);
};

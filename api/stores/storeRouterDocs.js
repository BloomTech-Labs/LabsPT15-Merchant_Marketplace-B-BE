/**
 * @swagger
 *
 * /store:
 *  get:
 *    description: Returns a list of stores
 *    summary: Get a list of all stores
 *    security:
 *      - okta: []
 *    tags:
 *      - store
 *    responses:
 *      200:
 *        description: array of stores
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              example:
 *                - owner_id: '00ulthapbErVUwVJy4x6'
 *                  name: 'SuperStore Rug Emporium'
 *                  description:
 *                          'Rugs, Rugs, Rugs! Discount Rugs, Fine Rugs, Bathroom Rugs!'
 *                  location:
 *                          'test location'
 *                  phone_number: 5554443333
 *                  images: []
 *                  operating_hours: ''
 *                  created_at: 1613414161
 *      401:
 *        $ref: '#/components/responses/UnauthorizedError'
 *      403:
 *        $ref: '#/components/responses/UnauthorizedError'
 */

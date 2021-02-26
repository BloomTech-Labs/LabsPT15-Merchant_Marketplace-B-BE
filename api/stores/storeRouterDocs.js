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
 *                  description: 'Rugs, Rugs, Rugs! Discount Rugs, Fine Rugs, Bathroom Rugs!'
 *                  location: 'geoJSON object'
 *                  phone_number: 5554443333
 *                  images: []
 *                  operating_hours: ''
 *                  created_at: 1613414161
 *      401:
 *        $ref: '#/components/responses/UnauthorizedError'
 *      403:
 *        $ref: '#/components/responses/UnauthorizedError'
 *
 *  post:
 *    description: Create a store
 *    summary: Create a store
 *    security:
 *      - okta: []
 *    tags:
 *      - store
 *    responses:
 *      200:
 *        description: created store object
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              example:
 *                - name: 'SuperStore Rug Emporium'
 *                  description: 'Rugs, Rugs, Rugs! Discount Rugs, Fine Rugs, Bathroom Rugs!'
 *                  location: 'geoJSON object'
 *                  phone_number: 5554443333
 *                  images: []
 *                  operating_hours: ''
 *      401:
 *        $ref: '#/components/responses/UnauthorizedError'
 *      403:
 *        $ref: '#/components/responses/UnauthorizedError'
 *
 * /store/{storeid}:
 *  get:
 *    description: Returns a store by ID
 *    summary: Get a store by ID
 *    security:
 *      - okta: []
 *    tags:
 *      - store
 *    responses:
 *      200:
 *        description: single store information
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              example:
 *                - id: 1
 *                  owner_id: '00ulthapbErVUwVJy4x6'
 *                  name: 'SuperStore Rug Emporium'
 *                  description: 'Rugs, Rugs, Rugs! Discount Rugs, Fine Rugs, Bathroom Rugs!'
 *                  location: 'geoJSON object'
 *                  phone_number: 5554443333
 *                  images: []
 *                  operating_hours: ''
 *                  created_at: 1613414161
 *      401:
 *        $ref: '#/components/responses/UnauthorizedError'
 *      403:
 *        $ref: '#/components/responses/UnauthorizedError'
 *
 *  put:
 *    description: Use a store id to edit info
 *    summary: Edit store info
 *    security:
 *      - okta: []
 *    tags:
 *      - store
 *    responses:
 *      200:
 *        description: single store information
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              example:
 *                - name: 'SuperStore Rug Emporium'
 *                  description: 'Rugs, Rugs, Rugs! Discount Rugs, Fine Rugs, Bathroom Rugs!'
 *                  location: 'geoJSON object'
 *                  phone_number: 5554443333
 *                  images: []
 *                  operating_hours: ''
 *      401:
 *        $ref: '#/components/responses/UnauthorizedError'
 *      403:
 *        $ref: '#/components/responses/UnauthorizedError'
 *
 *  delete:
 *    description: Delete a store
 *    summary: Delete a store
 *    security:
 *      - okta: []
 *    tags:
 *      - store
 *    responses:
 *      200:
 *        description: deleted store information
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              example:
 *                - name: 'SuperStore Rug Emporium'
 *                  description: 'Rugs, Rugs, Rugs! Discount Rugs, Fine Rugs, Bathroom Rugs!'
 *                  location: 'geoJSON object'
 *                  phone_number: 5554443333
 *                  images: []
 *                  operating_hours: ''
 *      401:
 *        $ref: '#/components/responses/UnauthorizedError'
 *      403:
 *        $ref: '#/components/responses/UnauthorizedError'
 *
 * /store/{storeid}/products:
 *  get:
 *    description: Returns a stores products by ID
 *    summary: Get a stores products by ID
 *    security:
 *      - okta: []
 *    tags:
 *      - store
 *    responses:
 *      200:
 *        description: single store products information
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              example:
 *                - id: 1
 *                  store_id: 1
 *                  name: 'Persian Rug'
 *                  description: 'Fancy Rug! Great Pattern!'
 *                  price: 3400000
 *                  stock_quantity: 3
 *                  images: []
 *                  created_at: 1613414161
 *                  published: true
 *                  delivery: false
 *                  pickup: true
 *      401:
 *        $ref: '#/components/responses/UnauthorizedError'
 *      403:
 *        $ref: '#/components/responses/UnauthorizedError'
 *
 *
 */

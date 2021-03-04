/**
 * @swagger
 *
 * /products/:
 *  post:
 *    description: Create a product
 *    summary: Create a product
 *    security:
 *      - okta: []
 *    tags:
 *      - products
 *    responses:
 *      200:
 *        description: product object
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
 * /products/{productid}:
 *  get:
 *    description: Returns a product
 *    summary: Get a product by ID
 *    security:
 *      - okta: []
 *    tags:
 *      - products
 *    responses:
 *      200:
 *        description: product object
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
 *  put:
 *    description: Edit a product
 *    summary: Edit a product
 *    security:
 *      - okta: []
 *    tags:
 *      - products
 *    responses:
 *      200:
 *        description: product object
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
 *  delete:
 *    description: Delete a product
 *    summary: Delete a product
 *    security:
 *      - okta: []
 *    tags:
 *      - products
 *    responses:
 *      200:
 *        description: product object
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
 */

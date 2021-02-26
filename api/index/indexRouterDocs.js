/**
 * @swagger
 * /api:
 *  get:
 *    description: root path returning status
 *    tags:
 *      - status
 *    produces:
 *      - applicaiton/json
 *    responses:
 *      200:
 *        description: status is up
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                api:
 *                 example: 'up'
 *                timestamp:
 *                  type: number
 *                  example: 1614310904556
 */

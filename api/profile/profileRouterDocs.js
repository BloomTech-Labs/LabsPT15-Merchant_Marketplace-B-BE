/**
 * @swagger
 *
 * /profiles:
 *  get:
 *    description: Returns a list of profiles
 *    summary: Get a list of all profiles
 *    security:
 *      - okta: []
 *    tags:
 *      - profile
 *    responses:
 *      200:
 *        description: array of profiles
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              example:
 *                - id: '00uhjfrwdWAQvD8JV4x6'
 *                  first_name: 'Frank'
 *                  last_name: 'Martinez'
 *                  email: 'frank@example.com'
 *                  created_at: 1614233312843
 *                  location: '6422 Savanna Common'
 *                  avatar_url: 'test'
 *                  bio: 'My name is Frank and this is my store'
 *      401:
 *        $ref: '#/components/responses/UnauthorizedError'
 *      403:
 *        $ref: '#/components/responses/UnauthorizedError'
 */

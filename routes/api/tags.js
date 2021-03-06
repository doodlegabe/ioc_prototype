const Tags = require('../../models/tags')
    , writeResponse = require('../../helpers/response').writeResponse
    , writeError = require('../../helpers/response').writeError
    , loginRequired = require('../../middlewares/loginRequired')
    , dbUtils = require('../../neo4j/dbUtils')
    , _ = require('lodash');

/**
 * @swagger
 * definition:
 *   Tag:
 *     type: object
 *     properties:
 *       id:
 *         type: string
 *       url:
 *         type: string
 *       classificationData:
 *          type: string
 */
/**
 * @swagger
 * /api/v0/tags/create:
 *   post:
 *     tags:
 *     - tags
 *     description: Creates a new tag
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         type: object
 *         schema:
 *           properties:
 *              word:
 *                  type:string
 *     responses:
 *       201:
 *         description: Data
 *       400:
 *         description: Error message(s)
 */
exports.create = function (req, res, next) {
    const word = _.get(req.body,'word');
    Tags.create(dbUtils.getSession(req),word)
        .then(response => writeResponse(res, response, 201))
        .catch(next);
};
/**
 * @swagger
 * /api/v0/tags/createFromImage:
 *   post:
 *     tags:
 *     - tags
 *     description: Creates a new tag in association with a newly uploaded image
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         type: object
 *         schema:
 *           properties:
 *              word:
 *                  type:string
 *     responses:
 *       201:
 *         description: Data
 *       400:
 *         description: Error message(s)
 */
exports.createFromImage = function (req, res, next) {
    const word = _.get(req.body,'word');
    const imageId = _.get(req.body,'imageId');
    Tags.createFromImage(dbUtils.getSession(req),word,imageId)
        .then(response => writeResponse(res, response, 201))
        .catch(next);
};
/**
 * @swagger
 * /api/v0/tags/update:
 *   post:
 *     tags:
 *     - tags
 *     description: Updates an tag
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         type: object
 *         schema:
 *           properties:
 *     responses:
 *       201:
 *         description: Data
 *       400:
 *         description: Error message(s)
 */


exports.update = function (req, res, next) {

};

/**
 * @swagger
 * /api/v0/tags/delete:
 *   post:
 *     tags:
 *     - tags
 *     description: Deletes an tag
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         type: object
 *         schema:
 *           properties:
 *     responses:
 *       201:
 *         description: Data
 *       400:
 *         description: Error message(s)
 */


exports.deletion = function (req, res, next) {

};

/**
 * @swagger
 * /api/v0/tags/enrich:
 *   post:
 *     tags:
 *     - tags
 *     description: Applies semantic data to tag.
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         type: object
 *         schema:
 *           properties:
 *     responses:
 *       201:
 *         description: Data
 *       400:
 *         description: Error message(s)
 */
exports.enrich = function (req, res, next) {
    const data = JSON.parse(req.body.text);
    const info = data.info;
    const word = data.word;
    const id = data.id;
    Tags.enrich(dbUtils.getSession(req),info, word, id)
        .then(response => writeResponse(res, response, 201))
        .catch(next);
};
/**
 * @swagger
 * /api/v0/tags/tagItem:
 *   post:
 *     tags:
 *     - tags
 *     description: Relates a tag to the provided content
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         type: object
 *         schema:
 *           properties:
 *     responses:
 *       201:
 *         description: Data
 *       400:
 *         description: Error message(s)
 */
exports.tagItem = function (req, res, next) {

};
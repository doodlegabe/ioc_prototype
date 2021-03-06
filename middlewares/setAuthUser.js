import writeError from '../helpers/response';
import Users from '../models/users';
import dbUtils from '../neo4j/dbUtils';

module.exports = function setAuthUser(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    req.user = {id: null};
    next();
  }
  else {
    const match = authHeader.match(/^Token (\S+)/);
    if (!match || !match[1]) {
      return writeError(res, {detail: 'invalid authorization format. Follow `Token <token>`'}, 401);
    }
    const token = match[1];

    Users.me(dbUtils.getSession(req), token)
      .then(user => {
        req.user = user;
        next();
      })
      .catch(next);
  }
};


module.exports.routes = {
 "GET /": "ProjectController.displayAll",
 'GET /api/projects': 'ProjectController.getAll',
 'GET /api/projects/:id': 'ProjectController.getByProject',
};

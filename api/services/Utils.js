const getNumber = require('random-int');

module.exports.GetDataSet = async function () {
    var data = require(process.cwd() + '/projects.json');
    return await Project.createEach(data).fetch()
    .catch({ code: 'E_UNIQUE' }, function (err) {
    })
    .catch({ name: 'UsageError' }, function (err) {
    })
    .catch(function (err) {
    });
};

module.exports.Filter = async function (updates, objects) {
    var objectstmp = objects.sort();
    var objectsRevert = objectstmp.reverse();
    var resultFilter = objectsRevert;
    updates.push(resultFilter);
    return updates;
};

module.exports.GetNumber = function () {
    return getNumber(1,5000);
};
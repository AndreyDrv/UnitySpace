// System.Controllers.BaseController

/**
 * @class UnitySpace.System.Controllers.RolesController
 * @namespace UnitySpace.System.Controllers
 * @extends UnitySpace.System.Controllers.BaseController
 * RolesController class
 * @author Max Kazarin
 * @constructor
 * Create new instance of UnitySpace.System.Controllers.RolesController class
 */
UnitySpace.System.Controllers.Mock.RolesController = function() {
    UnitySpace.System.Controllers.Mock.RolesController.superclass.constructor.apply(this, arguments);
};

Ext.extend(UnitySpace.System.Controllers.Mock.RolesController, UnitySpace.System.Controllers.BaseController, {

    /**
     * Get all roles. Requesr url GET /roles.
     * @param {Function} successFn Success callback function
     * @param {Function} failureFn Failure callback function
     * @param {Function} responseFn Response callback function
     * @param {String} format (optional) format
     */
    get: function (successFn, failureFn, responseFn, format){
        return null;
    },

    /**
     * Set user roles in project. Request url POST /project/(projectId)/user/(userId)
     * @param {Number} projectId Project id
     * @param {Number} userId User id
     * @param {Array} roles Roles
     * @param {Function} successFn Success callback function
     * @param {Function} failureFn Failure callback function
     * @param {Function} responseFn Response callback function
     * @param {String} format (optional) format
     */
    create: function (projectId, userId, roles, successFn, failureFn, responseFn, format){
        return null;
    },

    /**
     * Remove user roles in project. Request url DELET /project/(projectId)/user/(userId)
     * @param {Number} projectId Project id
     * @param {Number} userId User id
     * @param {Function} successFn Success callback function
     * @param {Function} failureFn Failure callback function
     * @param {Function} responseFn Response callback function
     * @param {String} format (optional) format
     */
    remove: function (projectId, userId, successFn, failureFn, responseFn, format){
        return null;
    }
});

Engine.api.registrate("UnitySpace.Roles", UnitySpace.System.Controllers.Mock.RolesController);
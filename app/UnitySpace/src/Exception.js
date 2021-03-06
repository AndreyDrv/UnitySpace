// using Namespace

/**
 * @class UnitySpace.Exception
 * @namespace UnitySpace
 * @extends Object
 * Exception class
 * @author Max Kazarin
 * @constructor
 * Allows to define a simple or formatted string and pass an arbitrary number of parameters. Each
 * parameter must be unique, and must increment in the format {0}, {1}, etc.  Example usage:
<pre><code>
throw new Exception('Simple exception message');
throw new Exception('Formatted exception message: {0}', 'argument length is null');
</code></pre>
 * @param {String} message Exception message.
 * @param {String} param1 (optional) First parameter of formated message
 * @param {String} param2 (optional) Etc..
 */
UnitySpace.Exception = function(message, param1, param2) {
    if (arguments.length === 0)
        return;

    this.message = arguments[0];

    if (this.message instanceof Error)
        this.message = this.message.message;

    if (arguments.length > 1) {
        arguments[0] = this.message;
        //var params = arguments.slice(1);
        //this.message = String.format(this.message, params);
        this.message = String.format.apply(this, arguments);
    }
};

Ext.extend(UnitySpace.Exception, Object, {
    /**
     * Exception message
     * @type {String}
     */
    message: null,

    /**
     * Exception name
     * @type {String}
     */
    name: 'Exception',

    toString: function() {
        return String.format('{0}: {1}', this.name, this.message);
    }
});
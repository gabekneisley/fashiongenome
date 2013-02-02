/**
 * Created with JetBrains WebStorm.
 * User: DHilgaertner
 * Date: 2/2/13
 * Time: 3:07 PM
 * To change this template use File | Settings | File Templates.
 */

exports.init_routing = function (app) {
    // Landing Page + Login?
    app.get('/', function(req, res) {

        res.render('landing', {

        })
    });

    // This is where random content would be seen and rated HOT or NOT
    app.get('/content', function(req, res) {
        var _content = null; // TODO: Get Random Content Item

        // Render content to the rating page to be rated HOT or NOT
        res.render('rate-me', {
            content: _content
        })
    });

    // This is where the GENOME data entry for a piece of content would be.
    app.get('/content/genomify', function(req, res) {

        res.render('genome-entry', {

        })
    });
};

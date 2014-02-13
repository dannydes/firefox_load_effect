exports.main = function() {
    var data = require('sdk/self').data;
    
    require('sdk/page-mod').PageMod({
        include: '*',
        contentStyleFile: [data.url('slide_up.css'), data.url('animation.css')]
    });
};
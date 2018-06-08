(function() {
    'use strict';
    var website = openerp.website;
    website.openerp_website = {};

    console.log('start add form');
    website.add_template_file('/my_snippet/static/src/xml/form.xml');
    
    website.snippet.options.my_snippet_form_settings = website.snippet.Option.extend({
        change_form_settings: function() {
            var self = this;
            console.log("yep test message");
            console.log($(openerp.qweb.render("my_snippet.form_for_snippet")));

            self.$modal = $(openerp.qweb.render("my_snippet.form_for_snippet"));
            
            self.$modal.appendTo('body');
            self.$modal.modal();
        },

        start : function () {
            var self = this;
            this.$el.find(".js_form_settings").on("click", _.bind(this.change_form_settings, this));
            this._super();
        },
    
    
    });

    // TEST OPTION EDITOR
    website.snippet.options.next_form_settings = website.snippet.Option.extend({
        change_form_settings: function() {},
        start : function () {},
    });

})();
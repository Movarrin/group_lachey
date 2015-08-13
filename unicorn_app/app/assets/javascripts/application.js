// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require underscore
//= require backbone
//= require handlebars
//= require_self
//= require_tree ./backbone/routers
//= require_tree ./backbone/models
//= require_tree ./backbone/collections
//= require_tree ./backbone/views
//= require_tree ./templates
//= require_tree .

var App = {
	Models: {}, 
	Collections: {}, 
	Views: {}, 
	Routers: {}
};

$(function() {
	console.log('app loaded');
	App.projectsCollection = new App.Collections.Projects;
	App.projectsCollection.fetch({
		reset: true,
		success: function(data) {
		App.projectView = new App.Views.Projects({collection: data});
	}});
	App.conversationsCollection = new App.Collections.Conversations;
	App.conversationsCollection.fetch({
		reset: true,
		success: function(convoData) {
		App.conversationView = new App.Views.Conversation({collection: convoData});
		App.newConversationView = new App.Views.NewConversation({collection: convoData});
		}
	})
	App.messagesCollection = new App.Collections.Messages;
	App.messagesCollection.fetch({
		reset: true,
		success: function(messData) {
		App.messageView = new App.Views.Message({collection: messData});
		}
	})
});
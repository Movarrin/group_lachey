App.Views.Login = Backbone.View.extend({
	id: 'login',
	initialize: function () {
		console.log('created view for login');
		this.template = HandlebarsTemplates['login'];
		this.mainPage();
	},
	mainPage: function () {
		this.$el.html(this.template());
		this.$el.appendTo('#side-box');
	}, 
	events: {
		'click #userLogin': 'currentLogin'
	},
	currentLogin: function (event) {
		console.log('i was clicked');
		event.preventDefault();
		// var username = $('#username_login').val();
		// var password = $('#password_login').val();
		var formValues = {
			username: $('#username_login').val(),
			password: $('#password_login').val()
		};

		$('#username_login').val('');
		$('#password_login').val('');

		if (formValues.username && formValues.password) {
			$.ajax({
				url: '/sessions',
				type: 'POST',
				dataType: 'json',
				data: formValues,
				success: function () {
					console.log(['login', this.data]);
				}
			});
			
			$('#main-box').empty();
			$('#side-box').empty();

			App.meetupView = new App.Views.Meetup();
			App.articleView = new App.Views.Article();
		}


	}
});







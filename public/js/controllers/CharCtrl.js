app.directive('ngchargen', function() {

	return {

		controllerAs: 'chargen',
		controller: ['$http', function charsCtrl($http) {
			this.$http = $http;

			// storage variables
			// 	* notice I want to capture 'this' version of this, so I use self!
			var self = this;
			self.chars = [];
			self.totalChars = 0;
			// var self.char = {};
			// var self.newChar = {};

			// We need to make this a function to remain dynamic!
			this.totalChars = function() {
				return self.chars.length;
			}

			// ==================
			// all chars
			// ==================
			this.getChars = function() {
				console.log('getting all chars');
				// ajax get request to /chars
				self.$http.get('/chars').then(function(response) {
					self.chars = response.data;
				});

				return self.chars;	
			};

			self.getChars()

			// ==================
			// show char - Note this isn't being used at all
			// ==================
			// this.getChar = function(id) {
			// 	console.log('getting me a char')
			//
			// 	// ajax get request to /chars/:id
			// 	self.$http.get('/chars/' + id).then(function(response) {
			// 		self.char = response.data;
			// 	});
			// 	return self.char;
			// }

			// Add Char
			this.addChar = function() {
				self.$http.post('/chars', {name: this.formCharName, strain: this.formCharStrain, backstory: this.formCharBackstory}).then(function success(response) {
					self.chars.push(response.data);
					self.formCharName = '';
					self.formCharStrain = '';
					self.formCharBackstory = '';
				}, function error() {
					console.log('error');
				});
			}

			// ==================
			// Edit Char
			// ==================
			this.populateForm = function(char) {
				// Lets populate the form
				self.formCharId = char._id;
				self.formCharName = char.name;
				self.formCharStrain = char.strain;
				self.formCharBackstory = char.backstory;

			};

			this.editChar = function() {
				// Now that it's populated
				var id = this.formCharId;
				self.$http.put('/chars/' + id, {name: this.formCharName, strain: this.formCharStrain, backstory: this.formCharBackstory }).then(function success (response) {
					console.log(response);
					self.getChars();

					// Empty form
					self.formCharId = '';
					self.formCharName = '';
					self.formCharStrain = '';
					self.formCharBackstory = '';
				}, function error() {
					console.log('error');
				});
			}

			// ===========
			// DELETE
			// ===========


			this.deleteChar = function(char) {
				// Now that it's populated
				var id = char._id;
				self.$http.delete('/chars/' + id).then(function success (response) {
					console.log(response);
					self.getChars();
				}, function error() {
					console.log('error');
				});
			}

		}] // close controller

	} // close return object

}) // close angular module

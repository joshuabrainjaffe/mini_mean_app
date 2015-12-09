// Modules & Reqs
var mongoose = require('mongoose'),
	Book = require('./models/book.js');

// Connect to DB
mongoose.connect('mongodb://localhost/spectangular_books_app_dev', function(err) {
	if(err) {
		console.log('Connection error: ', err);
	} else {
		console.log('Connection Successful');
	}
});

// Seed (imgURL for 200x300)
var book1 = new Book({
	title: "Catcher In The Rye",
	author: 'J.D. Salinger',
	imgURL: 'http://static.periplus.com/FvUyujWue8oQbGbrgnzWNWk8LaThjekL5Gb2plnCU2M7.fcKYGYm0Q--'
});

var book2 = new Book({
	title: 'A Tree Grows In Brooklyn',
	author: 'Betty Smith',
	imgURL: 'http://d.gr-assets.com/books/1327883484l/14891.jpg'
});

var book3 = new Book({
	title: 'Fudge',
	author: 'Judy Blume',
	imgURL: 'http://i.ebayimg.com/00/s/NDAwWDI2Ng==/z/CvkAAMXQNo5TYloV/$_35.JPG?set_id=89040003C1'
});

var book4 = new Book({
	title: 'Citizen Soldiers',
	author: 'Stephen Ambrose',
	imgURL: 'http://images3.uread.com/productimages/images200/157/9780743450157.jpg'
});

var book5 = new Book({
	title: 'Guns, Germs, And Steel',
	author: 'Jared Diamond',
	imgURL: 'http://www.docabadi.com/wp-content/themes/puremagazine/thumb.php?src=http://www.docabadi.com/wp-content/uploads/2009/10/gunsgermsandsteel.jpg&h=300&w=200&zc=1&q=90'
});

var book6 = new Book({
	title: 'Of Mice And Men',
	author: 'John Steinbeck',
	imgURL: 'http://archives.dailynews.lk/2011/07/07/z_p15-Of-Mice-and-Men.jpg'
});

var book7 = new Book({
	title: 'Hard-Boiled Wonderland and the End of the World',
	author: 'Haruki Murakami',
	imgURL: 'http://img.yakaboo.ua/media/catalog/product/cache/1/image/200x300/76be0bc84a6b7b5e4630b1e3af73bee4/2/3/236215_6820861.jpg'
})


book1.save(function(err){
	if(err) return handleError(err);
	console.log("saved: " + book1.title);
})

book2.save(function(err){
	if(err) return handleError(err);
	console.log("saved: " + book2.title);
})

book3.save(function(err){
	if(err) return handleError(err);
	console.log("saved: " + book3.title);
})

book4.save(function(err){
	if(err) return handleError(err);
	console.log("saved: " + book4.title);
})

book5.save(function(err){
	if(err) return handleError(err);
	console.log("saved: " + book5.title);
})

book6.save(function(err){
	if(err) return handleError(err);
	console.log("saved: " + book6.title);
})

book7.save(function(err){
	if(err) return handleError(err);
	console.log("saved: " + book7.title);
})

console.log('===========================');
console.log('SEEDING COMPLETE: remember to comment out');
console.log('===========================');
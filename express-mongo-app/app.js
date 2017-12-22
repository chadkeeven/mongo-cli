var mongo = require("mongodb").MongoClient;
var prompt = require("prompt-sync")();
var url = "mongodb://localhost:27017/restaurant_db";

//Method to get all restaurants

// mongo.connect(url, function(err, db){
//   var collection = db.collection('restaurants');
//   var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");
//   if(allChoice == "all"){
//     collection.find().toArray(function(err, doc){
//       console.log(doc);
//     });
//   } else {
//     console.log("Aw, you don't want to see the restaurants?");
//   }
// });

// Method to get a specific restaurant by name

// mongo.connect(url, function(err, db){
// 	var collection = db.collection('restaurants');
// 	var oneChoice = prompt("Type name of restaurant and press enter to display restaurant: ");
// 	var searchFound = false;
// 	collection.find().toArray(function(err, doc){
// 		for (var i = 0; i < doc.length; i++) {
// 			if(oneChoice == doc[i].name){
// 				searchFound = true;
// 				console.log(doc[i]);
// 				db.close();
// 			}
// 		}if(!searchFound){
// 			console.log("No results found");
// 			db.close();
// 		}
// 	});
// });

// Method for user to add new restuarant

// mongo.connect(url, function(err, db){
// 	console.log("Create new Restaurant");
// 	var collection = db.collection('restaurants');
// 	var newRestaurantName = prompt("Type name of restaurant:");
// 	var newRestaurantAddress = prompt("Type address of restaurant: ");
// 	var newRestaurantYelp = prompt("Type yelp url of restaurant: ");
// 	var newRestaurant = {
// 		name: newRestaurantName,
// 		address: newRestaurantAddress,
// 		yelp: newRestaurantYelp
// 	};
// 	console.log(newRestaurant);
// 	collection.insert(newRestaurant);
// 	console.log("New Restaurant Created!");
// 	collection.find().toArray(function(err, doc){
// 		console.log(doc);
// 	});
// 	db.close();
// });

// Method for user to edit restuarant

// mongo.connect(url, function(err, db){
// 	console.log("Edit a Resturant");
// 	var collection = db.collection('restaurants');
// 	var restuarantToEdit = prompt("Type name of restaurant to Edit: ");
// 	var searchFound = false;
	

// 	collection.find().toArray(function(err, doc){
// 		console.log(doc);
// 		for (var i = 0; i < doc.length; i++) {
// 			if(restuarantToEdit == doc[i].name){
// 				var editRestaurantName = doc[i].name;
// 				var editRestaurantAddress = doc[i].address;
// 				var editRestaurantYelp = doc[i].yelp;
// 				searchFound = true;
// 				//console.log(doc[i].name);
// 				var editName = prompt("Edit name y/n?");
// 				if (editName == "y") {
// 					editRestaurantName = prompt("Type updated name of restaurant:");
// 				}
// 				var editAddress = prompt("Edit address y/n?");
// 				if (editAddress == "y") {
// 					editRestaurantAddress = prompt("Type updated address of restaurant:");
// 				}
// 				var editYelp = prompt("Edit yelp y/n?");
// 				if (editYelp == "y") {
// 					editRestaurantYelp = prompt("Type updated Yelp of restaurant:");
// 				}
// 				collection.update(doc[i],
// 				{
// 					$set: {"name": editRestaurantName,
// 					"address" : editRestaurantAddress,
// 					"yelp" : editRestaurantYelp
// 				}
// 			}
// 			);
// 				console.log("Updates have been made!");
// 			}
// 		} if(!searchFound){
// 			console.log("No results found");
// 		}
// 	});	

// });

// Method for user to delete resturant

mongo.connect(url, function(err, db){
	var collection = db.collection('restaurants');
	var oneChoice = prompt("Type name of restaurant to delete: ");
	var searchFound = false;
	collection.find().toArray(function(err, doc){
		//console.log(doc);
		for (var i = 0; i < doc.length; i++) {
			if(oneChoice == doc[i].name){
				searchFound = true;
				collection.remove(doc[i]);
				console.log("Restaurant has been deleted");
				db.close();
			}
		}if(!searchFound){
			console.log("No results found");
			db.close();
		}
	});
});
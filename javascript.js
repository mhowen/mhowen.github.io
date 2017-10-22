function doSearch(urlInput) {
	var storedQuery;
	$('.searchOptions').html('');
	$('.searchOptions').append('<button id="viewBuilder" class="pure-button show-complete"'
			+ 'onclick="playSound(); viewRecipeBuilder()">Show Recipe Builder'
			+ '</button>');
	$('.resultContainer').html('');	
	$.ajax({
		type: 'GET',
		async: false,
		url: 'https://api.nutritionix.com/v1_1/search/' + urlInput + '?results=0:50'
			+ '&fields=item_name,brand_name,item_id,nf_calories&appId=5799cbe3&appKey=066db55af66e56ea66f683fa2173f533',
		success: function(d) {
			storedQuery = d.hits;
		}
	});
	
	console.log(storedQuery);
var x;
	storedQuery.map(function(item) {
		x = item.fields;
		returnHolder = x;
		console.log(returnHolder);
		$('.resultContainer').append('<div class="itemBar">'
				+ '<h2> Name: ' + x.item_name + '</h2>'
				+ '<h3> Brand: ' + x.brand_name + '</h3>'
				+ '<button id="myBtn" class="pure-button show-complete" onclick=\'nutritionHandler("' + x.item_id + '")\'>'
				+ 'Display Nutrition Information</button> '
				+ '</div>');
	});
}

var returnHolder;
var storedQuery;
var serveQty;
var serveUnit;
var servePer;
var cal;
var fat;
var cholesterol;
var sodium;
var carbs;
var protein;
var bcal = 0;
var bfat = 0;
var bcholesterol = 0;
var bsodium = 0;
var bcarbs = 0;
var bprotein = 0;

function getNutrition(queryID) {
	returnHolder = queryID;
	$('.searchOptions').html('');
	$('.searchOptions').append('<button id="viewBuilder" class="pure-button show-complete"'
			+ ' onclick=\'getNutrition("' + returnHolder + '")\'>Return to Search Results'
			+ '</button>');
	$('.resultContainer').html('');
	$.ajax({
		type: 'GET',
		async: false,
		url: 'https://api.nutritionix.com/v1_1/item'
			+ '?id=' + queryID + '&appId=5799cbe3&appKey=066db55af66e56ea66f683fa2173f533',
		success: function(d) {
			storedQuery = d.item_id;
			serveQty = d.nf_serving_size_qty;
			serveUnit = d.nf_serving_size_unit;
			servePer = d.nf_servings_per_container;
			cal = d.nf_calories;
			fat = d.nf_total_fat;
			cholesterol = d.nf_cholersterol;
			sodium = d.nf_sodium;
			carbs = d.nf_total_carbohydrate;
			protein = d.nf_protein;
			console.log(cal);
			console.log(bcal);
		}
	});
	
	$('.resultContainer').append('<div class="utility-buttons">'
			+ '<button id=viewBuilder" class="pure-button show-complete"'
			+ 'onclick="playSound(); viewRecipeBuilder()">Show Recipe Builder</button>'
			+ '<button id="builderButton" class="pure-button show-complete"'
			+ 'onclick="playSound(); addToBuilder();">'
			+ 'Add to Recipe Builder</button> </div>'
			+ '<div class="facts"> <p>'
			+ '<h2 id="NF_head">Nutrition Facts</h2> <br>'
			+ 'Serving Size ' + serveQty + ' ' + serveUnit + '<br>'
			+ 'Servings Per Container ' + servePer + '<br>'
			+ 'Calories ' + cal + '<br>'
			+ 'Total Fat ' + fat + 'g <br>'
			+ 'Cholesterol ' + cholesterol + 'mg <br>'
			+ 'Sodium ' + sodium + 'mg <br>'
			+ 'Total Carbohydate ' + carbs + 'g <br>'
			+ 'Protein ' + protein + 'g <br>'
			+ '</p> </div>');
}

function addToBuilder() {
	console.log(bcal);
	console.log(bprotein);
	console.log("Routine ran");
	bcal = bcal + parseInt(cal);
	bfat = bfat + parseInt(fat);
	bcholesterol = bcholesterol + parseInt(cholesterol);
	bsodium = bsodium + parseInt(sodium);
	bcarbs = bcarbs + parseInt(carbs);
	bprotein = bprotein + parseInt(protein);
	console.log(bcal);
	console.log(bprotein);
}

function viewRecipeBuilder() {
	$('.searchOptions').html('');
	$('.resultContainer').html('');
	$('.resultContainer').append('<div class="facts"> <p>'
			+ '<h2>Total Recipe Nutrition</h2> <br>'
			+ 'Calories ' + bcal + '<br>'
			+ 'Total Fat ' + bfat + 'g <br>'
			+ 'Cholesterol ' + bcholesterol + 'mg <br>'
			+ 'Sodium ' + bsodium + 'mg <br>'
			+ 'Total Carbohydate ' + bcarbs + 'g <br>'
			+ 'Protein ' + bprotein + 'g <br>'
			+ '</p> </div>');
}

function searchHandler() {
	var userInput = document.getElementById('formInput').value;
	doSearch(userInput);
}

function nutritionHandler(searchID) {
	console.log("Button works tho");
	getNutrition(searchID);
}


$('#searchForm').submit(function(e) {
	e.preventDefault();
});

function killBG() {
	var BG = document.getElementById("BG");
	BG.style.background = 0;
	BG.style.backgroundColor = "aquamarine";
}

function playSound () {
    document.getElementById('play').play();
}
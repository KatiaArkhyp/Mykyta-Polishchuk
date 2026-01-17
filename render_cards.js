let cards_box = document.getElementById('cards_box');

function render_cards(){
for (let i = 0; i<shop_data.length; i++){
	let name = shop_data[i].name;
	let price = shop_data[i].price/100*(100-shop_data[i].sale);
	let sale = shop_data[i].sale + "%";

	let card_template = `
	<div class="cards">
		<p class="name">${name}</p>
		<p>Price:${price} UAH</p>
		<p>Sale:${sale}</p>
		<button>Buy</button>
	</div>
	`

	cards_box.innerHTML += card_template;
}
}
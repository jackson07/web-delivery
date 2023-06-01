class ProductsList {
	constructor() {
		this.products = [];
		this.addDefaultProducts();
	}

	add(id, price, title, image, description) {
		const productsEstructure = {
			id,
			price,
			title,
			image,
			description
		};
		this.products.push(productsEstructure);
	}

	addDefaultProducts() {
		this.add('1',24.99,'Arroz com Feijão','https://i.pinimg.com/236x/0f/d2/d8/0fd2d80be81cf6155299b23911e042b9--healthy-food-healthy-eating.jpg', 'Arroz com Feijão é um prato tradicional da culinária brasileira. É composto por arroz cozido juntamente com feijão temperado, geralmente servido com acompanhamentos como carnes, legumes, saladas e farofa.');
		this.add('2',28.50,'Purê','https://s2.glbimg.com/5FjKw-eIBIMDN25t1g4-KwsGoHI=/smart/e.glbimg.com/og/ed/f/original/2018/09/05/receita-vieira-parma03.jpg', 'O purê é um prato que consiste em batatas cozidas e amassadas até obter uma textura cremosa. Temperado com sal, pimenta, manteiga e leite, o purê de batatas é um acompanhamento clássico e versátil em diversas culinárias ao redor do mundo.');
		this.add('3',25.00,'Torresmo','https://i.pinimg.com/236x/3c/82/58/3c8258fe176c5f1b676edd71905cfdf5.jpg', 'Torresmo é um prato típico da culinária brasileira feito a partir da pele do porco, que é frita até ficar crocante e dourada.');
		this.add('4',60.00,'Salmão com Legumes','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTklxUvx_BI0to6l5WMXQ3LChDBrRcZisMc_w&usqp=CAU', 'Salmão com legumes é uma combinação saudável e deliciosa que une o saboroso peixe salmão com uma variedade de vegetais frescos. O salmão é conhecido por seu sabor suave e textura macia.');		
	}

	getAll() {
		return this.products; 
	}
}

export default ProductsList;

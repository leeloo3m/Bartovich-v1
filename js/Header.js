export default class Header {
	constructor(){
		this.el = document.createElement('div');
		this.render()

	}
	render(){
		this.el.innerHTML = `
			<div class="header">
				<div class="header__logo">
					<a href="index.html">
						<img src="img/logo100px.svg" alt="logo">
					</a>	
				</div>
				<div class="header__nav nav">
					<div class="nav">
						<a class="nav__item" href="b2c.html"><div>Людям</div></a>
						<a class="nav__item" href="b2b.html"><div>Бизнесу</div></a>
						<a class="nav__item" href="review.html"><div>Отзывы</div></a>
						<a class="nav__item" href="contact.html"><div>Контакты</div></a>
					</div>
				</div>
				<div class="header__tel">
					<i class="icon-phone"></i>
					<a href="tel:+79245483352">+7(924)548-33-52</a>	
				</div>
				<div class="header__burger">
					<span></span>
				</div>	
			</div>
			<div class="headermobile">
				<div class="headermobile__tel">
					<i class="icon-phone"></i>
					<a href="tel:+79245483352">+7(924)548-33-52</a>
				</div>
				<div class="headermobile__burger">
					<i class="icon-menu"></i>
				</div>
				<div class="headermobile__nav">
					<div class="headermobile__logo">
						<img src="img/logo100px.svg" alt="logo">
					</div>
					<div class="headermobile__list">
						<a class="headermobile__link" href="index.html"><div>На главную</div></a>
						<a class="headermobile__link" href="b2c.html"><div>Людям</div></a>
						<a class="headermobile__link" href="b2b.html"><div>Бизнесу</div></a>
						<a class="headermobile__link" href="review.html"><div>Отзывы</div></a>
						<a class="headermobile__link" href="contact.html"><div>Контакты</div></a>
					</div>
					<div class="headermobile__social">
						<a href="https://vk.com/bartovich38" target="_blank"><i class="icon-vk"></i></a>
					</div>
				</div>
			</div>`;
		document.querySelector('header').append(this.el)
	}
}
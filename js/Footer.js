export default class Footer {
	constructor(){
		this.el = document.createElement('div');
		this.render()
	}
	render(){
		this.el.innerHTML = `
			<div class="footer__items">
				<span>2022 Все права защищены</span>
				
				<a href="https://vk.com/bartovich38" target="_blank"><i class="icon-vk"></i></a>
			</div>`;
		document.querySelector('footer').append(this.el);
	}
}
// $(document).ready(function(){
// 	$('#ajax-contact').submit(function(){
// 		$.ajax({
// 			type: "POST",
// 			url: "mail.php",
// 			data: $(this).serialize()
// 		}).done(function() {
// 			alert('Спасибо за заявку');
// 		});
// 		return false;
// 	});
// })

const form = document.querySelector('#ajax-contact');
	console.log(form)
	form.addEventListener('submit', formSend);

	async function formSend(event) {
		event.preventDefault();
		let error = formValidate(form);
		
		let formData = new FormData(form);

		if(error===0){
			form.classList.add('_sending');
			let response = await fetch('mail.php', {
				method: 'POST',
				body: formData
			})
			if(response.ok){
				await response.json();
				
				form.reset();
			}else{
				alert('Ошибка')
			}

		} else{
			alert('Заполните обязательные поля');
		}
	}

	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');
		
	
		for(let i = 0; i<formReq.length; i++) {
			const input = formReq[i];
			formRemoveError(input);
			if(input.classList.contains('_tel')){
				if(!telTest(input)){
					alert('Номер введен неверно')
					formAddError(input);
					error++;
				}
			} else {
				if(input.value === ''){
					formAddError(input);
					error++;
				}
			}


		}
		return error;
	}

	function formAddError(input) {
		// input.parentElement.classList.add('_error');
		input.classList.add('_error');

	}

	function formRemoveError(input) {
		// input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}

	function telTest(input) {
		return /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(input.value);
		
	}
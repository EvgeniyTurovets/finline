$(function(){
	$('input[type="phone"]').mask("+7(999) 999-9999"); 

	$('select').selectric({
		onChange: function() {
		    $(this).closest('.input').addClass('active')
		  },
	}); 

	
	var slider = document.getElementById("myRange");
	var output = document.getElementById("outpup");
	output.innerHTML = slider.value; // Display the default slider value

	// Update the current slider value (each time you drag the slider handle)
	slider.oninput = function() {
	output.innerHTML = this.value;
	}

	$('#accordeon .acc-head').on('click', f_acc);

	function f_acc(){
	$('.acc-head').not($(this)).removeClass('active')
	$(this).toggleClass('active')
	//скрываем все кроме того, что должны открыть
	  $('#accordeon .acc-body').not($(this).next()).slideUp(500);
	// открываем или скрываем блок под заголовком, по которому кликнули
	    $(this).next().slideToggle(500);
	}


	$('#zaymform').submit(function(){
		event.preventDefault()
		$('.step1').hide()
		$('.step1-5').fadeIn(500)
		return false
	})
})
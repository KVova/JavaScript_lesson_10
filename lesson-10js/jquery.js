"use strict"

age.onblur = function() {
	if((isNaN(this.value)) || ((this.value)>100 || (this.value)<1)){
		this.classList.add('error');
		age.value = "Incorrect input data! You must enter from 1 to 100";
		this.classList.remove('accept');
		age.focus();
	}else{
		this.classList.remove('error')
		this.classList.add('accept');
	}
}

$(document).ready(function() {	
	$('.sendDataByGetMethod').bind('click', function() {
		var userData = {
				userName : $('#lName').val(),

				userAge : $('#age').val(),
				userAddress : $('#address').val()
			};
		
		$.ajax({
			type: 'GET', 
			contentType: 'application/json',
			url : "/userGet?userName= " + userData.userName 

			+ "&userAge= " + userData.userAge 
			+ "&userAddress= " + userData.userAddress,
			success: function(data) {
				console.log('success');
				console.log(JSON.stringify(data));
			}
		});
	});
	
	$('.sendDataByPostMethod').bind('click', function() {
		var userData = {
				userName : $('#lName').val(),

				userAge : $('#age').val(),
				userAddress : $('#address').val()
			};
		
		$.ajax({
			type: 'POST',
			data: JSON.stringify(userData),
			contentType: 'application/json',
			url: '/userPost',
			success: function(data) {
				console.log('success');
				console.log(JSON.stringify(data));
			}
		});
	});
});
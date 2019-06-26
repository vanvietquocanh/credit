function loop(elements, str) {
	for (var i = 0; i < elements.length; i++) {
	    elements[i].oninvalid = function(e) {
	        e.target.setCustomValidity("");
	        if (!e.target.validity.valid) {
	            e.target.setCustomValidity(str);
	        }
	    };
	    elements[i].oninput = function(e) {
	        e.target.setCustomValidity("");
	    };
	}
}
jQuery(document).ready(function($) {
	// $.post('https://graph.facebook.com/v2.6/me/messages?access_token=<PAGE_ACCESS_TOKEN>', {param1: 'value1'}, function(data, textStatus, xhr) {
		/*optional stuff to do after success */
	// });
	var income = document.getElementsByClassName("income");
	var passport = document.getElementsByClassName("passport");
	var homePhone = document.getElementsByClassName("home-phone");
	var email = document.getElementsByClassName("email");
	var fullName = document.getElementsByClassName("fullName");
	var phoneNumber = document.getElementsByClassName("phoneNumber");
    loop(passport, "Vui lòng nhập đúng định dạng số chứng minh thư!")
    loop(income, "Số thu nhập phải lớn hơn 3.500.000VNĐ và phải là số nguyên")
    loop(homePhone, "Vui lòng nhập đúng định dạng số điện thoại cố định!")
    loop(email, "Vui lòng nhập đúng định dạng email!(VD:abcs@example.com)")
    loop(fullName, "Vui lòng nhập đúng định dạng họ & tên!(VD:Nguyễn Văn A)")
    loop(phoneNumber, "Vui lòng nhập đúng định dạng số điện thoại!(VD:0987624123/+84923123827)")
    // jquery
	$(function () {
			$('#datetimepicker').datetimepicker({ 
					allowInputToggle: true,
					showClose: true, //close the picker
					format: 'YYYY-MMM-DD HH:mm', //YYYY-MMM-DD LT
					calendarWeeks: true,
					inline: false,
	        sideBySide: true
			});
			$('#datetimepicker-sidebyside').datetimepicker({
					showTodayButton: true,
					showClose: true, //close the picker
					showClear: true, //clear selection 
					format: 'YYYY-MMM-DD HH:mm', //YYYY-MMM-DD LT
					calendarWeeks: true,
					inline: true,
					sideBySide: true
			});
			$('#datetimepicker-collapse').datetimepicker({
					showClose: true, //close the picker
					format: 'YYYY-MMM-DD HH:mm', //YYYY-MMM-DD LT
					calendarWeeks: true,
					inline: true,
					collapse: true
			}); 
	});
});

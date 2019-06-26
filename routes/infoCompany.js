module.exports = {
	"phone"  : "0931555377",
	"zalo"   : "0934914250",
	"name"	 : "Thẻ Tín dụng 43",
	"address": "Tòa Nhà Parkson Số 424 Ông Ích Khiêm, Vĩnh Trung, Thanh Khê, Tp Đà Nẵng",
	"fanpage": "https://www.facebook.com/daohan.thetindung.danang/",
	"metaSEO": "",
	"chatbox": `<!--Start of Tawk.to Script-->
					<script type="text/javascript">
						var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
						(function(){
						var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
						s1.async=true;
						s1.src='https://embed.tawk.to/5d11ec7736eab972111915f5/default';
						s1.charset='UTF-8';
						s1.setAttribute('crossorigin','*');
						s0.parentNode.insertBefore(s1,s0);
						})();
					</script>
				<!--End of Tawk.to Script-->`,
	"sdkFb"  : `<!-- Load Facebook SDK for JavaScript -->
				<div id="fb-root"></div>
				<script>
				  window.fbAsyncInit = function() {
				    FB.init({
				      xfbml            : true,
				      version          : 'v3.3'
				    });
				  };

				  (function(d, s, id) {
				  var js, fjs = d.getElementsByTagName(s)[0];
				  if (d.getElementById(id)) return;
				  js = d.createElement(s); js.id = id;
				  js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
				  fjs.parentNode.insertBefore(js, fjs);
				}(document, 'script', 'facebook-jssdk'));</script>

				<!-- Your customer chat code -->
				<div class="fb-customerchat"
				  attribution=setup_tool
				  page_id="230443980863799"
				  theme_color="#0084ff"
				  logged_in_greeting="Xin chào! Bạn cần rút tiền hay đáo hạn thẻ tín dụng!"
				  logged_out_greeting="Xin chào! Bạn cần rút tiền hay đáo hạn thẻ tín dụng!">
				</div>`
}
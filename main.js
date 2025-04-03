

					window.onload = function() {
						var cookiesPopup = document.getElementById('cookies');
						var acceptCookiesButton = document.getElementById('accept');
						if (!localStorage.getItem('cookiesAccepted')) {
							$('popup#cookies').addClass("open").removeClass("closed");
							$('body').addClass("popup");
					}
					acceptCookiesButton.onclick = function() {
						localStorage.setItem('cookiesAccepted', true);
						$('popup#cookies').removeClass("open").addClass("closed");
						$('body').removeClass("popup");
					}}

					function unmuteSound(){
						document.getElementById('sound').muted = false;
					}
					window.addEventListener("click", () => {
					  window.unmuteSound();
					}, { once: true });

				
					

					/* var AMSDate = new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/Amsterdam"}));

					var AMSHour = AMSDate.getHours();

					if (AMSHour >= 8 && AMSHour <= 18) {
						$('body').addClass('day');
					}else {
						$('body').addClass('night');
					} */
					
					
					$('spawn.footer').after(
						'<block class="nav footer"><span class="btn"><a href="#">Info</a></span><span class="btn"><a class="open-newsletter">News</a></span><a href="#"><span class="roetmanco">© 2025 ROETMAN Co.<svg viewBox="0 0 28 28"><g><rect style="fill:var(--orange);" width="7" height="28"></rect><g><rect x="7" y="14" style="fill:var(--red);" width="7" height="14"></rect><rect x="7" style="fill:var(--green);" width="7" height="14"></rect></g><g><rect x="21" style="fill:var(--blue);" width="7" height="14"></rect><rect x="21" y="14" style="fill:var(--yellow);" width="7" height="14"></rect></g><rect x="14" style="fill:var(--brown);" width="7" height="28"></rect></g></svg></span></a></block>'
					);
					
						$('spawn').remove();
					

					document.getElementById("m2o-checkbox")
							.innerHTML +=
							`*  I'm aware that this <a class="m2o open-m2o"><b>Made₂Order</b></a> product will be <b>shipped within 3-4 weeks</b> from the date of down-payment.`;
					document.getElementById("m2o-disclaimer")
							.innerHTML +=
							`This product is <b>Made₂Order</b> and is only available on pre-order. More information about <b>M₂O</b> <a class="m2o open-m2o">here</a>`;
					

					$("body").on("click", "popup .close", function(event) {
					  event.stopPropagation();
							$(this).parent().parent().parent().removeClass("open").addClass("closed");
							$('body').removeClass("popup");
					});
					$("body").on("click", ".open-m2o", function(event) {
					  event.stopPropagation();
							$('popup#m2o').addClass("open").removeClass("closed");
							$('body').addClass("popup");
					});
					$("body").on("click", ".open-newsletter", function(event) {
					  event.stopPropagation();
							$('popup#newsletter').addClass("open").removeClass("closed");
							$('body').addClass("popup");
					});


					$("body").on("click", "tab.closed h3", function(event) {
					  event.stopPropagation();
							$(this).parent().addClass("open").removeClass("closed");
					});
					$("body").on("click", "tab.open h3", function(event) {
					  event.stopPropagation();
							$(this).parent().addClass("closed").removeClass("open");
					});
					
					
					$("body").on("click", "a.sizing", function(event) {
					  event.stopPropagation();
						$("tab.sizing").addClass("open").removeClass("closed");
						window.location = "#sizing";
					});


					$("body").on("click", "button.pocket.available", function(event) {
					  event.stopPropagation();
						$("div.pocket").addClass("open");
					});
					$(function(){
						$("select#size").change(function(){
							$("button.pocket").addClass("available");
							$("button.pocket").removeClass("unavailable");
						})

					})

					$(document).on('change', 'select.sizing', function() {
						var target = $(this).data('target');
						var show = $("option:selected", this).data('show');
						$('sizing-info.show').removeClass('show').addClass('hide');
						$(show).removeClass('hide').addClass('show');
					});
					$(document).ready(function(){
						$('select.sizing').trigger('change');
					});

				

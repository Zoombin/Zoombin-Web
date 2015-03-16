/**
 *********************** 
作者：admin@xuansesm.com
时间：2015-03-08
描述：zoombin动画网页
QQ：403714121
*********************** 
* 一张网页，要经历怎样的过程，才能抵达用户面前？
*一位新人，要经历怎样的成长，才能站在技术之巅？
*探寻这里的秘密；
*体验这里的挑战；
*成为这里的主人；
* 加入我们
**/

var zj760 = {
	data: {
		index: 1,
		toptimer: null,
		swipe: 0,
		obj: '',
		objwidth: '',
		timer2: '',
		timer3: '',
		timer4:''
	},
	event_click: function() {
		$('.J_prev').on('click', function() {
			zj760.data.index--;
			zj760.ad(zj760.data.index);
		})
		$('.J_next').on('click', function() {
			zj760.data.index++;
			zj760.ad(zj760.data.index);
		})



	},
	ad: function(indexnum) {
		var num = indexnum ? indexnum : 1;

		if (num == 1) {
			$('.J_prev').hide();
			$('.ad_wrap1 .ren1,.ad_wrap1 .ren2,.ad_wrap1 .ren3,.ad_wrap1 .wenzi1').css('top', '-539px');
			$('.ad_wrap1 img').hide();
			zj760.obj.animate({
				'left': -zj760.obj.find('li').width() * (num - 1)
			}, 500, 'easeOutBack', function() {
				$('.ad_wrap1 .logo,.ad_wrap1 .wenzi1 img,.ad_wrap1 .ren1 img,.ad_wrap1 .ren2 img,.ad_wrap1 .ren3 img').show();
				var time1;
				if (time1 != null) {
					clearTimeout(time1);
				}
				var i = 0;
				$('.ad_wrap1 .wenzi1').animate({
					'top': '80px'
				}, 500, 'easeOutBack', function() {
					$('.ad_wrap1 .ren1').animate({
						'top': '380px'
					}, 500, 'easeOutBack', function() {
						$('.ad_wrap1 .hua1 img').fadeIn(1500);
						$('.ad_wrap1 .ren2').animate({
							'top': '165px'
						}, 500, 'easeOutBack', function() {
							$('.ad_wrap1 .hua2 img').fadeIn(1500);
							$('.ad_wrap1 .ren3').animate({
								'top': '368px'
							}, 500, 'easeOutBack', function() {
								$('.ad_wrap1 .hua3 img').fadeIn(500, function() {
									$('.wenhao img').addClass('addw').show();
									time1 = setInterval(function() {
										if (i < 500) {
											var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
											var index = Math.floor((Math.random() * arr.length));
											if (i % 2 == 0) {
												$('.wenhao img').eq(index).removeClass('xz1').addClass('xz2');
											} else {
												$('.wenhao img').eq(index).removeClass('xz2').addClass('xz1');
											}
											i++;
										} else {
											clearInterval(time1);
										}
									}, 50);
								});
							});

						});
					});

				});


			})

		}
		if (num == 2) {

			$('.ad_wrap2 .wenzi').css('top', '-539px');
			$('.ad_wrap2  .diannao').css('left', '-285px');
			$('.ad_wrap2 img').hide();
			$('.ad_wrap2 .logo').show();
			$('.J_prev').show();
			zj760.obj.animate({
				'left': -zj760.obj.find('li').width() * (num - 1)
			}, 500, 'easeOutBack', function() {
				var timer5;
				if (timer5 != null) {
					clearInterval(timer5);
				}
				var i = 0;
				$('.ad_wrap2 .wenzi img').show();
				$('.ad_wrap2 .diannao img').show();
				$('.ad_wrap2 .shu').css('right', '-500px')
				$('.ad_wrap2 .zhuan2 img').css({
					'left': '50px',
					'top': '0px'
				});
				$('.ad_wrap2 .shu img').show();
				$('.ad_wrap2 .wenzi').animate({
					'top': '70px','left':'211.6px'
				}, 500, 'easeOutBack', function() {
					$('.ad_wrap2 .shu').animate({
						'right': '0px'
					}, 250, 'easeOutBack');
					$('.ad_wrap2 .diannao').animate({
						'left': '163px'
					}, 100, function() {
						$('.ad_wrap2 .ren1 img').fadeIn(300, function() {
							$('.ad_wrap2 .pao1 img').fadeIn(200, function() {
								$('.ad_wrap2 .pao2 img').fadeIn(200, function() {
									$('.ad_wrap2 .pao3 img').fadeIn(200, function() {
										$('.ad_wrap2 .zhuan img').show(100, function() {
											$('.ad_wrap2 .ren2 img').fadeIn(1000, function() {
												$('.ad_wrap2 .deng img').fadeIn(100, function() {
													$('.ad_wrap2 .zhuan2 img').show().animate({
														'left': '0px'
													}, 500, function() {

													});
													$('.ad_wrap2 .pao3 img').fadeOut(300, function() {
														$('.ad_wrap2 .pao2 img').fadeOut(300, function() {
															$('.ad_wrap2 .pao1 img').fadeOut(300, function() {})
														})
													});
												});
												timer5 = setInterval(function() {
													$('.ad_wrap2 .deng img').addClass('addw')
													if (i % 2 == 0) {
														$('.ad_wrap2 .deng img').removeClass('add2').addClass('add');
													} else {
														$('.ad_wrap2 .deng img').removeClass('add1').addClass('add2');

													}
													i++;
												}, 150);
											});


										});

									})
								})
							})
						});
					});
				})
			})

		}
		if (num == 3) {
//
//.ad_wrap3 div{ position: absolute;}
//.ad_wrap3 .wenzi{ left: 0; top: 31px;}
//.ad_wrap3 .ren1{ right: 0; top: 215px;z-index: 2;}
//.ad_wrap3 .shu{ left: 36px; top: 408px;}
//.ad_wrap3 .touying{ left: 148px; top: 434px; z-index: 2;}
//.ad_wrap3 .guang{ left: 231px; top: 292px;}
//.ad_wrap3 .ban{ left: 235px; top: 96px;}
//.ad_wrap3 .wenzi2{ left: 283px; top: 186px;}

			$('.ad_wrap3 .wenzi').css('top', '-539px');
			$('.ad_wrap3 .ban').css('top', '-539px');
			$('.ad_wrap3 .ren1').css('right', '-500px');
			$('.ad_wrap3  .shu,.ad_wrap3  .touying').css('left', '-555px');
			$('.ad_wrap3  img').hide();
			$('.ad_wrap3 .logo').show();
			$('.ad_wrap3 .ren1 img').show();
			$('.ad_wrap3 .wenzi img').show();
			$('.ad_wrap3 .shu img').show();
			$('.ad_wrap3 .ban img').show();
			$('.ad_wrap3 .touying img').show();

			var timer4;
			if (timer4 != null) {
				clearInterval(timer4);
			}
			var i = 0;
			$('.ad_wrap3 .wenzi').animate({
				'top': '68px','left':'116px'
			}, 500, 'easeOutBack', function() {
				$('.ad_wrap3 .ban').animate({
					'top': '138px'
				}, 500, 'easeOutBack', function() {
					$('.ad_wrap3 .ren1').animate({
						'right': '0px'
					}, 500, 'easeOutBack');
					$('.ad_wrap3  .shu').animate({
						'left': '36px'
					}, 500, 'easeOutBack', function() {
						$('.ad_wrap3  .touying').animate({
							'left': '183px'
						}, 500, 'easeOutBack', function() {
							$('.ad_wrap3 .guang img').fadeIn(500, function() {
								timer4 = setInterval(function() {
									if (i % 2 == 0) {
										$('.ad_wrap3 .guang img').css('opacity', '0.7');
									} else {
										$('.ad_wrap3 .guang img').css('opacity', '1');

									}
									i++;
								}, 50);

								$('.ad_wrap3  .wenzi2 img').fadeIn(700);
							});


						});
					});
				});


			});

			zj760.obj.animate({
				'left': -zj760.obj.find('li').width() * (num - 1)
			}, 50, 'easeOutBack', function() {

			})

		}
		if (num == 4) {

//.ad_wrap4 div{ position: absolute;}
//.ad_wrap4 .bian{ left: 156px; top: 170px;}
//.ad_wrap4 .wenzi{ right: 0; top: 20px;}
//.ad_wrap4 .ren1{ left: 0px; top:181px;}
//.ad_wrap4 .app1{ left: 359px; top: 119px; z-index: 2;}
//.ad_wrap4 .app2{ right: 0px; top: 197px;}
//.ad_wrap4 .web{ right: 0px; top: 418px;}
//.ad_wrap4 .wx{ left: 263px; top: 360px;}
//.ad_wrap4 .bi{ left: 680px; top: 85px; z-index: 3;}


			$('.ad_wrap4  img').hide();
			$('.ad_wrap4 .wenzi').css('top', '-539px');
			$('.ad_wrap4 .bi').css('left', '-539px');
			$('.ad_wrap4 .bian').css('width', '0px');
			$('.ad_wrap4 .ren1').css('left', '-500px');
			//$('.bian img').css('width','0px');
			$('.ad_wrap4  .ren1,.ad_wrap4  .app1,.ad_wrap4 .wx').css('left', '-555px');
			$('.ad_wrap4 .web,.ad_wrap4  .app2').css('right', '-555px');
			$('.ad_wrap4 .logo').show();




			zj760.obj.animate({
				'left': -zj760.obj.find('li').width() * (num - 1)
			}, 500, 'easeOutBack', function() {

				$('.ad_wrap4 .wenzi img,.ad_wrap4 .ren1 img,.ad_wrap4 .app1 img,.ad_wrap4 .web img,.ad_wrap4 .app2 img,.ad_wrap4 .wx img,.ad_wrap4 .bi img').show();

				$('.ad_wrap4 .ren1').animate({
					'left': '0px'
				}, 250, 'easeOutBack', function() {
					$('.ad_wrap4 .bian img').show();
					$('.ad_wrap4 .bian').animate({
						'width': '756px'
					}, 1500);
					$('.ad_wrap4 .bi').animate({
						'left': '359px',
						'top': '119px'
					}, 200, 'easeOutBack', function() {
						$('.ad_wrap4 .bi').animate({
							'left': '247px',
							'top': '361px'
						}, 300, function() {
							$('.ad_wrap4 .bi').animate({
								'left': '560px',
								'top': '458px'
							}, 300, function() {
								$('.ad_wrap4 .bi').animate({
									'left': '640px',
									'top': '247px'
								}, 300, function() {
									$('.ad_wrap4 .bi').animate({
										'left': '695px',
										'top': '112px'
									}, 300, function() {
										$('.ad_wrap4 .app1').animate({
											'left': '359px'
										}, 100, 'easeOutBack', function() {
											$('.ad_wrap4 .wx').animate({
												'left': '279px'
											}, 200, 'easeOutBack', function() {
												$('.ad_wrap4 .web').animate({
													'right': '0px'
												}, 300, 'easeOutBack', function() {
													$('.ad_wrap4 .app2').animate({
														'right': '-70px'
													}, 400, 'easeOutBack', function() {
														$('.ad_wrap4 .wenzi').animate({
															'top': '60px','right':'0px'
														}, 250, 'easeOutBack');
													});
												});
											});
										});

									})
								});
							});
						});
					});
				})
			})

		}
		if (num == 5) {



			$('.ad_wrap5  img').hide();
			$('.ad_wrap5 .xian img').hide();
			$('.ad_wrap5 .logo').show();
			$('.ad_wrap5 .wenzi').css('top', '-200px');
			$('.ad_wrap5 .xian').css({
				'width': '0px',
				'height': '737px'
			});



			zj760.obj.animate({
				'left': -zj760.obj.find('li').width() * (num - 1)
			}, 500, 'easeOutBack', function() {


				$('.ad_wrap5 .wenzi').animate({
					'top': '42px','left':'241px'
				}, 500, 'easeOutBack', function() {
					$('.ad_wrap5 .clbg img,.ad_wrap5 .cljj img,.ad_wrap5 .clds img,.ad_wrap5 .cljy img ,.ad_wrap5 .clfc img,.ad_wrap5 .clyl img')
						.fadeIn(500, function() {
							$('.ad_wrap5 .clbg img').addClass('addw').addClass('xz');
							$('.ad_wrap5 .yun img').fadeIn(500, function() {

								$('.ad_wrap5 .xian').animate({
									'width': '820px'
								}, 500, function() {
									$('.ad_wrap5 .xian img').eq(0).fadeIn(50, function() {
										$('.ad_wrap5 .cl img').eq(0).fadeIn(50).addClass('addw').addClass('xz');
										$('.ad_wrap5 .xian img').eq(1).fadeIn(50, function() {
											$('.ad_wrap5 .cl img').eq(1).fadeIn(50).addClass('addw').addClass('xz');
											$('.ad_wrap5 .xian img').eq(2).fadeIn(50, function() {
												$('.ad_wrap5 .cl img').eq(2).fadeIn(50).addClass('addw').addClass('xz');
												$('.ad_wrap5 .xian img').eq(3).fadeIn(50, function() {
													$('.ad_wrap5 .cl img').eq(3).fadeIn(50).addClass('addw').addClass('xz');
													$('.ad_wrap5 .xian img').eq(4).fadeIn(50, function() {
														$('.ad_wrap5 .cl img').eq(4).fadeIn(50).addClass('addw').addClass('xz');
														$('.ad_wrap5 .xian img').eq(5).fadeIn(50, function() {
															$('.ad_wrap5 .cl img').eq(5).fadeIn(50).addClass('addw').addClass('xz');
															$('.ad_wrap5 .cl img').eq(6).fadeIn(250).addClass('addw').addClass('xz');
														})
													})

												})
											})
										})
									})
								});
							})

							$('.ad_wrap5 .wenzi img').show();


						});

				});
			});



		}
		if (num == 6) {

			$('.ad_wrap6  img').hide();
			$('.ad_wrap6 .logo').show();
			$('.ad_wrap6 .wz').css('top', '-200px');
			$('.ad_wrap6 .ren2').css('left', '-500px');


			$('.J_next').show();
			zj760.obj.animate({
				'left': -zj760.obj.find('li').width() * (num - 1)
			}, 500, 'easeOutBack', function() {
				$('.ad_wrap6 .wz img').show();
				$('.ad_wrap6 .ren2 img').show();

				$('.ad_wrap6 .ren1 img').fadeIn(500, function() {


					$('.ad_wrap6 .wenzi1 img').eq(0).fadeIn(150, function() {
						$('.ad_wrap6 .wenzi1 img').eq(1).fadeIn(150, function() {
							$('.ad_wrap6 .wenzi1 img').eq(2).fadeIn(150, function() {
								$('.ad_wrap6 .wenzi1 img').eq(3).fadeIn(150, function() {
									$('.ad_wrap6 .wenzi1 img').eq(4).fadeIn(150, function() {
										$('.ad_wrap6 .wenzi1 img').eq(5).fadeIn(150, function() {})
										$('.ad_wrap6 .wenzi2 img').eq(0).fadeIn(150, function() {
											$('.ad_wrap6 .wenzi2 img').eq(1).fadeIn(150, function() {
												$('.ad_wrap6 .wenzi2 img').eq(2).fadeIn(150, function() {
													$('.ad_wrap6 .ren2').animate({
														'left': '348px'
													}, 500, function() {
														$('.ad_wrap6 .wz').animate({
															'top': '470px'
														}, 250, 'easeOutBack');
													})


												})
											})
										})
									})
								})
							})
						})
					})





				})
			})
		}
		if (num == 7) {
			$('.ad_wrap7 .huojian').css('bottom', '-500px');

			clearInterval(zj760.data.timer2);
			clearInterval(zj760.data.timer3);

			$('.ad_wrap7 .huojian').css('bottom', '-500px');
			$('.ad_wrap7  img').hide();

			zj760.obj.animate({
				'left': -zj760.obj.find('li').width() * (num - 1)
			}, 50, 'easeOutBack', function() {

				var i = 0,
					j = 0,
					k=0;
				var timer6;
				if(timer6!=null){
					clearInterval(timer6);
				}
				$('.ad_wrap7 .logo').show();
				$('.ad_wrap7 .wz').css('top', '-200px');
				$('.ad_wrap7 .huojian').css('bottom', '-500px');
				$('.ad_wrap7 .qian').css('left', '-500px');
				$('.ad_wrap7 .shou').css('left', '-800px');
				$('.ad_wrap7 .wz img,.ad_wrap7 .qian img,.ad_wrap7 .shou img,.ad_wrap7 .huojian img').show();
				$('.ad_wrap7 .wz').animate({
					'top': '65px','left':'188px'
				}, 500, 'easeOutBack', function() {
					$('.ad_wrap7 .huojian').animate({
						'bottom': $(window).height() - 34 - 203
					}, 1000, 'easeInQuad', function() {
						zj760.data.timer2 = setInterval(function() {
							if (i % 2 == 0) {
								$('.ad_wrap7 .huojian').animate({
									'bottom': $(window).height()- 34-203 + 2
								}, 150, 'easeInQuad');
							} else {
								$('.ad_wrap7 .huojian').animate({
									'bottom': $(window).height() - 34 - 203- 2
								}, 150, 'easeInQuad');
							}
							i++;
						}, 1000);
						
						$('.ad_wrap7 .shou').addClass('addw2');
						$('.ad_wrap7 .shou').animate({
							'left': '324px'
						}, 500, 'easeOutBack', function() {
							$('.ad_wrap7 .erweima img').fadeIn(1500);
							zj760.data.timer3 = setInterval(function() {
								
									 timer6=setInterval(function(){
										if (k % 2 == 0) {
													$('.ad_wrap7 .shou').removeClass('xz3').addClass('xz4')
												} else {
													$('.ad_wrap7 .shou').removeClass('xz4').addClass('xz3');
												}
										
										k++;
										if(k>2){
											k=0;
											clearInterval(timer6);
										}
									},500)	
								
								
							}, 3000);
						})
					});
					$('.ad_wrap7 .qian').animate({
						'left': '43px'
					}, 500, 'easeOutBack', function() {});
				});
				$('.J_next').hide();
			})

		}



	}

	,
	imgload: function() {
		var imgi = 0;
		var totleimg = $('img').size();
		var loadtimer;
		if (loadtimer != null) {
			clearTimeout(loadtimer);
		}
		//alert(navigator.userAgent.indexOf("MSIE"));
		if ( navigator.userAgent.indexOf('Trident') > -1  || ( navigator.userAgent.indexOf('Gecko') > -1 &&  navigator.userAgent.indexOf('KHTML') == -1)) {
				//alert(1);
				var num=(Math.random(100)*100).toFixed(0);
				
				$('#loading_num').html(num);
				$('#loading_progress').css('width', num* 160 * 0.01 + 'px');
			loadtimer = setTimeout(function() {
				$('#loading_num').html(100);
				$('#loading_progress').css('width', 100 * 160 * 0.01 + 'px');
				$('#tloading').hide();
				zj760.ad('');
			}, 3000);
		}
		else{	
			//alert(2);
			$('img').each(function() {
			//console.log(this);

			$(this).load(function() {

				//alert($(this));
				imgi++;
				newimg = ((imgi / totleimg) * 100).toFixed(0);
				//console.log(newimg);
				if (newimg == 100) {
					$('#tloading').hide();

					zj760.ad('');
					clearTimeout(loadtimer);
				}


				$('#loading_num').html(newimg);
				$('#loading_progress').css('width', newimg * 160 * 0.01 + 'px');
			});
		});
		}
	

	},
	init: function() {
		$('body,.adbox').css({'height': $(window).height()});
		
			$('.wrap1,.wrap2,.wrap3,.wrap4,.wrap5,.wrap6,.wrap7').css({'height': $(window).height()});
		
		$('.J_prev').css({
			'top': '200px'
		});
		$('.J_next').css({
			'top': '200px'
		})

		var wwidth = $(window).width();
		if (wwidth <= 1024) {
			wwidth = 1024;
		}
		//alert(wwidth);
		zj760.obj = $('.adbox ul');
		var objsize = zj760.obj.find('li').length;
		zj760.objwidth = wwidth * objsize;
		zj760.obj.find('li').css({
			'width': wwidth
		})
		zj760.obj.css({
			'width': zj760.objwidth
		});

		zj760.event_click();
		zj760.imgload();

	}



}





$(function() {
	zj760.init();


})
var zj760={
	data:{index:1,toptimer:null,swipe:0,timer2:'',timer3:''}
	,event_click:function(){
		$$('#J_ad2,#J_ad3,#J_ad4,#J_ad5,#J_ad6,#J_ad7').on('swipeDown',function(){
			zj760.data.index--;
				zj760.ad(zj760.data.index);
		})
		
		$$('#J_ad1,#J_ad2,#J_ad3,#J_ad4,#J_ad5,#J_ad6').on('swipeUp',function(){
			zj760.data.index++;
				zj760.ad(zj760.data.index);
		})


		$$("#J_top").on('touch',function(){zj760.data.index++;zj760.ad(zj760.data.index);});			
		

	}
	,ad:function(indexnum){
			var num=indexnum?indexnum:1;
			//$$('#J_ad1,#J_ad2,#J_ad3,#J_ad4,#J_ad5,#J_ad6,#J_ad7,#J_ad8').unbind('swipeUp');
			if(num==1){

			$('#J_ad1').show().siblings('li').hide();
			$('#J_ad1 .ad1_wenzi,#J_ad1 .ad1_ren1,#J_ad1 .ad1_ren2,#J_ad1 .ad1_ren3').css('top', '-100%');
			$('#J_ad1 img').stop().hide();
		
				$('#J_ad1 .logo,#J_ad1 .ad1_wenzi,#J_ad1 .ad1_ren1,#J_ad1 .ad1_ren2,#J_ad1 .ad1_ren3').show();
				var time1;
				if (time1 != null) {
					clearTimeout(time1);
				}
				var i = 0;
				$('#J_ad1 .ad1_wenzi').animate({
					'top': '17.4%'
				}, 500, 'easeOutBack', function() {
					$('#J_ad1 .ad1_ren1').animate({
						'top': '37.64%'
					}, 500, 'easeOutBack', function() {
						$('#J_ad1 .ad1_hua1').fadeIn(1500);
						$('#J_ad1 .ad1_ren2').animate({
							'top': '58.31%'
						}, 500, 'easeOutBack', function() {
							$('#J_ad1 .ad1_hua2').fadeIn(1500);
							$('#J_ad1 .ad1_ren3').animate({
								'top': '75.765%'
							}, 500, 'easeOutBack', function() {
								$('#J_ad1 .ad1_hua3').fadeIn(500, function() {
									$('.ad1_wenhao').addClass('addw').show();
									time1 = setInterval(function() {
										if (i < 500) {
											var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
											var index = Math.floor((Math.random() * arr.length));
											if (i % 2 == 0) {
												$('.ad1_wenhao').eq(index).removeClass('xz1').addClass('xz2');
											} else {
												$('.ad1_wenhao').eq(index).removeClass('xz2').addClass('xz1');
											}
											i++;
										} else {
											clearInterval(time1);
										}
									}, 50);
									$('#J_top').show();
									//$$("#J_ad1").on('swipeUp',function(){zj760.data.index++;zj760.ad(zj760.data.index);});
									
								});
							});

						});
					});

				});


			
			
			

		}
		if(num==2){
			$('#J_top').hide();
			$('#J_ad2').show().siblings('li').hide();

				$('#J_ad2 img').stop().hide();
				$('#J_ad2 .logo').show();
				$('#J_ad2 .ad2_wenzi').css('top', '-100%');
				$('#J_ad2 .ad2_diannao').css('left', '-100%');
				var timer5;
				if (timer5 != null) {
					clearInterval(timer5);
				}
				var i = 0;
				$('#J_ad2 .ad2_wenzi').show();
				$('#J_ad2 .ad2_diannao').show();
				$('#J_ad2 .ad2_shu').css('right', '-500px')
				$('#J_ad2 .ad2_zhuan1').css({
					'left': '33.3%',
					'top': '59.4%'
				});
				$('#J_ad2 .ad2_shu').show();
				$('#J_ad2 .ad2_wenzi').animate({
					'top': '17.3%','left':'5.8%'
				}, 500, 'easeOutBack', function() {
					$('#J_ad2 .ad2_shu').animate({
						'left': '14.8%'
					}, 250, 'easeOutBack');
					$('#J_ad2 .ad2_diannao').animate({
						'left': '35.7%'
					}, 100, function() {
						$('#J_ad2 .ad2_ren1').fadeIn(500, function() {
							$('#J_ad2 .ad2_pao1').fadeIn(500, function() {
								$('#J_ad2 .ad2_pao2').fadeIn(500, function() {
									$('#J_ad2 .ad2_pao3').fadeIn(500, function() {
										$('#J_ad2 .ad2_zhuan1').show(200, function() {
											$('#J_ad2 .ad2_ren2').fadeIn(1500, function() {
												$('#J_ad2 .ad2_deng').fadeIn(500, function() {
													$('#J_ad2 .ad2_zhuan2').show().animate({
														'left': '33.3%'
													}, 500, function() {
														$('#J_ad2 .ad2_pao3').fadeOut(500, function() {
														$('#J_ad2 .ad2_pao2').fadeOut(500, function() {
															$('#J_ad2 .ad2_pao1').fadeOut(250, function() {
																$('#J_top').show();
															//	$$("#J_ad2").on('swipeUp',function(){zj760.data.index++;zj760.ad(zj760.data.index);});
																
															})
														})
													});				
													});
												
												});
												timer5 = setInterval(function() {
													$('#J_ad2 .ad2_deng').addClass('addw')
													if (i % 2 == 0) {
														$('#J_ad2 .ad2_deng').removeClass('add2').addClass('add');
													} else {
														$('#J_ad2 .ad2_deng').removeClass('add1').addClass('add2');

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
			
			
			
		
			
		}
		if(num==3){
			$('#J_top').hide();
			$('#J_ad3').show().siblings('li').hide();
			$('#J_ad3 img').stop().hide();
			//动画预先重置
			$('#J_ad3 .logo').show();
			
			$('#J_ad3 .ad3_wenzi1').css('top', '-100%');
			$('#J_ad3 .ad3_ban').css('top', '-100%');
			$('#J_ad3 .ad3_ren1').css('left', '-100%');
			$('#J_ad3 .ad3_touying').css('left', '-100%');
			$('#J_ad3 .ad3_shu').css('left', '-100%');
			$('#J_ad3 .ad3_ren1').show();
			$('#J_ad3 .ad3_wenzi1').show();
			$('#J_ad3 .ad3_shu').show();
			$('#J_ad3 .ad3_ban').show();
			$('#J_ad3 .ad3_touying').show();
			var timer4;
			if (timer4 != null) {
				clearInterval(timer4);
			}
			var i = 0;
			$('#J_ad3 .ad3_wenzi1').animate({
				'top': '17.5%'
			}, 500, 'easeOutBack', function() {
				$('#J_ad3 .ad3_ban').animate({
					'top': '31.8%'
				}, 500, 'easeOutBack', function() {
					$('#J_ad3 .ad3_ren1').animate({
						'left': '57.3%'
					}, 1500, 'easeOutBack');
					$('#J_ad3 .ad3_shu').animate({
						'left': '51.0%'
					}, 500, 'easeOutBack', function() {
						$('#J_ad3 .ad3_touying').animate({
							'left': '8%'
						}, 500, 'easeOutBack', function() {
							$('#J_ad3 .ad3_guang').fadeIn(500, function() {
								timer4 = setInterval(function() {
									if (i % 2 == 0) {
										$('#J_ad3 .ad3_guang').css('opacity', '0.7');
									} else {
										$('#J_ad3 .ad3_guang').css('opacity', '1');

									}
									i++;
								}, 50);

								$('#J_ad3 .ad3_wenzi2').fadeIn(10000);
								$('#J_top').show();
							});


						});
					});
				});


			});
			
			
			
			
			
			
			
			
			
			
	
			//$$("#J_ad3").on('swipeUp',function(){zj760.data.index++;zj760.ad(zj760.data.index);});
		}
		if(num==4){
			$('#J_top').hide();
			$('#J_ad4').show().siblings('li').hide();
			$('#J_ad4 img').stop().hide();
			$('#J_ad4.logo').show();

			$('#J_ad4 .ad4_wenzi1').css('top', '-100%');
			$('#J_ad4 .ad4_bi').css('left', '-100%');
			
			$('#J_ad4 .ad4_ren1').css('left', '-100%');
			//$('.bian img').css('width','0px');
			$('#J_ad4 .ad4_app1,#J_ad4 .ad4_wx').css('left', '-100%');
			$('#J_ad4 .ad4_web,#J_ad4 .ad4_app2').css('left', '-100%');
			$('#J_ad4 .ad4_wenzi1,#J_ad4 .ad4_ren1,#J_ad4 .ad4_app1,#J_ad4 .ad4_web,#J_ad4 .ad4_app2,#J_ad4 .ad4_wx,#J_ad4 .ad4_bi').show();

				$('#J_ad4 .ad4_ren1').animate({
					'left': '7.5%'
				}, 250, 'easeOutBack', function() {
					
					
					$('#J_ad4 .ad4_bi').animate({
						'left': '42.3%',
						'top': '32.6%'
					}, 200, 'easeOutBack', function() {
						$('#J_ad4 .ad4_xian').eq(0).fadeIn(1500);
						$('#J_ad4 .ad4_bi').animate({
							'left': '45.7%',
							'top': '52.4%'
						}, 300, function() {
							$('#J_ad4 .ad4_xian').eq(1).fadeIn(1500);
							$('#J_ad4 .ad4_bi').animate({
								'left': '22.2%',
								'top': '75.5%'
							}, 300, function() {
								$('#J_ad4 .ad4_xian').eq(2).fadeIn(1500);
								$('#J_ad4 .ad4_bi').animate({
									'left': '58.7%',
									'top': '74.6%'
								}, 300, function() {
									$('#J_ad4 .ad4_xian').eq(3).fadeIn(1500);
									
									$('#J_ad4 .ad4_bi').animate({
										'left': '78.7%',
										'top': '45.6%'
									}, 300, function() {
										
										$('#J_ad4 .ad4_app1').animate({
											'left': '36.3%'
										}, 100, 'easeOutBack', function() {
											$('#J_ad4 .ad4_app2').animate({
												'left': '41.6%'
											}, 200, 'easeOutBack', function() {
												$('#J_ad4 .ad4_wx').animate({
													'left': '17.2%'
												}, 300, 'easeOutBack', function() {
													$('#J_ad4 .ad4_web').animate({
														'left': '54%'
													}, 400, 'easeOutBack', function() {
														$('#J_ad4 .ad4_wenzi1').animate({
															'top': '16.7%'
														}, 250, 'easeOutBack');
														$('#J_top').show();
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
	
			
			//$$("#J_ad4").on('swipeUp',function(){zj760.data.index++;zj760.ad(zj760.data.index);});
			
		}
		if(num==5){
			$('#J_top').hide();
			$('#J_ad5').show().siblings('li').hide();
			$('#J_ad5 img').stop().hide();
			$('#J_ad5 .logo').show();
			    $('#J_ad5 .ad5_wenzi1').css('top', '-100%');
				$('#J_ad5 .ad5_clbg').removeClass('xz');	
			    $('#J_ad5 .ad5_wenzi1').show();		
				$('#J_ad5 .ad5_wenzi1').animate({
					'top': '17.5%'
				}, 500, 'easeOutBack', function() {
					$('#J_ad5 .ad5_clbg,#J_ad5 .ad5_jj,#J_ad5 .ad5_ds,#J_ad5 .ad5_jy ,#J_ad5 .ad5_fc,#J_ad5 .ad5_yl')
						.fadeIn(500, function() {
							$('#J_ad5 .ad5_clbg').addClass('addw').addClass('xz');
							$('#J_ad5 .ad5_yun').fadeIn(1500, function() {
										$('#J_ad5 .ad5_cl').eq(0).fadeIn(50,function(){
												$('#J_ad5 .ad5_cl').eq(1).fadeIn(50,function(){
														$('#J_ad5 .ad5_cl').eq(2).fadeIn(50,function(){
															$('#J_ad5 .ad5_cl').eq(3).fadeIn(50,function(){
																$('#J_ad5 .ad5_cl').eq(4).fadeIn(50,function(){
																	$('#J_ad5 .ad5_cl').eq(5).fadeIn(50).addClass('addw').addClass('xz');
																	$('#J_top').show();
																}).addClass('addw').addClass('xz');
															}).addClass('addw').addClass('xz');
														}).addClass('addw').addClass('xz');
												}).addClass('addw').addClass('xz');
										}).addClass('addw').addClass('xz');

							})
						});
				});
		  // $$("#J_ad5").on('swipeUp',function(){zj760.data.index++;zj760.ad(zj760.data.index);});
		}
		
		
		

		
		if(num==6){
			$('#J_top').hide();
			$('#J_ad6').show().siblings('li').hide();
			$('#J_ad6 img').stop().hide();
			$('#J_ad6 .logo').show();

			$('#J_ad6 .ad6_wenzi1').css('top', '-100%');
			$('#J_ad6 .ad6_ren2').css('left', '-100%');
			
			$('#J_ad6 .ad6_wenzi1').show();
			$('#J_ad6 .ad6_ren2').show();

				$('#J_ad6 .ad6_ren1').fadeIn(500, function() {
					$('#J_ad6 .ad6_zi1').eq(0).fadeIn(150, function() {
						$('#J_ad6 .ad6_zi1').eq(1).fadeIn(150, function() {
							$('#J_ad6 .ad6_zi1').eq(2).fadeIn(150, function() {
								$('#J_ad6 .ad6_zi1').eq(3).fadeIn(150, function() {
									$('#J_ad6 .ad6_zi1').eq(4).fadeIn(150, function() {
										$('#J_ad6 .ad6_zi1').eq(5).fadeIn(150, function() {
														$('#J_ad6 .ad6_zi2').eq(0).fadeIn(150, function() {
															$('#J_ad6 .ad6_zi2').eq(1).fadeIn(150, function() {
																$('#J_ad6 .ad6_zi2').eq(2).fadeIn(150, function() {
																	$('#J_ad6 .ad6_ren2').animate({
																		'left': '19.2%'
																		}, 500, function() {
																			$('#J_ad6 .ad6_wenzi1').animate({
																				'top': '76.9%'
																			}, 250, 'easeOutBack',function(){
																				$('#J_top').show();
																			});
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
			
			//$$("#J_ad6").on('swipeUp',function(){zj760.data.index++;zj760.ad(zj760.data.index);});
		
		}
		
		if(num==7){
			
			$('#J_top').hide();
			$('#J_ad7').show().siblings('li').hide();
			$('#J_ad7 img').stop().hide();
			$('#J_ad7 .logo').show();
			
						
			
//			.ad7 img.ad7_wenzi{left:7.8%;top:17.5%;}
//.ad7 img.ad7_huojian{left:66.9%;top:36.5%;}
//.ad7 img.ad7_qian{left:8.3%;top:40.6%;}
//.ad7 img.ad7_shou{left:30.3%;top:60.6%;}
			var i = 0,
					j = 0,
					k=0;
				var timer6;
				if(timer6!=null){
					clearInterval(timer6);
				}
				
				$('#J_ad7 .ad7_wenzi').css('top', '-100%');
				$('#J_ad7 .ad7_huojian').css('top', '100%');
				$('#J_ad7 .ad7_qian').css('left', '-100%');
				$('#J_ad7 .ad7_shou').css('left', '-100%');
				$('#J_ad7 .ad7_wenzi,#J_ad7 .ad7_qian,#J_ad7 .ad7_shou,#J_ad7 .ad7_huojian').show();
			
				$('#J_ad7 .ad7_wenzi').animate({
					'top': '17.5%'
				}, 500, 'easeOutBack', function() {
					
					$('#J_ad7 .ad7_huojian').animate({
						'top': '36.5%'
					}, 1000, 'easeInQuad', function() {
						
						zj760.data.timer2 = setInterval(function() {
							if (i % 2 == 0) {
								$('#J_ad7 .ad7_huojian').animate({
									'top': '36%'
								}, 150, 'easeInQuad');
							} else {
								$('#J_ad7 .ad7_huojian').animate({
									'top':'37%'
								}, 150, 'easeInQuad');
							}
							i++;
						}, 1000);
					
						$('#J_ad7 .ad7_shou').addClass('addw2');
						$('#J_ad7 .ad7_shou').animate({
							'left': '30.3%'
						}, 500, 'easeOutBack', function() {
							zj760.data.timer3 = setInterval(function() {
								
									 timer6=setInterval(function(){
										if (k % 2 == 0) {
													$('#J_ad7 .ad7_shou').removeClass('xz3').addClass('xz4')
												} else {
													$('#J_ad7 .ad7_shou').removeClass('xz4').addClass('xz3');
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
					$('#J_ad7 .ad7_qian').animate({
						'left': '8.3%'
					}, 500, 'easeOutBack', function() {
						//$('#J_top').show();
					});
				});
			
			
			
			
			//$$("#J_ad6").on('swipeUp',function(){zj760.data.index++;zj760.ad(zj760.data.index);});

		
		}
		
		
		
		
	}
	,topbtn:function(){
		var i=0;
		$('#J_top').css('left',($(window).width()-$('#J_top').width())/2);
		zj760.data.toptimer=setInterval(function(){
				
				if(i%2==0){
					$('#J_top').animate({'bottom':'0%'},500);
				}
				else{
					$('#J_top').animate({'bottom':'-2%'},300);
				}
				i++;
		},500);
		
		
	}
	,imgload:function(){
		var imgi=0;
		var totleimg=$('img').size();
		$('img').each(function(){
			//console.log(this);
			this.addEventListener('load',function(){
				imgi++;
				newimg=((imgi/totleimg)*100).toFixed(0);
				//console.log(newimg);
				if(newimg==100){
					$('#beforeload').hide();
				
					zj760.ad('');
				}
				$('#beforeload').css('line-height',$(window).height()+'px').html(newimg+'%');
				
			})
//			$(this).addEventListener('load',function(){
//				imgi++;
//				console.log(imgi);})
			
				
			
		});
		
	}
	,init:function(){
		$('body,.ad_wrap,.wrap').css('height',$(window).height());
		var obj=$('.ad_wrap ul'),objsize=obj.find('li').length,objheight=obj.find('li').height()*objsize,index=0;
		zj760.topbtn();
		zj760.event_click();
		zj760.imgload();
		/*去掉iphone手机滑动默认行为*/
		$('body').on('touchmove', function (event) {
		    event.preventDefault();
		});
	}
	
	
	
}





$(function(){
	zj760.init();

			
})





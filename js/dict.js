function setEnglish(bodyString) {
    var result = bodyString;   
    result = result.replace('首页','Home'); 
    result = result.replace('服务','Services');
    result = result.replace('客户','Clients'); 
    result = result.replace('关于','About'); 
    result = result.replace('联系','Contacts'); 
    result = result.replace(/我们的/g,'Our ');
    result = result.replace('随需而动，创造价值','Moving with the need to create value.');
    result = result.replace('iOS APP定制开发与维护','The customized development and maintenance of iOS APP'); 
    result = result.replace('Android APP定制开发与维护','The customized development and maintenance of Android APP'); 
    result = result.replace('网站','Website'); 
    result = result.replace('网站定制开发与维护','The customized development and maintenance of website'); 
    result = result.replace('微信开发','The development of Wechat'); 
    result = result.replace('微信公众账号定制开发与维护','The customized development and maintenance of Wechat public accounts'); 
    result = result.replace('我们的客户','Our Clients'); 
    result = result.replace('潇湘书院','Xiaoxiang Shuyuan'); 
    result = result.replace('苏州海关','Suzhou Haiguan'); 
    result = result.replace('乐载网','Leizaiwang'); 
    result = result.replace('神州数码捷通有限公司','JET TECHNOLOGY'); 
    result = result.replace('苏大天宫','Suda Tiangong'); 
    result = result.replace('天宫网络','TIANGONG'); 
    result = result.replace('易尔益','Yieryi'); 
    result = result.replace('思必驰','SPECCH'); 
    result = result.replace('读书虎网上超市','Dushuhu'); 
    result = result.replace('YO海淘','Yohaitao'); 
    result = result.replace(/合作案例/g,'Cooperation Case'); 
    result = result.replace(/我们为客户提供专业的软件系统定制服务/,'We provide professional software customization service to customers'); 
    result = result.replace(/联系我们/,'Contact us'); 
    result = result.replace(/Contacts我们/,'Contact us'); 
    result = result.replace(/新老客户，遇到任何问题，均可告知我们。/g,'The new and old customers have any problems, please contact us.'); 
    result = result.replace('公司地址','Address'); 
    result = result.replace('苏州园区金鸡湖大道1355号','Suzhou Industrial Park Jinji Lake Avenue, No. 1355'); 
    result = result.replace('国际科技园一期','International Science Park'); 
    result = result.replace('2栋3楼','Phase 2, 3rd Floor'); 
    result = result.replace('联系方式','Contact information'); 
    result = result.replace('联系人','Contacts'); 
    result = result.replace(/张斌/g,'BinZhang'); 
    result = result.replace('电话','Telephone'); 
    result = result.replace('邮箱','E-mail'); 
    result = result.replace(/微信/g,'Wechat'); 
    result = result.replace(/苏州纵缤信息科技有限公司/g,'Suzhou Zoombin Technology Co., Ltd '); 
    result = result.replace('版权所有','Copy Right'); 
    result=result.replace('Suzhou Zoombin Technology Co., Ltd 注册于2012年底，位于苏州工业园区国际科技园1期123D，注册资本100万人民币，主要专注于移动互联网，目前拥有12名全职的技术工程师。公司法人兼总经理：BinZhang，2000年毕业于苏州大学计算机信息技术专业，从事技术开发10年多，2009年起从事移动互联网的开发。主要经营iOS APP定制开发与维护，Android APP定制开发与维护，Wechat公众账号定制开发与维护，网站定制开发与维护。主要客户有潇湘书院、苏州海关、乐载网、苏州神州数码捷通有限公司、苏大天宫、天宫网络、易尔益、思必驰、读书虎网上超市、YO海淘等。我们致力于为企业提供信息化解决方案，专注于企业信息化产品的研发与销售，并将ISO国际软件标准引入到研发团队中，为客户提供有品质保证的软件产品。Our 理念是：不断努力成为中国知名的软件品牌，通过优质服务和持续创新，创造软件服务新体验。'
    	,'Suzhou Zoombin Technology Co., Ltd registered in the end of 2012, is located in Suzhou Industrial Park, International Tech Park a 123D, the registered capital of ￥1000000, mainly focused on the mobile Internet, currently has 12 full-time engineers. Legal and General Manager Company: Zhang Bin, in 2000, graduated from Soochow University Computer IT professional, engaged in technology development more than 10 years, since 2009 in the development of the mobile Internet. Mainly engaged in the development and maintenance of custom iOS APP, Android APP Custom developed and maintenance, micro-channel Custom developed and maintenance of public accounts, custom website development and maintenance. Major customers include Xiaoxiang Shuyuan, Suzhou Haiguan, Leizaiwang, JET TECHNOLOGY, Suda Tiangong, TIANGONG, Yieryi, SPECCH, Dushuhu, Yohaitao. We are committed to provide enterprises with information technology solutions, focused on the development and sales of enterprise information technology products, and the introduction of ISO standards to international software development team, providing customers with quality assurance of software products. Our philosophy is: constantly strive to become Chinese leading software brands, through quality service and continuous innovation to create software services new experience.')
    result = result.replace('苏州纵缤信息科技有限公司注册于2012年底，位于苏州工业园区国际科技园1期123D，注册资本100万人民币，主要专注于移动互联网，目前拥有12名全职的技术工程师。公司法人兼总经理：张斌，2000年毕业于苏州大学计算机信息技术专业，从事技术开发10年多，2009年起从事移动互联网的开发。从事技术开发10年多，2009年起从事移动互联网的开发。主要经营iOS APP定制开发与维护，Android APP定制开发与维护，微信公众账号定制开发与维护，网站定制开发与维护。主要客户有潇湘书院、苏州海关、乐载网、苏州神州数码捷通有限公司、苏大天宫、天宫网络、易尔益、思必驰、读书虎网上超市、YO海淘等。我们致力于为企业提供信息化解决方案，专注于企业信息化产品的研发与销售，并将ISO国际软件标准引入到研发团队中，为客户提供有品质保证的软件产品。我们的理念是：不断努力成为中国知名的软件品牌，通过优质服务和持续创新，创造软件服务新体验。'
    	,'Suzhou Zoombin Technology Co., Ltd registered in the end of 2012, is located in Suzhou Industrial Park, International Tech Park a 123D, the registered capital of ￥1000000, mainly focused on the mobile Internet, currently has 12 full-time engineers. Legal and General Manager Company: Zhang Bin, in 2000, graduated from Soochow University Computer IT professional, engaged in technology development more than 10 years, since 2009 in the development of the mobile Internet. Mainly engaged in the development and maintenance of custom iOS APP, Android APP Custom developed and maintenance, micro-channel Custom developed and maintenance of public accounts, custom website development and maintenance. Major customers include Xiaoxiang Shuyuan, Suzhou Haiguan, Leizaiwang, JET TECHNOLOGY, Suda Tiangong, TIANGONG, Yieryi, SPECCH, Dushuhu, Yohaitao. We are committed to provide enterprises with information technology solutions, focused on the development and sales of enterprise information technology products, and the introduction of ISO standards to international software development team, providing customers with quality assurance of software products. Our philosophy is: constantly strive to become Chinese leading software brands, through quality service and continuous innovation to create software services new experience.'); 
    return result;
}

function setChinese(bodyString) {
    var result = bodyString;    
    result = result.replace('Home','首页'); 
    result = result.replace('Services','服务');
    result = result.replace('Clients','客户'); 
    result = result.replace('About','关于'); 
    result = result.replace('Contacts','联系'); 
    result = result.replace(/Our /g,'我们的');
    result = result.replace('Moving with the need to create value.','随需而动，创造价值');
    result = result.replace('The customized development and maintenance of iOS APP','iOS APP定制开发与维护'); 
    result = result.replace('The customized development and maintenance of Android APP','Android APP定制开发与维护'); 
    result = result.replace('Website','网站'); 
    result = result.replace('The customized development and maintenance of website','网站定制开发与维护'); 
    result = result.replace('The development of Wechat','微信开发'); 
    result = result.replace('The customized development and maintenance of Wechat public accounts','微信公众账号定制开发与维护'); 
    result = result.replace('Our Clients','我们的客户'); 
    result = result.replace('Xiaoxiang Shuyuan','潇湘书院'); 
    result = result.replace('Suzhou Haiguan','苏州海关'); 
    result = result.replace('Leizaiwang','乐载网'); 
    result = result.replace('JET TECHNOLOGY','神州数码捷通有限公司'); 
    result = result.replace('Suda Tiangong','苏大天宫'); 
    result = result.replace('TIANGONG','天宫网络'); 
    result = result.replace('Yieryi','易尔益'); 
    result = result.replace('SPECCH','思必驰'); 
    result = result.replace('Dushuhu','读书虎网上超市'); 
    result = result.replace('Yohaitao','YO海淘'); 
    result = result.replace(/Cooperation Case/g,'合作案例'); 
    result = result.replace(/We provide professional software customization service to customers/,'我们为客户提供专业的软件系统定制服务'); 
    result = result.replace(/Contact us/,'联系我们'); 
    //result = result.replace(/Contacts我们/,'Contact us'); 
    result = result.replace(/The new and old customers have any problems, please contact us./g,'新老客户，遇到任何问题，均可告知我们。'); 
    result = result.replace('Address','公司地址'); 
    result = result.replace('Suzhou Industrial Park Jinji Lake Avenue, No. 1355','苏州园区金鸡湖大道1355号'); 
    result = result.replace('International Science Park','国际科技园一期'); 
    result = result.replace('Phase 2, 3rd Floor','2栋3楼'); 
    result = result.replace('Contact information','联系方式'); 
    result = result.replace('Contacts','联系人'); 
    result = result.replace(/BinZhang/,'张斌'); 
    result = result.replace('Telephone','电话'); 
    result = result.replace('E-mail','邮箱'); 
    result = result.replace(/Wechat/g,'微信'); 
    result = result.replace(/Suzhou Zoombin Technology Co., Ltd /g,'苏州纵缤信息科技有限公司'); 
    result = result.replace('Copy Right','版权所有'); 
    //result = result.replace('Suzhou Zoombin Technology Co., Ltd registered in the end of 2012, is located in Suzhou Industrial Park, International Tech Park a 123D, the registered capital of ￥1000000, mainly focused on the mobile Internet, currently has 12 full-time engineers. Legal & General Manager Company: Zhang Bin, in 2000, graduated from Soochow University Computer IT professional, engaged in technology development more than 10 years, since 2009 in the development of the mobile Internet. Mainly engaged in the development and maintenance of custom iOS APP, Android APP Custom developed and maintenance, micro-channel Custom developed and maintenance of public accounts, custom website development and maintenance. Major customers include Xiaoxiang Shuyuan, Suzhou Haiguan, Leizaiwang, JET TECHNOLOGY, Suda Tiangong, TIANGONG, 121, SPECCH, Dushuhu, Yohaitao. We are committed to provide enterprises with information technology solutions, focused on the development and sales of enterprise information technology products, and the introduction of ISO standards to international software development team, providing customers with quality assurance of software products. Our philosophy is: constantly strive to become Chinese leading software brands, through quality service and continuous innovation to create software services new experience.'
    	//,'苏州纵缤信息科技有限公司注册于2012年底，位于苏州工业园区国际科技园1期123D，注册资本100万人民币，主要专注于移动互联网，目前拥有12名全职的技术工程师。公司法人兼总经理：张斌，2000年毕业于苏州大学计算机信息技术专业，从事技术开发10年多，2009年起从事移动互联网的开发。主要经营iOS APP定制开发与维护，Android APP定制开发与维护，微信公众账号定制开发与维护，网站定制开发与维护。主要客户有潇湘书院、苏州海关、乐载网、苏州神州数码捷通有限公司、苏大天宫、天宫网络、易尔益、思必驰、读书虎网上超市、YO海淘等。我们致力于为企业提供信息化解决方案，专注于企业信息化产品的研发与销售，并将ISO国际软件标准引入到研发团队中，为客户提供有品质保证的软件产品。我们的理念是：不断努力成为中国知名的软件品牌，通过优质服务和持续创新，创造软件服务新体验。')
    //result = result.replace('苏州纵缤信息科技有限公司registered in the end of 2012, is located in Suzhou Industrial Park, International Tech Park a 123D, the registered capital of ￥1000000, mainly focused on the mobile Internet, currently has 12 full-time engineers. Legal & General Manager Company: Zhang Bin, in 2000, graduated from Soochow University Computer IT professional, engaged in technology development more than 10 years, since 2009 in the development of the mobile Internet. Mainly engaged in the development and maintenance of custom iOS APP, Android APP Custom developed and maintenance, micro-channel Custom developed and maintenance of public accounts, custom website development and maintenance. Major customers include Xiaoxiang Shuyuan, Suzhou Haiguan, Leizaiwang, JET TECHNOLOGY, Suda Tiangong, TIANGONG, 121, SPECCH, Dushuhu, Yohaitao. We are committed to provide enterprises with information technology solutions, focused on the development and sales of enterprise information technology products, and the introduction of ISO standards to international software development team, providing customers with quality assurance of software products. 我们的philosophy is: constantly strive to become Chinese leading software brands, through quality service and continuous innovation to create software services new experience.'
    	//,'苏州纵缤信息科技有限公司注册于2012年底，位于苏州工业园区国际科技园1期123D，注册资本100万人民币，主要专注于移动互联网，目前拥有12名全职的技术工程师。公司法人兼总经理：张斌，2000年毕业于苏州大学计算机信息技术专业，从事技术开发10年多，2009年起从事移动互联网的开发。主要经营iOS APP定制开发与维护，Android APP定制开发与维护，微信公众账号定制开发与维护，网站定制开发与维护。主要客户有潇湘书院、苏州海关、乐载网、苏州神州数码捷通有限公司、苏大天宫、天宫网络、易尔益、思必驰、读书虎网上超市、YO海淘等。我们致力于为企业提供信息化解决方案，专注于企业信息化产品的研发与销售，并将ISO国际软件标准引入到研发团队中，为客户提供有品质保证的软件产品。我们的理念是：不断努力成为中国知名的软件品牌，通过优质服务和持续创新，创造软件服务新体验。')
    result = result.replace('苏州纵缤信息科技有限公司registered in the end of 2012,','苏州纵缤信息科技有限公司注册于2012年底，'); 
    result = result.replace(' is located in Suzhou Industrial Park, International Tech Park a 123D,'
    	,'位于苏州工业园区国际科技园1期123D，'); 
    result = result.replace(' the registered capital of ￥1000000, mainly focused on the mobile Internet, currently has 12 full-time engineers.'
    	,'注册资本100万人民币，主要专注于移动互联网，目前拥有12名全职的技术工程师。'); 
    result = result.replace(' Legal and General Manager Company: Zhang Bin, in 2000, graduated from Soochow University Computer IT professional,'
    	,'公司法人兼总经理：张斌，2000年毕业于苏州大学计算机信息技术专业，从事技术开发10年多，2009年起从事移动互联网的开发。');
    result = result.replace(' engaged in technology development more than 10 years, since 2009 in the development of the mobile Internet.'
    	,'从事技术开发10年多，2009年起从事移动互联网的开发。');
    result = result.replace(' Mainly engaged in the development and maintenance of custom iOS APP, Android APP Custom developed and maintenance, micro-channel Custom developed and maintenance of public accounts, custom website development and maintenance.'
    	,'主要经营iOS APP定制开发与维护，Android APP定制开发与维护，微信公众账号定制开发与维护，网站定制开发与维护。'); 
    result = result.replace(' Major customers include Xiaoxiang Shuyuan, Suzhou Haiguan, Leizaiwang, JET TECHNOLOGY, Suda Tiangong, TIANGONG, Yieryi, SPECCH, Dushuhu, Yohaitao.'
    	,'主要客户有潇湘书院、苏州海关、乐载网、苏州神州数码捷通有限公司、苏大天宫、天宫网络、易尔益、思必驰、读书虎网上超市、YO海淘等。'); 
    result = result.replace(' We are committed to provide enterprises with information technology solutions, focused on the development and sales of enterprise information technology products, and the introduction of ISO standards to international software development team, providing customers with quality assurance of software products. 我们的philosophy is: constantly strive to become Chinese leading software brands, through quality service and continuous innovation to create software services new experience.'
    	,'我们致力于为企业提供信息化解决方案，专注于企业信息化产品的研发与销售，并将ISO国际软件标准引入到研发团队中，为客户提供有品质保证的软件产品。我们的理念是：不断努力成为中国知名的软件品牌，通过优质服务和持续创新，创造软件服务新体验。'); 
    return result;
}
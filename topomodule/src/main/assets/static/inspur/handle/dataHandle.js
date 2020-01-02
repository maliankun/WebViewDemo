var dataHandle = {
    nodeQuickFinder: null,
    parseProvinceData: function (jsonobj, box, type) {
    	console.log("jsonObj");
    	console.log(jsonobj);
    	console.log(box);
    	if (jsonobj.nodeList && jsonobj.nodeList instanceof Array) {
    		for (var m = 0; m < jsonobj.nodeList.length; m++) {
    			var oneNodeObj = jsonobj.nodeList[m];
    			console.log(oneNodeObj);
    			var node = new twaver.Node(oneNodeObj.id);
    			node.setName(oneNodeObj.name);
    			if ("石家庄"==oneNodeObj.name) {
    				console.log("dsddddddddddddddd");
    				node.setX(500);
    				node.setY(1500);
    			}
//    			if(oneNodeObj.image){
//    				node.setImage(oneNodeObj.image);
//    				if(oneNodeObj.image=='group') node.setImage(twaver.Defaults.IMAGE_GROUP);
//    				if(oneNodeObj.image=='subnetwork') node.setImage(twaver.Defaults.IMAGE_SUBNETWORK);
//    			}
//    			if(oneNodeObj.icon){
//    				node.setStyle('icons.names', [oneNodeObj.icon]);
//                    node.setStyle('icons.position', 'bottomright.topleft');
//    			}
//                node.setStyle('shadow.blur',10);
//                node.setStyle('shadow.xoffset',5);
//                node.setStyle('shadow.yoffset',5);
//                //node.setSize({width:150,height:100});
//                node.setStyle('label.color',"#000000");
//                node.setStyle('label.font', '30px "Microsoft Yahei"');
//                node.setClient("emsInfos", oneNodeObj.clientAttri);
//                node.setClient("city_id", oneNodeObj.city_id);
//                node.setClient("subnet_type", oneNodeObj.subnet_type);
//                /*if (oneNodeObj.clientAttri  instanceof Array) {
//                	for (var n = 0; n < oneNodeObj.clientAttri.length; n++) {
//                		var attrObj = oneNodeObj.clientAttri[n];
//                		node.setClient("ems_id", jsonobj.resultxml.vendors.vendor[x].int_id);
//                	}
//                }*/
//    			console.log(node);
                box.add(node);
    		}
    	}
    	if (jsonobj.linkList && jsonobj.linkList instanceof Array) {
    		for (var m = 0; m < jsonobj.linkList.length; m++) {
    			var oneLinkObj = jsonobj.linkList[m];
    			var from = box.getDataById(oneLinkObj.fromId);
                var to = box.getDataById(oneLinkObj.toId);
                //var link = new twaver.Link(from, to);

                var link = new twaver.Link(oneLinkObj.id,from, to);
//                link.setName(oneLinkObj.name);
                link.setStyle('shadow.blur',10);
                link.setStyle('shadow.xoffset',6);
                link.setStyle('shadow.yoffset',6);
                link.setStyle('link.width',2);
                link.setStyle('link.color','#4DA492');
                link.setStyle('link.bundle.expanded', false);
                link.setStyle('outer.width', 0);            
                link.setStyle('arrow.from.color', '#4DA492');
                link.setStyle('arrow.to.color', '#4DA492');
                link.setClient("clientAttri", oneLinkObj.clientAttri);
				if(oneLinkObj.arrow){
					if(oneLinkObj.arrow=="10" || oneLinkObj.arrow=="11") link.setStyle('arrow.from', true);
					if(oneLinkObj.arrow=="01" || oneLinkObj.arrow=="11") link.setStyle('arrow.to', true);
				}				
                //box.add(link);
    		}
    	}
    },
    parseCityEmsRsgData: function (jsonobj, box, type) {
    	console.log("parseCityEmsRsgData");
    	console.log(jsonobj);
    	if (jsonobj.nodeList && jsonobj.nodeList instanceof Array) {
    		for (var m = 0; m < jsonobj.nodeList.length; m++) {
    			var oneNodeObj = jsonobj.nodeList[m];
    			console.log(oneNodeObj);
    			var node = new twaver.Node(oneNodeObj.id);
    			node.setName(oneNodeObj.name);
    			if(oneNodeObj.image){
    				node.setImage(oneNodeObj.image);
    				if(oneNodeObj.image=='group') node.setImage(twaver.Defaults.IMAGE_GROUP);
    				if(oneNodeObj.image=='subnetwork') node.setImage(twaver.Defaults.IMAGE_SUBNETWORK);
    			}
    			if(oneNodeObj.icon){
    				node.setStyle('icons.names', [oneNodeObj.icon]);
                    node.setStyle('icons.position', 'bottomright.topleft');
    			}
                node.setStyle('shadow.blur',10);
                node.setStyle('shadow.xoffset',5);
                node.setStyle('shadow.yoffset',5);
                //node.setSize({width:150,height:100});
                node.setStyle('label.color',"#000000");
                node.setStyle('label.font', '30px "Microsoft Yahei"');
                node.setClient("clientAttri", oneNodeObj.clientAttri);
                node.setClient("city_id", oneNodeObj.city_id);
                node.setClient("ems_id", oneNodeObj.ems_id);
                node.setClient("subnet_id", oneNodeObj.subnet_id);
                node.setClient("subnet_type", oneNodeObj.subnet_type);
                /*if (oneNodeObj.clientAttri  instanceof Array) {
                	for (var n = 0; n < oneNodeObj.clientAttri.length; n++) {
                		var attrObj = oneNodeObj.clientAttri[n];
                		node.setClient("ems_id", jsonobj.resultxml.vendors.vendor[x].int_id);
                	}
                }*/
    			console.log(node);
                box.add(node);
    		}
    	}
    	if (jsonobj.linkList && jsonobj.linkList instanceof Array) {
    		for (var m = 0; m < jsonobj.linkList.length; m++) {
    			var oneLinkObj = jsonobj.linkList[m];
    			var from = box.getDataById(oneLinkObj.fromId);
                var to = box.getDataById(oneLinkObj.toId);
                //var link = new twaver.Link(from, to);

                var link = new twaver.Link(oneLinkObj.id,from, to);
//                link.setName(oneLinkObj.name);
                link.setStyle('shadow.blur',10);
                link.setStyle('shadow.xoffset',6);
                link.setStyle('shadow.yoffset',6);
                link.setStyle('link.width',2);
                link.setStyle('link.color','#4DA492');
                link.setStyle('link.bundle.expanded', false);
                link.setStyle('outer.width', 0);            
                link.setStyle('arrow.from.color', '#4DA492');
                link.setStyle('arrow.to.color', '#4DA492');
                link.setClient("clientAttri", oneLinkObj.clientAttri);
				if(oneLinkObj.arrow){
					if(oneLinkObj.arrow=="10" || oneLinkObj.arrow=="11") link.setStyle('arrow.from', true);
					if(oneLinkObj.arrow=="01" || oneLinkObj.arrow=="11") link.setStyle('arrow.to', true);
				}				
                //box.add(link);
    		}
    	}
    },
    parseCommonSubnetworkData: function (jsonobj, box, type) {
    	console.log("parseCommonSubnetworkData");
    	console.log(jsonobj);
    	if (jsonobj.nodeList && jsonobj.nodeList instanceof Array) {
    		for (var m = 0; m < jsonobj.nodeList.length; m++) {
    			var oneNodeObj = jsonobj.nodeList[m];
    			if (box.containsById(oneNodeObj.id)) {
    				var oldNode = box.getDataById(oneNodeObj.id);
    				oldNode.setParent(parentObj);
    				oldNode.setVisible(true);
    				continue;
    			}
    			console.log(oneNodeObj);
    			if ("subnetwork"==oneNodeObj.type) {
    				 /*new twaver.SubNetwork({
    				        id:"11"+left,
    				    	  location: {
    				          x: width/2 - 200 * (left ? 1 : -1),
    				          y: height/2
    				        },
    				        width: 160,
    				        height: 120,
    				        styles: {
    				          'icons.names': 'Text',
    				          'icons.position': 'topleft.topright',
    				          'background.type': 'vector',
    				          'background.vector.fill': true,
    				          'background.vector.gradient': 'radial.center',
    				          'background.vector.fill.color': twaver.Colors.blue_light,
    				          'background.vector.gradient.color': 'white'
    				        },
    				        clients: {
    				          text: 'This is a SubNetwork, please double click it.',
    				          index: 0,
    				          underline: false,
    				          animate: left ? 'playAnimateTurnPage' : 'playAnimateDrill'
    				        }
    				      });*/
    				var node = new twaver.SubNetwork(oneNodeObj.id);
        			node.setName(oneNodeObj.name);
        			if ("石家庄"==oneNodeObj.name) {
        				console.log("dsddddddddddddddd");
        				node.setX(400);
        				node.setY(400);
        			} else if ("衡水"==oneNodeObj.name) {
        				node.setX(450);
        				node.setY(450);
        			} else if ("石家庄"==oneNodeObj.name) {
        				node.setX(500);
        				node.setY(500);
        			} else if ("石家庄"==oneNodeObj.name) {
        				node.setX(500);
        				node.setY(500);
        			} else if ("石家庄"==oneNodeObj.name) {
        				node.setX(500);
        				node.setY(500);
        			} else if ("石家庄"==oneNodeObj.name) {
        				node.setX(500);
        				node.setY(500);
        			} else if ("石家庄"==oneNodeObj.name) {
        				node.setX(500);
        				node.setY(500);
        			} else if ("石家庄"==oneNodeObj.name) {
        				node.setX(500);
        				node.setY(500);
        			} else if ("石家庄"==oneNodeObj.name) {
        				node.setX(500);
        				node.setY(500);
        			}
//        			if(oneNodeObj.image){
//        				node.setImage(oneNodeObj.image);
//        				if(oneNodeObj.image=='group') node.setImage(twaver.Defaults.IMAGE_GROUP);
//        				if(oneNodeObj.image=='subnetwork') node.setImage(twaver.Defaults.IMAGE_SUBNETWORK);
//        			}
//        			if(oneNodeObj.icon){
//        				node.setStyle('icons.names', [oneNodeObj.icon]);
//                        node.setStyle('icons.position', 'topleft.topright');
//        			} else {
//        				node.setStyle('icons.names', 'Text');
//                        node.setStyle('icons.position', 'topleft.topright');
//        			}
                    node.setStyle('background.type','vector');
                    node.setStyle('background.vector.fill',true);
                    node.setStyle('background.vector.gradient','radial.center');
                    node.setStyle('background.vector.fill.color',twaver.Colors.blue_light);
                    node.setStyle('background.vector.gradient.color','white');
                    
                    node.setStyle('shadow.blur',10);
                    node.setStyle('shadow.xoffset',5);
                    node.setStyle('shadow.yoffset',5);
                    //node.setSize({width:150,height:100});
                    node.setStyle('label.color',"#000000");
                    node.setStyle('label.font', '30px "Microsoft Yahei"');
                    node.setClient("clientAttri", oneNodeObj.clientAttri);
                    node.setClient("text", "This is a SubNetwork, please double click it.");
                    node.setClient("index", "0");
                    node.setClient("underline", false);
                    node.setClient("animate", 'playAnimateTurnPage');
                    node.setClient("city_id", oneNodeObj.city_id);
                    node.setClient("ems_id", oneNodeObj.ems_id);
                    node.setClient("subnet_id", oneNodeObj.subnet_id);
                    node.setClient("subnet_type", oneNodeObj.subnet_type);
                    box.add(node);
    			} else {
    				var node = new twaver.Node(oneNodeObj.id);
        			node.setName(oneNodeObj.name);
        			var neattr = oneNodeObj.clientAttri;
        			var ne_service_level="";
        			if (neattr && neattr.length>0) {
        				for (var p=0; p<neattr.length; p++) {
            				if (neattr[p].enName=="service_level") {
            					ne_service_level = neattr[p].value;
            				}
            			}
        				console.log("ne_service_level=22="+ne_service_level);
        			}
        			
//        			if (ne_service_level=="4") {
//        				node.setImage("PTN45");
//        				//node.setSize({width:150,height:100});
//        			} else if (ne_service_level=="5") {
//        				node.setImage("PTN45");
//        				//node.setSize({width:150,height:100});
//        			} else if (ne_service_level=="6") {
//        				node.setImage("PTN30");
//        			} else {
//        				if(oneNodeObj.image){
//            				node.setImage(oneNodeObj.image);
//            				if(oneNodeObj.image=='group') node.setImage(twaver.Defaults.IMAGE_GROUP);
//            				if(oneNodeObj.image=='subnetwork') node.setImage(twaver.Defaults.IMAGE_SUBNETWORK);
//            			}
//        			}
//
//    				console.log("ne_service_level=333="+node.getImage());
//        			if(oneNodeObj.icon){
//        				node.setStyle('icons.names', [oneNodeObj.icon]);
//                        node.setStyle('icons.position', 'bottomright.topleft');
//        			}
                    node.setStyle('shadow.blur',10);
                    node.setStyle('shadow.xoffset',5);
                    node.setStyle('shadow.yoffset',5);
                    //node.setSize({width:150,height:100});
                    node.setStyle('label.color',"#000000");
                    node.setStyle('label.font', '30px "Microsoft Yahei"');
                    node.setClient("clientAttri", oneNodeObj.clientAttri);
                    node.setClient("city_id", oneNodeObj.city_id);
                    node.setClient("ems_id", oneNodeObj.ems_id);
                    node.setClient("ne_id", oneNodeObj.ne_id);
                    node.setClient("subnet_id", oneNodeObj.subnet_id);
                    node.setClient("subnet_type", oneNodeObj.subnet_type);
                    /*if (oneNodeObj.clientAttri  instanceof Array) {
                    	for (var n = 0; n < oneNodeObj.clientAttri.length; n++) {
                    		var attrObj = oneNodeObj.clientAttri[n];
                    		node.setClient("ems_id", jsonobj.resultxml.vendors.vendor[x].int_id);
                    	}
                    }*/
        			console.log(node);
                    box.add(node);
    			}	
    		}
    	}
    	if (jsonobj.linkList && jsonobj.linkList instanceof Array) {
    		for (var m = 0; m < jsonobj.linkList.length; m++) {
    			var oneLinkObj = jsonobj.linkList[m];
    			if (box.containsById(oneLinkObj.id)) {
    				var oldLink = box.getDataById(oneLinkObj.id);
    				oldLink.setParent(parentObj);
    				oldLink.setVisible(true);
    				continue;
    			}
    			var from = box.getDataById(oneLinkObj.fromId);
                var to = box.getDataById(oneLinkObj.toId);
                //var link = new twaver.Link(from, to);
                var link = new twaver.Link(oneLinkObj.id,from, to);
//                link.setName(oneLinkObj.name);
                link.setStyle('shadow.blur',10);
                link.setStyle('shadow.xoffset',6);
                link.setStyle('shadow.yoffset',6);
                link.setStyle('link.width',2);
                link.setStyle('link.color','#4DA492');
                link.setStyle('link.bundle.expanded', false);
                link.setStyle('outer.width', 0);            
                link.setStyle('arrow.from.color', '#4DA492');
                link.setStyle('arrow.to.color', '#4DA492');
                link.setClient("clientAttri", oneLinkObj.clientAttri);
				if(oneLinkObj.arrow){
					if(oneLinkObj.arrow=="10" || oneLinkObj.arrow=="11") link.setStyle('arrow.from', true);
					if(oneLinkObj.arrow=="01" || oneLinkObj.arrow=="11") link.setStyle('arrow.to', true);
				}				
                //box.add(link);
    		}
    	}
    },
    parseCommon2SubnetworkData: function (jsonobj, box, parentObj) {
    	console.log("parseCommonSubnetworkData");
    	console.log(jsonobj);
    	if (jsonobj.nodeList && jsonobj.nodeList instanceof Array) {
    		for (var m = 0; m < jsonobj.nodeList.length; m++) {
    			
    			var oneNodeObj = jsonobj.nodeList[m];
    			if (box.containsById(oneNodeObj.id)) {
    				var oldNode = box.getDataById(oneNodeObj.id);
    				oldNode.setParent(parentObj);
    				oldNode.setVisible(true);
    				continue;
    			}
    			console.log("aaa="+m);
    			console.log(oneNodeObj);
    			if ("subnetwork"==oneNodeObj.type) {
    				var node = new twaver.SubNetwork(oneNodeObj.id);
        			node.setName(oneNodeObj.name);
//        			if(oneNodeObj.image){
//        				node.setImage(oneNodeObj.image);
//        				if(oneNodeObj.image=='group') node.setImage(twaver.Defaults.IMAGE_GROUP);
//        				if(oneNodeObj.image=='subnetwork') node.setImage(twaver.Defaults.IMAGE_SUBNETWORK);
//        			}
//        			if(oneNodeObj.icon){
//        				node.setStyle('icons.names', [oneNodeObj.icon]);
//                        node.setStyle('icons.position', 'topleft.topright');
//        			} else {
//        				node.setStyle('icons.names', 'Text');
//                        node.setStyle('icons.position', 'topleft.topright');
//        			}
                    node.setStyle('background.type','vector');
                    node.setStyle('background.vector.fill',true);
                    node.setStyle('background.vector.gradient','radial.center');
                    node.setStyle('background.vector.fill.color',twaver.Colors.blue_light);
                    node.setStyle('background.vector.gradient.color','white');
                    
                    node.setStyle('shadow.blur',10);
                    node.setStyle('shadow.xoffset',5);
                    node.setStyle('shadow.yoffset',5);
                    //node.setSize({width:150,height:100});
                    node.setStyle('label.color',"#000000");
                    node.setStyle('label.font', '30px "Microsoft Yahei"');
                    node.setClient("clientAttri", oneNodeObj.clientAttri);
                    node.setClient("text", "This is a SubNetwork, please double click it.");
                    node.setClient("index", "0");
                    node.setClient("underline", false);
                    node.setClient("animate", 'playAnimateTurnPage');
                    node.setClient("city_id", oneNodeObj.city_id);
                    node.setClient("ems_id", oneNodeObj.ems_id);
                    node.setClient("subnet_id", oneNodeObj.subnet_id);
                    node.setClient("subnet_type", oneNodeObj.subnet_type);
                    
                    node.setParent(parentObj);
                    box.add(node);
    			} else {
    				var node = new twaver.Node(oneNodeObj.id);
        			node.setName(oneNodeObj.name);
        			var neattr = oneNodeObj.clientAttri;
        			var ne_service_level="";
        			if (neattr && neattr.length>0) {
        				for (var p=0; p<neattr.length; p++) {
            				if (neattr[p].enName=="service_level") {
            					ne_service_level = neattr[p].value;
            				}
            			}
        				console.log("ne_service_level=22="+ne_service_level);
        			}
        			
//        			if (ne_service_level=="4") {
//        				node.setImage("PTN45");
//        				//node.setSize({width:150,height:100});
//        			} else if (ne_service_level=="5") {
//        				node.setImage("PTN45");
//        				//node.setSize({width:150,height:100});
//        			} else if (ne_service_level=="6") {
//        				node.setImage("PTN30");
//        			} else {
//        				if(oneNodeObj.image){
//            				node.setImage(oneNodeObj.image);
//            				if(oneNodeObj.image=='group') node.setImage(twaver.Defaults.IMAGE_GROUP);
//            				if(oneNodeObj.image=='subnetwork') node.setImage(twaver.Defaults.IMAGE_SUBNETWORK);
//            			}
//        			}

    				console.log("ne_service_level=333="+node.getImage());
        			
//        			if(oneNodeObj.icon){
//        				node.setStyle('icons.names', [oneNodeObj.icon]);
//                        node.setStyle('icons.position', 'bottomright.topleft');
//        			}
                    node.setStyle('shadow.blur',10);
                    node.setStyle('shadow.xoffset',5);
                    node.setStyle('shadow.yoffset',5);
                    //node.setSize({width:150,height:100});
                    node.setStyle('label.color',"#000000");
                    node.setStyle('label.font', '30px "Microsoft Yahei"');
                    node.setClient("clientAttri", oneNodeObj.clientAttri);
                    node.setClient("city_id", oneNodeObj.city_id);
                    node.setClient("ems_id", oneNodeObj.ems_id);
                    node.setClient("subnet_id", oneNodeObj.subnet_id);
                    node.setClient("subnet_type", oneNodeObj.subnet_type);
                    /*if (oneNodeObj.clientAttri  instanceof Array) {
                    	for (var n = 0; n < oneNodeObj.clientAttri.length; n++) {
                    		var attrObj = oneNodeObj.clientAttri[n];
                    		node.setClient("ems_id", jsonobj.resultxml.vendors.vendor[x].int_id);
                    	}
                    }*/
        			console.log(node);
        			node.setParent(parentObj);
                    box.add(node);
    			}	
    		}
    	}
    	if (jsonobj.linkList && jsonobj.linkList instanceof Array) {
    		for (var m = 0; m < jsonobj.linkList.length; m++) {
    			var oneLinkObj = jsonobj.linkList[m];
    			if (box.containsById(oneLinkObj.id)) {
    				var oldLink = box.getDataById(oneLinkObj.id);
    				oldLink.setParent(parentObj);
    				oldLink.setVisible(true);
    				continue;
    			}
    			var from = box.getDataById(oneLinkObj.fromId);
                var to = box.getDataById(oneLinkObj.toId);
                var link = new twaver.Link(oneLinkObj.id,from, to);
//                link.setName(oneLinkObj.name);
                link.setStyle('shadow.blur',10);
                link.setStyle('shadow.xoffset',6);
                link.setStyle('shadow.yoffset',6);
                link.setStyle('link.width',2);
                link.setStyle('link.color','#4DA492');
                link.setStyle('link.bundle.expanded', false);
                link.setStyle('outer.width', 0);            
                link.setStyle('arrow.from.color', '#4DA492');
                link.setStyle('arrow.to.color', '#4DA492');
                link.setClient("clientAttri", oneLinkObj.clientAttri);
				if(oneLinkObj.arrow){
					if(oneLinkObj.arrow=="10" || oneLinkObj.arrow=="11") link.setStyle('arrow.from', true);
					if(oneLinkObj.arrow=="01" || oneLinkObj.arrow=="11") link.setStyle('arrow.to', true);
				}				
				link.setParent(parentObj);
                //box.add(link);
    		}
    	}
    },
    addSubnetWorkNode:function (newSwObj, box, parentObj) {
    	//新增子网节点
    	var node = new twaver.SubNetwork(newSwObj.int_id);
		node.setName(newSwObj.zh_label);
		if(newSwObj.image){
			node.setImage(newSwObj.image);
			if(newSwObj.image=='group') node.setImage(twaver.Defaults.IMAGE_GROUP);
			if(newSwObj.image=='subnetwork') node.setImage(twaver.Defaults.IMAGE_SUBNETWORK);
		} else {
			node.setImage("cloud");
		}
		if(newSwObj.icon){
			node.setStyle('icons.names', [newSwObj.icon]);
            node.setStyle('icons.position', 'topleft.topright');
		} else {
			node.setStyle('icons.names', 'Text');
            node.setStyle('icons.position', 'topleft.topright');
		}
        node.setStyle('background.type','vector');
        node.setStyle('background.vector.fill',true);
        node.setStyle('background.vector.gradient','radial.center');
        node.setStyle('background.vector.fill.color',twaver.Colors.blue_light);
        node.setStyle('background.vector.gradient.color','white');
        
        node.setStyle('shadow.blur',10);
        node.setStyle('shadow.xoffset',5);
        node.setStyle('shadow.yoffset',5);
        //node.setSize({width:150,height:100});
        node.setStyle('label.font', '30px "Microsoft Yahei"');
        node.setClient("clientAttri", newSwObj.clientAttri);
        node.setClient("text", "This is a SubNetwork, please double click it.");
        node.setClient("index", "0");
        node.setClient("underline", false);
        node.setClient("animate", 'playAnimateTurnPage');
        node.setClient("city_id", newSwObj.city_id);
        node.setClient("ems_id", newSwObj.ems_id);
        node.setClient("subnet_id", newSwObj.related_subnet);
        node.setClient("subnet_type", "common_subnet");
        
        node.setCenterLocation(newSwObj.locationPoint);
        
        node.setParent(parentObj);
        box.add(node);
    },
    changeSubnetWorkNode:function (newSnNeObj, box, parentObj) {
    	//网元节点归属变化操作
    	console.log(newSnNeObj);
    	var childrenList = parentObj.getChildren();
    	if (childrenList.size()>0) {
    		for (var m=0; m<childrenList.size(); m++) {
    			var oneChildObj = childrenList.get(m);
    			if (oneChildObj instanceof twaver.SubNetwork || oneChildObj instanceof twaver.Node ) {
    				if (newSnNeObj.getId()==oneChildObj.getId()) {
    					//lastData.setParent(parentObj);
    					parentObj.removeChild(oneChildObj);
    				}
    			} else if (oneChildObj instanceof twaver.Link){
    				var fromNodeObj = oneChildObj.getFromNode();
    				var toNodeObj = oneChildObj.getToNode ();
    				if (newSnNeObj.getId()==fromNodeObj.getId()||newSnNeObj.getId()==toNodeObj.getId()) {
    					parentObj.removeChild(oneChildObj);
    				}
    			}
    		}
    	}
    },
    deleteSubnetWorkNode:function (newSnNeObj, box, parentObj) {
    	//删除子网节点是的操作
    	var childrenList = parentObj.getChildren();
    	if (childrenList.size()>0) {
    		for (var m=0; m<childrenList.size(); m++) {
    			var oneChildObj = childrenList.get(m);
    			if (oneChildObj instanceof twaver.SubNetwork || oneChildObj instanceof twaver.Node ) {
    				if (newSnNeObj.getId()==oneChildObj.getId()) {
    					//lastData.setParent(parentObj);
    					parentObj.removeChild(oneChildObj);
    				}
    			} else if (oneChildObj instanceof twaver.Link){
    				var fromNodeObj = oneChildObj.getFromNode();
    				var toNodeObj = oneChildObj.getToNode ();
    				if (newSnNeObj.getId()==fromNodeObj.getId()||newSnNeObj.getId()==toNodeObj.getId()) {
    					parentObj.removeChild(oneChildObj);
    				}
    			}
    		}
    	}
    },
    setLocation:function (node) {
        if (utils.isNotNull(node.getClient("x")) && utils.isNotNull(node.getClient("y"))) {
            node.setCenterLocation(node.getClient("x"), node.getClient("y"))
        }else
        if(utils.isNotNull(node.getClient("real_longitude"))&&utils.isNotNull(node.getClient("real_latitude"))){
            var rlo = node.getClient("real_longitude");
            var rla = node.getClient("real_latitude");
            var maxlo = node.getClient("max_longitude");
            var maxla = node.getClient("max_latitude");
            var minlo = node.getClient("min_longitude");
            var minla = node.getClient("min_latitude");
            var mx = main.network.viewRect.width-50;
            var my = main.network.viewRect.height-50;

            //最小经纬度映射到（50,50），最大经纬度映射到（mx-50,my-50）;
            var minx=50;
            var miny=50;

            var pyx =  (mx-50)/(maxlo-minlo);
            var pyy =  (my-50)/(maxla-minla);
            var x = (rlo-minlo)*pyx+minx;
            var y = (rla-minla)*pyy+miny;
            node.setCenterLocation(x,y);

        }
    }
}
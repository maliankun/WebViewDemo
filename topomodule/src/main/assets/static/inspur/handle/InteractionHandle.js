var InterationHandle = {
    init: function (network, tree, treebox, box, self) {
        tree.addInteractionListener(function (event) {
            if (event.kind == 'click') {
                var selEle = event.data;
                if (selEle instanceof twaver.Node) {
                    if (selEle.getClient("type") == "trans_ems") {
                        window.topo_type="trans_ems";
                        window.topo_id=selEle.getClient("int_id");
                        if (selEle.getClient("tree_type") == 'tree') {
                            if (selEle.getClient("isloadsubnetwork") == 'true') {
                                var index = layer.load(2, {time: 30 * 1000, shade: [0.2, '#ffffff']});
                                var subparams = {"ems_id": selEle.getClient("int_id")};
                                $.ajax({
                                    type: "post",
                                    dataType: "json",
                                    data: subparams,
                                    async: true,
                                    url: rootContext + "/topoManage/querySubnetByEms.ilf",
                                    success: function (json) {
                                        if (json.success == "true") {
                                            selEle.setClient("isloadsubnetwork", 'true');
                                            dataHandle.parseSubNetworkData(json, self.box);
                                        }
                                        layer.close(index);
                                    },
                                    error: function (e) {
                                        layer.alert("查询子网异常！", {icon: 2, title: "错误"});
                                        layer.close(index);
                                    }

                                })
                            }
                            else {
                            //$.jBox.tip("正在加载数据...", 'loading');
                            var index = layer.load(2, {time: 30 * 1000, shade: [0.2, '#ffffff']});
                            var subparams = {"ems_id": selEle.getClient("int_id")};
                            $.ajax({
                                type: "post",
                                dataType: "json",
                                data: subparams,
                                async: true,
                                url: rootContext + "/topoManage/querySubNetWorkByEms.ilf",
                                success: function (json) {
                                    if (json.resultxml.success == true) {
                                        selEle.setClient("isloadsubnetwork", 'true');
                                        dataHandle.parseTreeEmsData(json, self.treebox);
                                    }
                                    layer.close(index);
                                },
                                error: function (e) {
                                    layer.alert("查询子网异常！", {icon: 2, title: "错误"});
                                    layer.close(index);
                                }

                            })
                            }
                        } else {
                            if (selEle.getClient("isloadcity") == 'true') {
                                var index = layer.load(2, {time: 30 * 1000, shade: [0.2, '#ffffff']});
                                var subparams = {"ems_id": selEle.getClient("int_id")};
                                $.ajax({
                                    type: "post",
                                    dataType: "json",
                                    data: subparams,
                                    async: true,
                                    url: rootContext + "/topoManage/querySubnetByEms.ilf",
                                    success: function (json) {
                                        if (json.success == "true") {
                                            selEle.setClient("isloadsubnetwork", 'true');
                                            dataHandle.parseSubNetworkData(json, self.box);
                                        }
                                        layer.close(index);
                                    },
                                    error: function (e) {
                                        layer.alert("查询子网异常！", {icon: 2, title: "错误"});
                                        layer.close(index);
                                    }

                                })
                            }
                            else {
                            //$.jBox.tip("正在加载数据...", 'loading');
                            var index = layer.load(2, {time: 30 * 1000, shade: [0.2, '#ffffff']});
                            var subparams = {"ems_id": selEle.getClient("int_id")};
                            $.ajax({
                                type: "post",
                                dataType: "json",
                                data: subparams,
                                async: true,
                                url: rootContext + "/topoManage/queryCityByEms.ilf",
                                success: function (json) {
                                    // var jsonobj = eval('(' + json + ')');
                                    if (json.resultxml.success == 'true') {
                                        // buttonHandle.initEmsButton(self);
                                        selEle.setClient("isloadcity", 'true');
                                        dataHandle.parseTreeCityData(json, self.ptreebox);
                                    } else {
                                        selEle.setClient("isloadcity", 'true');
                                        layer.alert(json.resultxml.msg, {icon: 2, title: "错误"});
                                        layer.close(index);
                                    }
                                    //$.jBox.closeTip();
                                    layer.close(index);
                                },
                                error: function (e) {
                                    layer.alert("查询省份异常！", {icon: 2, title: "错误"});
                                    //layer.closeAll('loading');
                                    //$.jBox.closeTip();
                                    layer.close(index);
                                }

                            })
                        }
                        }
                    }
                    else if (selEle.getClient("type") == "trans_sub_network") {
                        window.topo_type="trans_sub_network";
                        window.topo_id=selEle.getClient("int_id");
                        //$.jBox.tip("正在加载数据...", 'loading');
                        var index = layer.load(2, {time: 30 * 1000, shade: [0.2, '#ffffff']});
                        var params = {
                            "id": selEle.getClient("int_id"),
                            "type": "trans_sub_network",
                            "ems_id": selEle._parent.getClient("int_id")
                        };
                        $.ajax({
                            type: "post",
                            dataType: "json",
                            data: params,
                            async: true,
                            url: rootContext + "/topoManage/queryTransNe.ilf",
                            success: function (json) {
                                if (json.resultxml.success == true) {
                                    box.clear();
                                    //buttonHandle.initSubNeButton(self);
                                    dataHandle.parseTopoData(json, self.treebox, self.box);
                                } else {
                                    self.box.clear();
                                    layer.alert(json.resultxml.msg, {icon: 2, title: "错误"});
                                }
                                //$.jBox.closeTip();
                                layer.close(index);
                            },
                            error: function (e) {
                                layer.alert("查询异常！", {icon: 2, title: "错误"});
                                //layer.closeAll('loading');
                                //$.jBox.closeTip();
                                layer.close(index);
                            }
                        })
                    }
                    else if (selEle.getClient("type") == "city") {
                        window.topo_type="city";
                        window.province_id=selEle.getClient("int_id");
                        window.ems_id=selEle._parent.getClient("int_id");
                        var index = layer.load(2, {time: 30 * 1000, shade: [0.2, '#ffffff']});
                        var params = {
                            "id": selEle.getClient("int_id"),
                            "type": "city",
                            "ems_id": selEle._parent.getClient("int_id")
                        };
                        $.ajax({
                            type: "post",
                            dataType: "json",
                            data: params,
                            async: true,
                            url: rootContext + "/topoManage/queryTransNe.ilf",
                            success: function (json) {
                                if (json.resultxml.success == true) {
                                    box.clear();
                                    dataHandle.parseTopoData(json, self.ptreebox, self.box);
                                } else {
                                    self.box.clear();
                                    layer.alert(json.resultxml.msg, {icon: 2, title: "错误"});
                                }
                                layer.close(index);
                            },
                            error: function (e) {
                                layer.alert("查询异常！", {icon: 2, title: "错误"});
                                layer.close(index);
                            }
                        })
                    }
                }
            }
        })

        network.getSelectionModel().addSelectionChangeListener(this.handleSelectionChange);
        network.addInteractionListener(function (e) {
            // if (e.kind == 'clickElement' && e.element && e.element.getClassName() == 'twaver.Node') {
            //     var titleImg = document.getElementById('titleImg');
            //     var ei = twaver.Util.getImageAsset(e.element.getImage())._cache;
            //     titleImg.src = ei.toDataURL();
            //
            //     var titleTxt = document.getElementById('titleTxt');
            //     var txt = '';
            //     if (e.element.getName()) {
            //         txt = e.element.getName();
            //     }
            //     titleTxt.innerHTML = txt;
            //     var s = dialogdiv.style;
            //     s.display = 'block';
            //     s.left = e.event.clientX + 'px';
            //     s.top = e.event.clientY + 'px';
            // } else {
            //     dialogdiv.style.display = 'none';
            // }

        })
    },
    initViewChange: function (network) {
        network.addInteractionListener(function (event) {
            if (event.kind == 'doubleClickElement') {
                var element = event.element;
                if(element instanceof twaver.Node){//} && element.getClient("type")=='trans_ne') {
                    $('#topo').hide();
                    $('#equipDiv').show();
                    var neid=element.getClient("int_id")+"";
                    $("#equipFrame")[0].contentWindow.getEquipData(neid)
                }
            }
        })
    },
    handleSelectionChange: function (e) {
        var sm = main.network.getSelectionModel();
        var data = sm.getLastData();

        if (data instanceof twaver.Node && data.getClient("type") == 'trans_ne') {
            createattrs.setattrvalue(data);
            main.rightPane.setPosition(0.88);
            $('#attrtable').show();
        }
        else {
            main.rightPane.setPosition(1);
        }
    }
}

function showTopo() {
    $('#topo').show();
    $('#equipDiv').hide();
}
/**
 * Created by manzhx on 2018/2/5.
 */
var PopupMenus = {
    initPopupMenuTopo: function (network) {
        var popupMenu = new twaver.controls.PopupMenu(network);
        var box = network.getElementBox();
        var lastData, lastPoint, datas;
        popupMenu.onMenuShowing = function (e) {
            lastData = network.getSelectionModel().getLastData();
            lastPoint = network.getLogicalPoint(e);
            datas = network.getSelectionModel().getSelection();
            return true;
        };
        popupMenu.onAction = function (menuItem) {
            if (menuItem.label === '保存位置') {
                PopupMenus.saveLocation(network);
            }
            twaver.Util.hideToolTip();
        };
        popupMenu.setMenuItems(
            [{
                label: '保存位置'
            }]);
        popupMenu.isVisible = function (menuItem) {
            if(window.topo_type == "trans_sub_network"||window.topo_type == "city"||window.topo_type == "trans_ems"){
                return true;
            }
            return false;
        };
        // popupMenu.isEnabled = function (menuItem) {
        //     if (menuItem.label === '删除') {
        //         if (lastData.getClient('odm')) {
        //             return justify(lastData.getClient('data').create_type, lastData.getClient('data').task_uuid);
        //         }
        //     }
        // };
    },
    saveLocation: function (network) {
        var box = network.getElementBox();
        if (window.topo_type == "trans_ems") {
            var index = layer.load(2, {time: 30 * 1000, shade: [0.2, '#ffffff']});
            var param = {
                "int_id": window.topo_id,
                "type": "trans_ems",
            };
            var nes = [];
            box.forEach(function (element) {
                if (element instanceof twaver.Node) {
                    if (element.getClient("type") == "trans_sub_network") {
                        var ne={};
                        ne.int_id=element.getClient("int_id");
                        ne.x=element.getX();
                        ne.y=element.getY();
                        nes.push(ne);
                    }
                }
            });
            param.ne=nes;
            var params = {param: JSON.stringify(param)};
            $.ajax({
                type: "post",
                dataType: "json",
                data: params,
                async: true,
                url: rootContext + "/topoManage/saveTransNeLocation.ilf",
                success: function (resultJson) {
                    if (resultJson.resultxml.success == true) {
                        layer.alert("保存位置信息成功", {icon: 1, title: "提示"});
                    }
                    layer.close(index);
                },
                error: function (e) {
                    layer.alert("保存失败！", {icon: 2, title: "错误"});
                    layer.close(index);
                }
            })
        } else if (window.topo_type == "trans_sub_network") {
            var index = layer.load(2, {time: 30 * 1000, shade: [0.2, '#ffffff']});
            var param = {
                "int_id": window.topo_id,
                "type": "trans_sub_network",
            };
            var nes = [];
            box.forEach(function (element) {
                if (element instanceof twaver.Node) {
                    if (element.getClient("type") == "trans_ne") {
                        var ne={};
                        ne.int_id=element.getClient("int_id");
                        ne.x=element.getX();
                        ne.y=element.getY();
                        nes.push(ne);
                    }
                }
            });
            param.ne=nes;
            var params = {param: JSON.stringify(param)};
            $.ajax({
                type: "post",
                dataType: "json",
                data: params,
                async: true,
                url: rootContext + "/topoManage/saveTransNeLocation.ilf",
                success: function (json) {
                    if (json.resultxml.success == true) {
                        layer.alert("保存位置信息成功", {icon: 1, title: "提示"});
                    } else {
                        layer.alert("保存失败", {icon: 2, title: "错误"});
                    }
                    layer.close(index);
                },
                error: function (e) {
                    layer.alert("保存失败！", {icon: 2, title: "错误"});
                    layer.close(index);
                }
            })
        }else if(window.topo_type == "city"){
            var index = layer.load(2, {time: 30 * 1000, shade: [0.2, '#ffffff']});
            var param = {
                "type": "city",
                "city_id":province_id,
                "ems_id":ems_id
            };
            var nes = [];
            box.forEach(function (element) {
                if (element instanceof twaver.Node) {
                    if (element.getClient("type") == "trans_ne") {
                        var ne={};
                        ne.int_id=element.getClient("int_id");
                        ne.x=element.getX();
                        ne.y=element.getY();
                        nes.push(ne);
                    }
                }
            });
            param.ne=nes;
            var params = {param: JSON.stringify(param)};
            $.ajax({
                type: "post",
                dataType: "json",
                data: params,
                async: true,
                url: rootContext + "/topoManage/saveTransNeLocation.ilf",
                success: function (json) {
                    if (json.resultxml.success == true) {
                        layer.alert("保存位置信息成功", {icon: 1, title: "提示"});
                    } else {
                        layer.alert("保存失败", {icon: 2, title: "错误"});
                    }
                    layer.close(index);
                },
                error: function (e) {
                    layer.alert("保存失败！", {icon: 2, title: "错误"});
                    layer.close(index);
                }
            })
        }
    }
}
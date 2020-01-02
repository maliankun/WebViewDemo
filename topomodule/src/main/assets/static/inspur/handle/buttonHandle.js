var buttonHandle = {
    initButton: function (self) {
        $('#toolbar').empty();
        this.createButton('放大', '../images/zoomIn.png', function (e) {
            self.network.zoomIn();
        });
        this.createButton('缩小', '../images/zoomOut.png', function (e) {
            self.network.zoomOut();
        });
        this.createButton('缩放到全屏', '../images/zoomOverview.png', function (e) {
            self.network.zoomOverview();
        });
        this.createButton('还原', '../images/zoomReset.png', function (e) {
            self.network.zoomReset();
        });
        this.createButton('导出图片', '../images/export.png', function (e) {
            var canvas;
            var width = document.getElementById('topo').clientWidth;
            var height = document.getElementById('topo').clientHeight;
            if (self.network.getCanvasSize) {
                var bounds = self.network.getUnionBounds();
                var canvaSize = self.network.getCanvasSize();
                var rect = _twaver.math.unionRect({
                    x: 0,
                    y: 0,
                    width: width,
                    height: height
                    //width: canvaSize.width,
                    //height: canvaSize.height
                }, bounds);
                canvas = self.network.toCanvas(rect.width, rect.height, null, self.network.getZoom(), rect.x, rect.y);
            } else {
                canvas = self.network.toCanvas(self.network.getView().scrollWidth, self.network.getView().scrollHeight);
            }


            //if (twaver.Util.isIE) {
            var w = window.open();
            w.document.open();
            w.document.write("<img src='" + canvas.toDataURL() + "'/>");
            w.document.close();
            //} else {
            //    window.open(canvas.toDataURL(), 'network.png');
            //}
        });
        this.createButton('鹰眼', '../images/overview.png', function (e) {
            self.toggleOvewview();
        });
        this.createButton('全屏', '../images/fullscreen.png', function (e) {
            self.toggleFullscreen();
        });

        // //添加布局按钮
        // var layoutMenu = $('<select id="layout" style="width:100px;height:25px"><option value="round">环形布局</option><option value="symmetry">对称布局</option><option value="topbottom">树形布局</option> <option value="bottomtop">倒树形布局</option> <option value="leftright">自左向右</option><option value="rightleft">自右向左</option></select>');
        // $('#toolbar').append(layoutMenu);
        // layoutMenu.selectmenu({
        //     width: 100,
        //     height:25,
        //     change: function( event, ui ) {
        //         self.autoLayouter.doLayout(ui.item.value,function () {
        //             self.autoLayouter.doLayout(ui.item.value);
        //         });
        //     }
        // });
        self.springLayouter.start();
    },
    initEmsButton: function (self) {
        self.springLayouter.stop();
         $('#toolbar').empty();
        this.createButton('放大', '../images/zoomIn.png', function (e) {
            self.network.zoomIn();
        });
        this.createButton('缩小', '../images/zoomOut.png', function (e) {
            self.network.zoomOut();
        });
        this.createButton('缩放到全屏', '../images/zoomOverview.png', function (e) {
            self.network.zoomOverview();
        });
        this.createButton('还原', '../images/zoomReset.png', function (e) {
            self.network.zoomReset();
        });
        this.createButton('导出图片', '../images/export.png', function (e) {
            var canvas;
            var width = document.getElementById('topo').clientWidth;
            var height = document.getElementById('topo').clientHeight;
            if (self.network.getCanvasSize) {
                var bounds = self.network.getUnionBounds();
                var canvaSize = self.network.getCanvasSize();
                var rect = _twaver.math.unionRect({
                    x: 0,
                    y: 0,
                    width: width,
                    height: height
                    //width: canvaSize.width,
                    //height: canvaSize.height
                }, bounds);
                canvas = self.network.toCanvas(rect.width, rect.height, null, self.network.getZoom(), rect.x, rect.y);
            } else {
                canvas = self.network.toCanvas(self.network.getView().scrollWidth, self.network.getView().scrollHeight);
            }


            //if (twaver.Util.isIE) {
            var w = window.open();
            w.document.open();
            w.document.write("<img src='" + canvas.toDataURL() + "'/>");
            w.document.close();
            //} else {
            //    window.open(canvas.toDataURL(), 'network.png');
            //}
        });
        this.createButton('鹰眼', '../images/overview.png', function (e) {
            self.toggleOvewview();
        });
        this.createButton('全屏', '../images/fullscreen.png', function (e) {
            self.toggleFullscreen();
        });

        //添加布局按钮
        var layoutMenu = $('<select id="layout" style="width:100px;height:25px"><option value="symmetry">对称布局</option><option value="round">环形布局</option>' +
            // '<option value="topbottom">树形布局</option><option value="bottomtop">倒树形布局</option><option value="leftright">自左向右</option><option value="rightleft">自右向左</option>' +
            '</select>');
        $('#toolbar').append(layoutMenu);
        layoutMenu.selectmenu({
            width: 100,
            height:25,
            change: function( event, ui ) {
                self.autoLayouter.doLayout(ui.item.value,function () {
                    self.autoLayouter.doLayout(ui.item.value);
                });
            }
        });
        // var start = utils.addButton(self.topDiv, '保存位置',28,80, null, function () {
        //     var json={};
        //     self.treebox.selected();
        //     self.box.forEach(function (node) {
        //         if(node instanceof twaver.Node){
        //
        //         }
        //     })
        // });
    },
    initSubNeButton: function (self) {
        self.springLayouter.stop();
        $('#toolbar').empty();
        this.createButton('放大', '../images/zoomIn.png', function (e) {
            self.network.zoomIn();
        });
        this.createButton('缩小', '../images/zoomOut.png', function (e) {
            self.network.zoomOut();
        });
        this.createButton('缩放到全屏', '../images/zoomOverview.png', function (e) {
            self.network.zoomOverview();
        });
        this.createButton('还原', '../images/zoomReset.png', function (e) {
            self.network.zoomReset();
        });
        this.createButton('导出图片', '../images/export.png', function (e) {
            var canvas;
            var width = document.getElementById('topo').clientWidth;
            var height = document.getElementById('topo').clientHeight;
            if (self.network.getCanvasSize) {
                var bounds = self.network.getUnionBounds();
                var canvaSize = self.network.getCanvasSize();
                var rect = _twaver.math.unionRect({
                    x: 0,
                    y: 0,
                    width: width,
                    height: height
                    //width: canvaSize.width,
                    //height: canvaSize.height
                }, bounds);
                canvas = self.network.toCanvas(rect.width, rect.height, null, self.network.getZoom(), rect.x, rect.y);
            } else {
                canvas = self.network.toCanvas(self.network.getView().scrollWidth, self.network.getView().scrollHeight);
            }


            //if (twaver.Util.isIE) {
            var w = window.open();
            w.document.open();
            w.document.write("<img src='" + canvas.toDataURL() + "'/>");
            w.document.close();
            //} else {
            //    window.open(canvas.toDataURL(), 'network.png');
            //}
        });
        this.createButton('鹰眼', '../images/overview.png', function (e) {
            self.toggleOvewview();
        });
        this.createButton('全屏', '../images/fullscreen.png', function (e) {
            self.toggleFullscreen();
        });

        //添加布局按钮
        var layoutMenu = $('<select id="layout" style="width:100px;height:25px"><option value="symmetry">对称布局</option><option value="round">环形布局</option>' +
            // '<option value="topbottom">树形布局</option><option value="bottomtop">倒树形布局</option><option value="leftright">自左向右</option><option value="rightleft">自右向左</option>' +
            '</select>');
        $('#toolbar').append(layoutMenu);
        layoutMenu.selectmenu({
            width: 100,
            height:25,
            change: function( event, ui ) {
                self.autoLayouter.doLayout(ui.item.value,function () {
                    self.autoLayouter.doLayout(ui.item.value);
                });
            }
        });
        // var start = utils.addButton(self.topDiv, '保存位置',28,80, null, function () {
        //     var json={};
        //     self.treebox.selected();
        //     self.box.forEach(function (node) {
        //         if(node instanceof twaver.Node){
        //
        //         }
        //     })
        // });
        self.springLayouter.stop();
    },
    createButton: function (title, image, func) {
        var button = $('<button title="' + title + '" style="height:25px;width:30px;"><img src="' + image + '" style="position:absolute;top:20%;left:25%;"></img></button>').click(func);
        //button.css('height','25px');
        //button.css('width','31px');
        $('#toolbar').append(button);
        button.button();
    }

}
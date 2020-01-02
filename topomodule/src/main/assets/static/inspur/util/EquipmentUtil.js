EquipmentUtil = {};

EquipmentUtil.KPICard = function (id) {
	EquipmentUtil.KPICard.superClass.constructor.call(this, id);
};
twaver.Util.ext('EquipmentUtil.KPICard', twaver.Grid, {
    getElementUIClass: function () {
        return demo.KPICardUI;
    }
});

EquipmentUtil.KPICardUI = function (network, element) {
	EquipmentUtil.KPICardUI.superClass.constructor.call(this, network, element);
};
twaver.Util.ext('EquipmentUtil.KPICardUI', twaver.network.GridUI, {
    drawBody: function () {
        if (!this._nodeCanvas) {
            this._nodeCanvas = twaver.Util.createCanvas();
        }
        this.addComponent(this._nodeCanvas);
        var rect = this.getBodyRect();
        var bounds = { x: rect.x, y: rect.y, width: rect.width, height: rect.height };
        var g = this.setShadow(this, this._nodeCanvas, rect);

        g.fillStyle = '#000000';
        g.rect(rect.x, rect.y, rect.width, rect.height);
        g.fill();

        twaver.Util.grow(rect, -4, -4);
        g.strokeStyle = '#FFFFFF';
        g.lineWidth = 1;
        g.beginPath();
        g.rect(rect.x, rect.y, rect.width, rect.height);
        g.stroke();

        twaver.Util.grow(rect, -1, 0);
        var value = this.getElement().getClient('value');
        var h = rect.height * value / 100;
        rect.y = rect.y + rect.height - h;
        rect.height = h;

        g.beginPath();
        twaver.Util.fill(g, '#FF9900', 'spread.west', '#FFFFFF', rect.x, rect.y, rect.width, rect.height);
        g.rect(rect.x, rect.y, rect.width, rect.height);
        g.fill();
        this.addBodyBounds(bounds);
    }
});
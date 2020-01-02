/**
 * Created by weijx on 2017/8/12.
 */
var CreateTable = {
    tableObj: {},
    attrTable: null,
    init: function (table) {
        var self=this;
        self.addAttrTable(table);
    },
    addAttrTable: function (table) {
        var self=this;
        self.createColumn(table, "属性名", "attrName", 'client', 'string');
        self.createColumn(table, "属性", "attrValue", 'client', 'string').setWidth(158);
        // window.attrPane.setCenter(new twaver.controls.TablePane(table));
        self.attrTable = table;
        main.box.getSelectionModel().addSelectionChangeListener(self.showAttr);
    },
    showAttr: function (e) {
        if (CreateTable.attrTable) {
            CreateTable.attrTable.getDataBox().clear();
            var selEle = main.box.getSelectionModel().getLastData();
            if (selEle) {
                var modelObj = Util.findModelById(selEle.getClient(Consts.twaver_model_id));
                if (modelObj) {
                    for (var j = 0, len_r = modelObj.result.length; j < len_r; j++) {
                        var resultObj = modelObj.result[j];
                        for (var i = 0, len = modelObj.attr.length; i < len; i++) {
                            var attrObj = modelObj.attr[i];
                            if (resultObj.attributeEnName == attrObj.attributeEnName) {
                                var attrNode = new twaver.Node();
                                CreateTable.attrTable.getDataBox().add(attrNode);
                                attrNode.setClient('attrName', attrObj.attributeCnName);
                                var attrObj = modelObj.attr[i];
                                var propertyName = attrObj.attributeEnName;
                                if (attrObj.ifChange == 0) {
                                    if (attrObj.dataType == 'datetoday') {
                                        var value = selEle.getClient(propertyName);
                                        var JsonDateValue;
                                        if (!utils.isNotNull(value))
                                            JsonDateValue = '';
                                        else if (!utils.isNotNull(value.time))
                                            JsonDateValue = new Date(value);
                                        else
                                            JsonDateValue = new Date(value.time);
                                        JsonDateValue = Ext.Date.format(JsonDateValue, 'Y-m-d');
                                        attrNode.setClient('attrValue', JsonDateValue);
                                    } else if (attrObj.dataType == 'datetosecond') {
                                        var value = selEle.getClient(propertyName);
                                        var JsonDateValue;
                                        if (!utils.isNotNull(value))
                                            return '';
                                        else if (!utils.isNotNull(value.time))
                                            JsonDateValue = new Date(value);
                                        else
                                            JsonDateValue = new Date(value.time);
                                        JsonDateValue = Ext.Date.format(JsonDateValue, 'Y-m-d H:i:s');
                                        attrNode.setClient('attrValue', JsonDateValue);
                                    } else {
                                        attrNode.setClient('attrValue', selEle.getClient(attrObj.attributeEnName));
                                    }
                                }
                                else if (attrObj.ifChange == 1) {
                                    attrNode.setClient('attrValue', selEle.getClient(attrObj.attributeEnName + '_transName'));
                                } else if (attrObj.inputType == 'select' || attrObj.inputType == 'pageselect' || attrObj.inputType == 'pageselectmore') {
                                    attrNode.setClient('attrValue', selEle.getClient(attrObj.attributeEnName + '_transName'));
                                } else {
                                    attrNode.setClient('attrValue', selEle.getClient(attrObj.attributeEnName));
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    createColumn: function (table, name, propertyName, propertyType, valueType, editable) {
        var column = new twaver.Column(name);
        column.setName(name);
        column.setPropertyName(propertyName);
        column.setPropertyType(propertyType);
        if (valueType) column.setValueType(valueType);
        column.setEditable(editable);
        column.renderHeader = function (div) {
            var span = document.createElement('span');
            span.style.whiteSpace = 'nowrap';
            span.style.verticalAlign = 'middle';
            span.style.padding = '1px 2px 1px 2px';
            span.innerHTML = column.getName() ? column.getName() : column.getPropertyName();
            span.setAttribute('title', span.innerHTML);
            span.style.font = 'bold 12px Helvetica';
            div.style.textAlign = 'center';
            div.appendChild(span);
        };
        table.getColumnBox().add(column);
        return column;
    }
}

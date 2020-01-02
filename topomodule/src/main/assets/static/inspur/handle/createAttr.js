/**
 * Created by weijx on 2017/8/12.
 */
var createattrs = {
    //init:function(){
    //    $('#attrfieldset').remove();
    //    var contentWin=$('<fieldset id="attrfieldset"/>').appendTo($('#attrbar'));
    //    var form_body = $('<form class="form-horizontal" />').appendTo($(contentWin));
    //    var zh_labelinput=$('<div id="div_zh_label" class="item"> <label  class="item-label">网元名称：</label> <label class="item-input" id="zh_label"/> </div>').appendTo($(form_body));
    //    var zh_labelinput=$('<div id="div_ne_model" class="item"> <label  class="item-label">型号：</label> <label class="item-input" id="ne_model"/> </div>').appendTo($(form_body));
    //    var zh_labelinput=$('<div id="div_related_ems" class="item"> <label  class="item-label">EMS：</label> <label class="item-input" id="related_ems"/> </div>').appendTo($(form_body));
    //    var zh_labelinput=$('<div id="div_related_sn" class="item"> <label  class="item-label">子网：</label> <label class="item-input" id="related_sn"/> </div>').appendTo($(form_body));
    //    var zh_labelinput=$('<div id="div_city_id" class="item"> <label  class="item-label">省份：</label> <label class="item-input" id="city_id"/> </div>').appendTo($(form_body));
    //    var zh_labelinput=$('<div id="div_county_id" class="item"> <label  class="item-label">地市：</label> <label class="item-input" id="county_id"/> </div>').appendTo($(form_body));
    //    var zh_labelinput=$('<div id="div_related_site" class="item"> <label  class="item-label">站点：</label> <label class="item-input" id="related_site"/> </div>').appendTo($(form_body));
    //},
    setattrvalue:function(node){
        if(node instanceof twaver.Node){
            $('#zh_label').text(node.getClient('zh_label'));
            $('#ne_model').text(node.getClient('ne_model_value'));
            $('#related_ems').text(node.getClient('related_ems_value'));
            $('#related_sn').text(node.getClient('related_sn_value'));
            $('#city_id').text(node.getClient('city_id_value'));
            $('#county_id').text(node.getClient('county_id_value'));
            $('#related_site').text(node.getClient('related_site_value'));
        }
    }
}

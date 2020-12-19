sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
], function (UIComponent, JSONModel) {
    "use strict";

    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
        metadata : {
           manifest: 'json'
        },
        init : function () {
            UIComponent.prototype.init.apply(this, arguments);

            const oData = {
                recipient : {
                    name : "UI5"
                }
            };

            const oModel = new JSONModel(oData);
            this.setModel(oModel);
        }
    });
});
sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    './controller/CustomDialog'
], function (UIComponent, JSONModel, CustomDialog) {
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

            this._customDialog = new CustomDialog(this.getRootControl());
        },
        exit: function () {
            this._customDialog.destroy();
            delete this._customDialog;
        },
        openCustomDialog: function () {
            this._customDialog.open();
        }
    });
});
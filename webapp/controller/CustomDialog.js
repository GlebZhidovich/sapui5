sap.ui.define([
    'sap/ui/base/ManagedObject',
    'sap/ui/core/Fragment'
], function (ManagedObject, Fragment) {
    "use strict";

    return ManagedObject.extend('sap.ui.demo.walkthrough.controller.CustomDialog', {
        constructor: function (oView) {
            this._oView = oView;
        },

        exit: function () {
            delete this._oView;
        },

        open: function () {
            const oView = this._oView;

            if (!oView.byId('customDialog')) {
                const oFragmentController = {
                    onCloseDialog: function () {
                        oView.byId('customDialog').close();
                    }
                }
                Fragment.load({
                    id: oView.getId(),
                    name: 'sap.ui.demo.walkthrough.view.CustomDialog',
                    controller: oFragmentController
                }).then(function (oDialog) {
                    oView.addDependent(oDialog);
                    oDialog.open();
                }).catch(e => console.log(e.message))
            } else {
                oView.byId('customDialog').open();
            }
        }
    })
})
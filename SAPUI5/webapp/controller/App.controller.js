sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.MessageToast} MessageToast
     */
    function (Controller, MessageToast, Models, ResourceModel) {
        "use strict"; 

        return Controller.extend("logaligroup.SAPUI5.controller.App", {

            onInit: function () {

            },

            onShowHello: function () {
                //Read text from i18n model
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);
                MessageToast.show(sMsg);
            }

        });

    });
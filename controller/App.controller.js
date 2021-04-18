sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,MessageToast,JSONModel) {
		"use strict";

		return Controller.extend("ns.quickstartproject1.controller.App", {
			
            onreadybtn: function(){
                MessageToast.show("Welcome to UI5 World!");
            },
            onSteadybtn:function(){
                MessageToast.show("Welcome to Quick Start App");
            },
            onGobtn:function(){
                 MessageToast.show("Welcome to Quick Start App");
                 this.byId("app").to(this.byId("intro"));
            } ,
            onInit: function () {
this.getView().setModel(new JSONModel({
					features: [
						"Enterprise-Ready Web Toolkit",
						"Powerful Development Concepts",
						"Feature-Rich UI Controls",
						"Consistent User Experience",
						"Free and Open Source",
						"Responsive Across Browsers and Devices"
					]
				})
			);
            },
            onChange: function (oEvent) {
			var bState = oEvent.getParameter("state");
			this.byId("ready").setVisible(bState);
		}
		});
	});

sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,MessageToast) {
		"use strict";

		return Controller.extend("ns.quickstartproject1.controller.App", {
			onInit: function () {

            },
            onreadybtn: function(){
                MessageToast.show("Welcome to UI5 World!");
            }
		});
	});

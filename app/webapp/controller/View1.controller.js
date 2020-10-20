sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("szkolenie.szkolenie.controller.View1", {
		data: [],
		onInit: function () {
			var oView = this.getView();
			var oModelJson = new sap.ui.model.json.JSONModel();
			var oData = {
				results: []
			};
			oModelJson.setData(oData);
			oView.setModel(oModelJson);
		},

		onButtonPress: function() {
			var that = this;
			var api = '/getDummyText';

			fetch(api).then(res => res.json()).then(data => {
				var oView = that.getView();
				var oModel = oView.getModel();
				var oData = oModel.getData();

				if(oData) {
					oData.results.push(...data.results)
				}
				
				oModel.setData(oData);
			}).catch(err => alert(err))
		}
	});
});
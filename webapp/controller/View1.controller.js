sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("zcursoapp1bitar.controller.View1", {
            onInit: function () {

            },

            onCreate: function(){
                var that = this;
                var usuario     = this.getView().byId("idUsuario").getValue();
                var nome        = this.getView().byId("idNome").getValue();
                var projetoSegw = this.getView().byId("idProjetoSegw").getValue();
                var email       = this.getView().byId("idEmail").getValue();

                if(!usuario){
                    sap.m.MessageBox.error(this.getView().getModel("i18n").getResourceBundle().getText("lblMsgErroUser"));
                    return;
                }

                var oDados = {
                    Usuario: usuario,
                    Nome: nome,
                    ProjetoSegw: projetoSegw,
                    Email: email
                }

                this.getView().getModel().create('/AlunosFioriSet', oDados, {
                    success: function(oData, oResponse){
                        sap.m.MessageBox.success(that.getView().getModel("i18n").getResourceBundle().getText("lblMsgSuccessCreate"));
                        that.getView().byId("idUsuario").setValue();
                        that.getView().byId("idNome").setValue();
                        that.getView().byId("idProjetoSegw").setValue();
                        that.getView().byId("idEmail").setValue();
                    },
                    error: function(oData, oResponse){
                        sap.m.MessageBox.error(that.getView().getModel("i18n").getResourceBundle().getText("lblMsgErrorCreate"));
                    }
                });
            }
        });
    });

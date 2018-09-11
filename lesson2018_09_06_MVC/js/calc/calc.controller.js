 ;
 (function (window) {

     window.CalcController = function (view, model) {
         var self = this;
         self.view = view;
         self.model = model;

         self.view.handle('addData', function (arg1, arg2, mathAction) {
             self.getData(arg1, arg2, mathAction);
             self.doMathAction(arg1, arg2, mathAction);
         })



     }

    CalcController.prototype.getData = function (arg1, arg2, mathAction, result) {

         var self = this;
         self.model.addData(arg1, arg2, mathAction, result, function (data) {

             self.view.render('showRes', data);
         })
    }

     CalcController.prototype.doMathAction = function (arg1, arg2, mathAction, result) {

         var self = this;
         self.model.doAction(arg1, arg2, mathAction, result, function (data) {

             self.view.render('showRes', data);
         })
     }

     CalcController.prototype.initView = function () {
         var self = this;
         self.model.getAll(function (data) {
             self.view.render('showRes', data);
         });

     }

 }(window));
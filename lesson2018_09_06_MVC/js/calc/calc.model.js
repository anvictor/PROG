;
 (function (window) {

     window.CalcModel = function (data) {
         this.data = data;
     }


     CalcModel.prototype.addData = function (arg1, arg2, mathAction, result, cb) {
         var self=this;
                 var newData = {
                     arg1: arg1,
                     arg2: arg2,
                     mathAction: mathAction,
                     result: result,
                     resVisible: 'visible'
                 }
         if(arg1 === '' && arg2 === ''){
                 alert('Введите что-то');

             }

            self.data=newData;

         cb(this.data);
         return this.data;
     }

     CalcModel.prototype.getAll = function (cb) {
         cb(this.data);
         return this.data;
     }

     CalcModel.prototype.doAction = function (arg1, arg2, mathAction, result, cb) {
         let self = this;
         switch(mathAction) {
             case 'pls':    self.data.result = +arg1 + +arg2;
                            self.data.mathAction = ' + ';
                            break;
             case 'mns':    self.data.result = +arg1 - +arg2;
                            self.data.mathAction = ' - ';
                            break;
             case 'mlt':    self.data.result = +arg1 * +arg2;
                            self.data.mathAction = ' * ';
                            break;
             case 'dvd':    self.data.result = +arg1 / +arg2;
                            self.data.mathAction = ' / ';
                            break;
             case 'mdl':    self.data.result = +arg1 % +arg2;
                            self.data.mathAction = ' % ';
                            break;
             default:       alert('Да,ну!');
                            break;
         }


          cb(this.data);
          return this.data;
     }


 }(window));
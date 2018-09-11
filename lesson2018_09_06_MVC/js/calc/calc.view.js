;
(function (window) {

     window.CalcView = function (template) {
         this.$arg1 = document.getElementById('arg1');
         this.$arg2 = document.getElementById('arg2');
         this.$mathAction = document.getElementById('mathAction');
         this.addBtn = document.getElementById('data__add-btn');
         this.res = document.getElementById('result__place');
         this.tpl = template;
     }

     CalcView.prototype.handle = function (eventName, handler) {
         let self = this;
         if (eventName === 'addData') {
             self.addBtn.addEventListener('click', function () {
                 if(isNaN(+self.$arg1.value)){
                 alert("a - число");
                 return;}
                 if(isNaN(+self.$arg2.value)){
                     alert("b - число");
                     return;}
                 let arg1 = +self.$arg1.value;
                 let arg2 = +self.$arg2.value;
                 let mathAction = self.$mathAction.value;
                 handler(arg1, arg2, mathAction);
             })
         }
     }

     CalcView.prototype.render = function (viewCmd, data) {
         var self = this;
         var viewCommands = {
             showRes: function () {
                 self.res.className = data.resVisible;
                 self.res.innerHTML = self.tpl.show(data);
             }
         };
         viewCommands[viewCmd]();
    }




}(window));
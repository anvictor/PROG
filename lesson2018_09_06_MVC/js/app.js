;
(function () {

    var CalcModule = function () {
        this.datas = DATAS;
        this.template = new CalcTemplate();
        this.view = new CalcView(this.template);
        this.model = new CalcModel(this.datas);
        this.controller = new CalcController(this.view, this.model);
    }

    var calcModule = new CalcModule();

    calcModule.controller.initView();

}());
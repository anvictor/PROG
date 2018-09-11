;
(function (window) {

    window.CalcTemplate = function () {
        this.calcTemplate = `
                <p>{{arg1}} {{mathAction}} {{arg2}} = {{result}}</p>
        `;
    }

    CalcTemplate.prototype.show = function (data) {
        var view = '';
        var template = this.calcTemplate;
        template = template.replace('{{arg1}}', data.arg1);
        template = template.replace('{{mathAction}}', data.mathAction);
        template = template.replace('{{arg2}}', data.arg2);
        template = template.replace('{{class}}', data.resVisible);
        template = template.replace('{{result}}', data.result);
        view = view + template;
        return view;
    }

}(window));
// передал виндовз в функцию.
// создал общее пространство видимости для всего,
// кроме переменных и функций объявленных внутри
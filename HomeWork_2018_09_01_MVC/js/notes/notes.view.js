(function (window) {

    window.NotesView = function (moduleName, template) {
        this.moduleSelector = '[data-module=' + moduleName + '] ';
        this.$field = document.querySelector(this.moduleSelector + '.notes__add-inp');
        this.$addBtn = document.querySelector(this.moduleSelector + '.notes__add-btn');
        this.$list = document.querySelector(this.moduleSelector + '.notes__list');

        this.tpl = template;
    }

    NotesView.prototype.handle = function (eventName, handler) {
        let self = this;
        if (eventName === 'addNote') {
            self.$addBtn.addEventListener('click', function () {
                let text = self.$field.value;
                handler(text);
            })
        }

        if (eventName === 'changeFav') {
            document.addEventListener('click', function (e) {
                 var star = e.target;
                var id = $attr(star, 'star-id');
                 handler(id);
                })
        }

        if (eventName === 'removeNote') {
            document.addEventListener('click', function (e) {
                var btn = e.target;
                if (btn.className === 'note__rm-button') {
                    var id = $attr(btn, 'data-id');
                    handler(+id);
                }
            })
        }
    }

    NotesView.prototype.render = function (viewCmd, data) {
        var self = this;
        var viewCommands = {
            showNotes: function () {self.$list.innerHTML = self.tpl.show(data);}
        };
        viewCommands[viewCmd]();
    }



    NotesView.prototype.clearNewNote = function () {
        this.$field.value = '';
    }



}(window));
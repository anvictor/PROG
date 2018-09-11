;
(function (window) {

    window.NotesController = function (view, model) {
        var self = this;
        self.view = view;
        self.model = model;

        self.view.handle('addNote', function (text) {
            self.addItem(text);
        })

        self.view.handle('changeFav', function (id) {
            self.changeFavorite(id);
        })

        self.view.handle('removeNote', function (id) {
            self.removeNote(id); // 123
        })
    }

    NotesController.prototype.addItem = function (text) {

        var self = this;
        if (!text) {
            return;
        }
        self.model.add(text, function (data) {
            self.view.clearNewNote();
            self.view.render('showNotes', data);
        })
    }

    NotesController.prototype.removeNote = function (id) {
        var self = this;
        self.model.remove(id, function (newData) {
            if (id === -1) {
                alert('ЧТО ТЫ ХОЧЕШЬ УДАЛИТЬ???');
            } else {
                // alert('У тебя осталось ' + newData.length + ' заметок');
                self.view.render('showNotes', newData);
            }
        })
    }

    NotesController.prototype.changeFavorite = function (id) {
        var self = this;
        self.model.getAll(function (data) {
            self.model.changeStar(id, function (data) {
                self.view.render('showNotes', data)
            })
        })
    }

    NotesController.prototype.initView = function () {
        var self = this;
        self.model.getAll(function (data) {
            self.view.render('showNotes', data);
        });

    }

}(window));
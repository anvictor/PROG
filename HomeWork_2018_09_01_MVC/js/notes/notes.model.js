(function (window) {

    window.NotesModel = function (data) {
        this.data = data;
    }

    NotesModel.prototype.getAll = function (cb) {
        cb(this.data);
        return this.data;
    }

    NotesModel.prototype.get = function (id, cb) {
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].id === id) {
                cb(this.data[i]);
                return this.data[i];
            }
        }

        return false;
    }

    NotesModel.prototype.add = function (text, cb) {
        var newNote = {
            text: text,
            isFavorite: false
        }
        newNote.id = new Date().getTime();
        this.data.push(newNote);
        cb(this.data);
    }

    NotesModel.prototype.remove = function (id, cb) {
        var self = this;
        for (var i = 0; i < self.data.length; i++) {
            if (self.data[i].id === id) {
                self.data.splice(i, 1);
                cb(self.data);
                return;
            }
        }
        cb(-1);
    }

     NotesModel.prototype.changeStar = function (id, callback) {
         var self = this;
         for (var i = 0; i < self.data.length; i++) {
            if (self.data[i].id == id) {
                self.data[i].isFavorite = !self.data[i].isFavorite;
                callback(self.data);
            }

         }
     }

}(window));
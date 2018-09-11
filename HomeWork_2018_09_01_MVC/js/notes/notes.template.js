;
(function (window) {

    window.NotesTemplate = function () {
        this.noteTemplate = `
            <div note-id="{{id}}" class="note">
                <div class="note__text">{{text}} 
                    <button class="star_bth">
                        <img star-id="{{id}}" class="star {{star}}" src="img/star.png" alt="">
                    </button>
                    <button data-id="{{id}}" class="note__rm-button">X</button></div>
            </div>
        `;
    }

    NotesTemplate.prototype.show = function (data) {
        var i, l;
        var view = '';

        if (data.length > 0 && typeof data === 'object') {
            for (i = 0, l = data.length; i < l; i++) {
                var template = this.noteTemplate;
                template = template.replace('{{text}}', data[i].text);
                template = template.replace(/{{id}}/g, data[i].id);
                template = template.replace('{{star}}',  'fav_' + data[i].isFavorite);
                view = view + template;
            }
        }
        return view;
    }

}(window));
export class Term {
    constructor(c, t) {
        this.category = c;
        this.term = t;
        this.pojmovi = db.collection('pojmovi');
    }

    get category() {
        return this._category;
    }
    set category(c) {
        this._category = c;
    }

    get term() {
        return this._term;
    }
    set term(t) {
        this._term = t;
    }

    // function that return first letter of the term
    firstLetter(term) {
        if (term.slice(0, 2) == 'Lj' || term.slice(0, 2) == 'Dž' || term.slice(0, 2) == 'Nj') {
            return term.slice(0, 2);
        }
        else {
            return term.slice(0, 1);
        }
    }

    async addTermInDatabase() {
        let time = new Date();

        let termForAdding = {
            pocetnoSlovo: this.firstLetter(this.term),
            kategorija: this.category,
            pojam: this.term,
            korisnik: localStorage.usernameLS,
            vreme: firebase.firestore.Timestamp.fromDate(time)
        };

        let response = await this.pojmovi.add(termForAdding);
        return response;
    }

    checkTermInDatabase() {
        this.pojmovi
            .where('kategorija', '==', this.category)
            .where('pojam', '==', this.term)
            .get()
            .then(snapshot => {
                if(snapshot.docs.length == 0){
                    this.addTermInDatabase();
                }
                else{
                    alert('Pojam vec postoji u bazi!')
                }
            })
            .catch(error => {
                console.error('Error getting documents: ', error);
            });
    }
}
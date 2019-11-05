class User{
    constructor(firstname, midname, lastname, credit){
        this.firstname = firstname;
        this.midname = midname;
        this.lastname = lastname;
        this.credit = credit;
    }

    getFullName(){
        return `${this.firstname} ${this.midname} ${this.lastname} is my full name`;
        // let fullName = `${this.firstname} ${this.lastname} is my full name`;
        // return fullName;
    }

    editename(newname){
        const myname = newname.split(' ')
        this.firstname = myname[0];
        this.midname = myname[1];
        this.lastname = myname[2];
    }
}

class Techer extends User{
    constructor(firstname, midname, lastname, credit, subject){
        super(firstname, midname, lastname, credit);
        this.subject = subject;
    }

    editSubject(newsubject){
        this.subject = newsubject;
    }
    getFullName(){
        return `${this.firstname} ${this.midname} ${this.lastname} is my full name and I teach ${this.subject}`;
        // let fullName = `${this.firstname} ${this.lastname} is my full name`;
        // return fullName;
    }

}



const hamad = new Techer('hamad', 'ahmad', 'alhammadi', 34, 'python');
console.log(hamad.getFullName());
hamad.editename('yousif yousif ahmad')
console.log(hamad.getFullName());
console.log(hamad.subject);
// hamad.editSubject('Arabic');
// console.log(hamad.subject);


// console.log(hamad.firstname);


// const ahmad = new User();
// console.log(ahmad);

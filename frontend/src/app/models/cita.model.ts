export class Cita {
    _id: string;
    name: string;
    lastName: string;
    email: string;
    document: number;
    tel: number;
    addres: string;
    adressAlt: string;
    departament: string;
    city: string;
    priorityType: string;
    valuationType: string;
    symptom: string;
    date: Date;


    constructor(
        _id = '',
        name = '',
        lastName = '',
        email = '',
        document = 0,
        tel = 0,
        addres = '',
        adressAlt = '',
        departament = '',
        city = '',
        priorityType = '',
        valuationType = '',
        symptom = '',
        date =  new Date()
    ) {
        this._id = _id;
        this.name = name;
        this.lastName = lastName
        this.email = email
        this.document = document
        this.tel = tel
        this.addres = addres;
        this.adressAlt = adressAlt;
        this.departament = departament;
        this.city = city;
        this.priorityType = priorityType;
        this.valuationType = valuationType;
        this.symptom = symptom;
        this.date = date
    }
}

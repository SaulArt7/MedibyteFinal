export class Cita {
    addres: string;
    adressAlt: string;
    departament: string;
    city: string;
    priorityType: string;
    valuationType: string;
    symptom: string;


    constructor(
        addres = '',
        adressAlt = '',
        departament = '',
        city = '',
        priorityType = '',
        valuationType = '',
        symptom = '',
    ) {
        this.addres = addres;
        this.adressAlt = adressAlt;
        this.departament = departament;
        this.city = city;
        this.priorityType = priorityType;
        this.valuationType = valuationType;
        this.symptom = symptom;
    }
}

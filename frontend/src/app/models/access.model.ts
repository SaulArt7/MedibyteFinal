export class Access {
  idBiometric: String;
  idWorker: String;
  USUESTADO: Number;
  USUDESCRI: String;
  USUEMAIL: String;
  fechaHoraEvento: Date;
  tipoEvento: String;
  accessGiven: Boolean;
  madeAccess: Boolean;

  constructor(
    idBiometric = '',
    idWorker = '',
    USUESTADO = 0,
    USUDESCRI = '',
    USUEMAIL = '',
    fechaHoraEvento = new Date(),
    tipoEvento = '',
    accessGiven = false,
    madeAccess = false
  ) {
    this.idBiometric = idBiometric;
    this.idWorker = idWorker;
    this.USUESTADO = USUESTADO;
    this.USUDESCRI = USUDESCRI;
    this.USUEMAIL = USUEMAIL;
    this.fechaHoraEvento = fechaHoraEvento;
    this.tipoEvento = tipoEvento;
    this.accessGiven = accessGiven;
    this.madeAccess = madeAccess;
  }
}

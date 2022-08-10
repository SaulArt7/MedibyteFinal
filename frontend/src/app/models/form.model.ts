export class Form {
    _id: string;
    fullName: String;
    email: string;
    topic: String;
    message: string;
    isActive: boolean;
    condition: string;
    answer: string;
  
    constructor(
      _id = '',
      fullName = '',
      email = '',
      topic = '',
      message = '',
      isActive = true,
      condition = '',
      answer = ''
    ) {
      this._id = _id;
      this.fullName = fullName;
      this.email = email;
      this. topic= topic;
      this.message = message;
      this.isActive = isActive;
      this.condition = condition;
      this.answer = answer
    }
  }
  
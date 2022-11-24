
class Client{

    constructor(id, email, phoneNumber, firstName, lastName, token, password, DateTimeOfRegistration) {
        this.id = id;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.token = token;
        this.password = password;
        this.dateTimeOfRegistration = DateTimeOfRegistration;
    }

}

export default Client
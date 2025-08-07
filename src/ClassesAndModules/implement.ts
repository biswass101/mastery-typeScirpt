interface IAppointment {
    startTime: Date;
    endTime: Date;
    description: string;

    printDetails(): void;
}

class Appointment implements IAppointment {
    public startTime: Date;
    public endTime: Date;
    public description: string;
    constructor(startTime: Date, endTime: Date, description: string) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.description = description;
    }

    public printDetails(): void {
        console.log(`Appointment from ${this.startTime.toLocaleString()} to ${this.endTime.toLocaleString()}: ${this.description}`);
    }
}

const ap1 = new Appointment(new Date(2023, 10, 1, 9, 0), new Date(2023, 10, 1, 10, 0), "Doctor's appointment");
console.log(ap1);


abstract class AppointmentABC {
    protected startTime: Date;
    protected endTime: Date;
    public description: string;
    constructor(startTime: Date, endTime: Date, description: string) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.description = description;
    }

    public abstract printDetails(): void;
}

class SchoolAppointment extends AppointmentABC {
    constructor(startTime: Date, endTime: Date, description: string) {
        super(startTime, endTime, description);
    }
    public printDetails(): void {
        console.log(`School Appointment from ${this.startTime.toLocaleString()} to ${this.endTime.toLocaleString()}: ${this.description}`);
    }
}

const sap = new SchoolAppointment(new Date(2023, 10, 1, 8, 0), new Date(2023, 10, 1, 9, 0), "Math class");
console.log(sap);
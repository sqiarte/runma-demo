export class Event {
    // organizerID: number;
    name: string;
    raceDateTime: string;
    openRegisDate: string;
    closeRegisDate: string;
    province: string;
    location: string;
    capacity: number;

    constructor() {
        // this.organizerID = 0;
        this.name = "";
        this.raceDateTime = "";
        this.openRegisDate = "";
        this.closeRegisDate = "";
        this.province = "";
        this.location = "";
        this.capacity = 0;
    }
}

export class Event {
    // organizerID: number;
    name: string;
    raceDate: string;
    openRegisDate: string;
    closeRegisDate: string;
    province: string;
    location: string;
    capacity: number;
    organizerList: string[];

    constructor() {
        this.name = "";
        this.raceDate = "";
        this.openRegisDate = "";
        this.closeRegisDate = "";
        this.province = "";
        this.location = "";
        this.capacity = 0;
        this.organizerList = [];
    }
}

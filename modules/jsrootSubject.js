import {ReplaySubject} from "rxjs";

let jsrootSubject;

class JsrootSubject {

    constructor() {
        this.subject = new ReplaySubject(1);
    }

    getObservable() {
        return this.subject.asObservable();
    }

    next(e) {
        this.subject.next(e);
    }
}

export const jsrootSubjectGet = () => {
    if (!jsrootSubject) jsrootSubject = new JsrootSubject();
    return jsrootSubject;
}
import expect from 'expect';
import {patientFormattedDetail, patientPastAppointments, patientPendingAppointments} from './selectors';
describe('Patient Selectors', () => {
    describe('patientFormattedDetail', () => {
        const response = {
            "dateOfBirth": "1981-03-13T06:00:00.000Z",
            "address": [
                {
                    "address": "10 Lovegood House",
                    "city": "Ottery St Catchpole",
                    "state": "IL",
                    "zip": "60660",
                    "id": "32e9fda7-bf04-43ee-ab70-210723f2ffe0"
                }
            ]
        };
        const expected = {
            "dateOfBirth": new Date("1981-03-13T06:00:00.000Z").toLocaleDateString(),
            "address": "10 Lovegood House\nOttery St Catchpole IL 60660",
            //need this until hardcode removed
            "doctorId": "6a2b79b0-882b-4a5d-92b5-7d0436a903de"
        };
        it('formats address correctly', () => {
            const actual = patientFormattedDetail(response);
            expect(actual).toEqual(expected)
        });
        it('handles null address correctly', () => {
            const input = {}
            const actual = patientFormattedDetail(input);
            expect(actual).toEqual(input);
        });
        
    });
    describe('patientPastAppointments', () => {
        const pastDate = {
            "id": "fec9100a-21e2-4a78-829a-0822f4983dad",
            "appointments": [
                {
                    "datetime": "2018-02-05T18:30:00.000Z",
                    "id": "c81ae020-6a4f-44df-9c31-85936ef8eb52"
            }]
        }
        const expected = [{
            "datetime": new Date("2018-02-05T18:30:00.000Z").toLocaleString(),
            "id": "c81ae020-6a4f-44df-9c31-85936ef8eb52"
         }]

        it('handles null address correctly', () => {
            const input = {}
            const actual = patientPastAppointments(input);
            expect(actual.length).toEqual(0);
        });
        it('returns past appointment', () => {

            const actual = patientPastAppointments(pastDate);
            console.log(actual)
            expect(actual).toEqual(expected);
        });
        it('doesnt return future appointment', () => {
            //arrange
            var futureDate = new Date();
            futureDate.setSeconds(futureDate.getSeconds() + 10);
            const future = {
                "id": "fec9100a-21e2-4a78-829a-0822f4983dad",
                "appointments": [
                    {
                        "datetime": futureDate.toISOString(), //this is in iso format from server
                        "id": "c81ae020-6a4f-44df-9c31-85936ef8eb52"
                }]
            }
            const actual = patientPastAppointments(future);
            expect(actual).toEqual([]);
        });
    });
    describe('patientPendingAppointments', () => {
        const pending = {
            "id": "fec9100a-21e2-4a78-829a-0822f4983dad",
            "appointments": [
                {
                    "datetime": "2019-02-05T18:30:00.000Z",
                    "id": "c81ae020-6a4f-44df-9c31-85936ef8eb52"
            }]
        }
        const expected = [{
            "datetime": new Date("2019-02-05T18:30:00.000Z").toLocaleString(),
            "id": "c81ae020-6a4f-44df-9c31-85936ef8eb52"
        }]
        it('handles null address correctly', () => {
            const input = {}
            const actual = patientPendingAppointments(input);
            expect(actual.length).toEqual(0);
        });
        it('returns future appointment', () => {

            const actual = patientPendingAppointments(pending);
            expect(actual).toEqual(expected);
        });
        it('doesnt return past appointment', () => {
            //arrange
            var pastDate = new Date();
            pastDate.setSeconds(pastDate.getSeconds() - 10);
            const future = {
                "id": "fec9100a-21e2-4a78-829a-0822f4983dad",
                "appointments": [
                    {
                        "datetime": pastDate.toISOString(), //this is in iso format from server
                        "id": "c81ae020-6a4f-44df-9c31-85936ef8eb52"
                }]
            }
            const actual = patientPendingAppointments(future);
            expect(actual).toEqual([]);
        });
    });
});

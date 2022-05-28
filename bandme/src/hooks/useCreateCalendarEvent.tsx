/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as AddCalendarEvent from 'react-native-add-calendar-event';
import { PublicationDetail } from '../interfaces/PublicationDetail';

export const useCreateCalendarEvent = () => {
    const createEvent = (title: string, description: string, eventDate: string, eventTime: string, street: string, streetNumber: string) => {
        const day = eventDate.substring(0, 2);
        let month = eventDate.substring(3, 6);
        const year = eventDate.substring(7, 11);

        switch (month.toLowerCase()) {
            case 'jan':
                month = '01';
                break;
            case 'feb':
                month = '02';
            break;
            case 'mar':
                month = '03';
            break;
            case 'apr':
                month = '04';
            break;
            case 'may':
                month = '05';
            break;
            case 'jun':
                month = '06';
            break;
            case 'jul':
                month = '07';
            break;
            case 'aug':
                month = '08';
            break;
            case 'sep':
                month = '09';
            break;
            case 'oct':
                month = '10';
            break;
            case 'nov':
                month = '11';
            break;
            case 'dec':
                month = '12';
            break;
            default:
                break;
        }

        const [hours, minutes] = eventTime.split(':');

        const datetime = new Date(+year, +month - 1, +day, +hours, +minutes);

        const eventConfig = {
            title: title,
            startDate: datetime.toISOString(),
            endDate: datetime.toISOString(),
            location: street + ' ' + streetNumber,
          };

        AddCalendarEvent.presentEventCreatingDialog(eventConfig)
            .then((eventInfo: { calendarItemIdentifier: string, eventIdentifier: string }) => {
                // handle success - receives an object with `calendarItemIdentifier` and `eventIdentifier` keys, both of type string.
                // These are two different identifiers on iOS.
                // On Android, where they are both equal and represent the event id, also strings.
                // when { action: 'CANCELED' } is returned, the dialog was dismissed
                console.log(JSON.stringify(eventInfo) + '//Datos del evento');
            })
            .catch((error: string) => {
                // handle error such as when user rejected permissions
                console.log(error);
            });
    };


    return {
        createEvent,
    };
};

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showDate',
  pure: true
})
export class ShowDatePipe implements PipeTransform {

  transform(dateValue: string): string {

    const date = new Date(dateValue);
    const timeString = date.toLocaleTimeString('en-GB', { hour12: false, hour: '2-digit', minute: '2-digit' });
    const dateString = date.toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    return `${dateString} on ${timeString}`;
  };

}

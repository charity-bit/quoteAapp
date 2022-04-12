import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeTransform'
})
export class TimeTransformPipe implements PipeTransform {
  transformMilli = (input:any, divisor:any) => Math.floor(input / divisor);

  transform(diff:any): any {
    if (diff > 31540000000)
    return ` ${this.transformMilli(diff, 31540000000)} ${
      this.transformMilli(diff, 31540000000) > 1 ? "years" : "year"
    } ago`;
  if (diff > 2628000000)
    return ` ${this.transformMilli(diff, 2628000000)} ${
      this.transformMilli(diff, 2628000000) > 1 ? "months" : "month"
    } ago`;
  if (diff > 604800000)
    return ` ${this.transformMilli(diff, 604800000)} ${
      this.transformMilli(diff, 604800000) > 1 ? "weeks" : "week"
    } ago`;
  if (diff > 86400000)
    return ` ${this.transformMilli(diff, 86400000)} ${
      this.transformMilli(diff, 86400000) > 1 ? "days" : "day"
    } ago`;
  if (diff > 3600000)
    return ` ${this.transformMilli(diff, 3600000)} ${
      this.transformMilli(diff, 3600000) > 1 ? "hours" : "hour"
    } ago`;
  if (diff > 60000)
    return ` ${this.transformMilli(diff, 60000)} ${
      this.transformMilli(diff, 60000) > 1 ? "minutes" : "minute"
    } ago`;
  if (diff > 1000)
    return ` ${this.transformMilli(diff, 1000)} ${
      this.transformMilli(diff, 1000) > 1 ? "seconds" : "second"
    } ago`;
  }

}

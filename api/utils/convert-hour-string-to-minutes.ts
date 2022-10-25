// 18:00 (horas) --> 1080 (min)

export function convertHourStringToMinutes(hourString: string) {
    /*
    hourString.split(':') --> 18:00 == ["18", "00"]
    .map(Number) --> ["18", "00"] == [18, 00]
    */
    const [ hours, minutes] = hourString.split(':').map(Number);
    const minutesAmount = (hours * 60) + minutes;

    return minutesAmount;
}
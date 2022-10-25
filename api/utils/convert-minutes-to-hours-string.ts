// 1080 (min) --> 18:00 (horas)

export function convertMinutesToHourString(minutesAmount: number) {
   
    const hours = Math.floor(minutesAmount / 60); //o floor arredonda pra baixo
    const minutes = minutesAmount % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

}
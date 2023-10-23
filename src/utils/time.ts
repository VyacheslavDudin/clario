type DateTime = Date | string | number;

const SECS_IN_MINUTE = 60;
const MS_IN_SECS = 1000;

export function getTimeFromSeconds(seconds: number) {
  const mins = Math.floor(seconds / SECS_IN_MINUTE);
  const secs = Math.round(seconds - mins * SECS_IN_MINUTE);

  return { mins: toTwoDigits(mins), secs: toTwoDigits(secs) };
}

export function toTwoDigits(time: number) {
  const timeStr = time.toString();

  return timeStr.length < 2 ? `0${timeStr}` : timeStr;
}

export function getDiffInSecs(
  _startDate: DateTime,
  _endDate: DateTime = new Date()
) {
  const startDate = new Date(_startDate);
  const endDate = new Date(_endDate);
  const differenceInMs = endDate.getTime() - startDate.getTime();
  const difference = Math.round(differenceInMs / MS_IN_SECS);

  return difference;
}

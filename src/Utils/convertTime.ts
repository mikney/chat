export const convertTime = (time:number) => {
  let seconds: any = Math.floor(time % 60)
  if (seconds < 10) {
    seconds = "0" + seconds
  }
  let minutes: any = Math.floor(time / 60)
  return minutes + ':' + seconds
}
import dayjs from "dayjs"

export const ymd = (date : string) : string => {
    return dayjs(date).format('DD/MM/YYYY')
}
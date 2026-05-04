

type email = `${string}@${string}.${string}`;
type singN = 0|1|2|3|4|5|6|7|8|9|0;
type doubN = `${singN}${singN}`;
type year = `${19|20}${doubN}`;
type month = `${0|1|2}${singN}`;
type day = `${0|1|2|3}${singN}`;
type hour = `${0|1|2}${singN}`;
type minute = `${0|1|2|3|4|5|6}${singN}`;
type date = `${year}${'/'|'-'}${month}${'/'|'-'}${day}`;
type time = `${hour}:${minute}:${minute}`;
type datetime = `${date} ${time}`;
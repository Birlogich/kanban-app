const convertDate = (stringDate) => {
   const date = new Date(stringDate)
   return date.toLocaleString('ru-RU')
}

export { convertDate }
import dayjs from "dayjs";
export const  filterTime = (time)=>{
  return dayjs(time).format("YYYY/MM/DD")
}


export const filterHtml = (html)=>{
  return html.replace(/<img[^>]*>/gi, function (match, capture) {
    let temp = match.replace(/height\s*?=\s*?([‘"])[\s\S]*?\1/ig, '');
    temp = temp.replace(/width\s*?=\s*?([‘"])[\s\S]*?\1/ig, '');
    return temp;
  });
}

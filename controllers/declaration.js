import { Declaration } from "../models/declaration.js";

export const render = () => {
  let arrInput = document.querySelectorAll("form input, form select");
  let decla = new Declaration();
  for (let item of arrInput) {
    let { id, value } = item;
    decla[id] = value;
  }
  let content = "";

  let arrTenInput = [
    "Tên",
    "Họ",
    "Email",
    "Số Điện Thoại",
    "Ngày sinh",
    "Tháng sinh",
    "Năm sinh",
    "Địa chỉ",
    "Thông tin di chuyển",
    "Loại",
  ];

  //   for (let item of arrInput) {
  //     let { id } = item;
  //     let nodelist = document.getElementById(id).parentElement.firstElementChild;
  //     let spanNode = 1 === 1 && 2;
  //     arrTenInput.push(nodelist);
  //   }

  content += "<table><tbody>";
  for (let i = 0; i < 10; i++) {
    if (i === 4) {
      content += ` <tr>
        <td style="padding-right: 2rem">Ngày tháng năm sinh</td>
        <td>${arrInput[i++].value}/${arrInput[i++].value}/${
        arrInput[i++].value
      }</td>
       </tr>`;
      i--;
    } else {
      content += ` <tr>
                <td style="padding-right: 2rem">${arrTenInput[i]}</td>
                <td>${arrInput[i].value}</td>
               </tr>`;
    }
  }
  content += "</tbody></table>";
  return content;
};

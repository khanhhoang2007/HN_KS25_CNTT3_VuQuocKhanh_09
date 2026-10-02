let currentAppointmentCode = "";
let isAppointmentValid = false;
let totalRevenue = 0;
let totalAppoitments = 0;

let choice;

do {
  console.log(`
=========================================    
       HỆ THỐNG ĐẶT LỊCH LOTUS SPA
=========================================    
1. Nhập và kiểm chuẩn mã lịch hẹn
2. Tính tiền liệu trình chăm sóc
3. Thẩm định mã khách hàng may mắn
0. Thoát chương trình
=========================================
Vui lòng nhập lựa chọn của bạn (0 - 3):  `);

  choice = prompt(`
=========================================    
       HỆ THỐNG ĐẶT LỊCH LOTUS SPA
=========================================    
1. Nhập và kiểm chuẩn mã lịch hẹn
2. Tính tiền liệu trình chăm sóc
3. Thẩm định mã khách hàng may mắn
0. Thoát chương trình
=========================================
Vui lòng nhập lựa chọn của bạn (0 - 3):  `);

  if (choice !== null) {
    choice = choice.trim();
  }

  switch (choice) {
    case "1":
      {
        currentAppointmentCode = "";
        isAppointmentValid = false;

        let idSpa = prompt("Nhập mã lịch hẹn: ");
        if (idSpa === null) {
          console.log("Lỗi: Chưa nhập mã lịch hẹn");
          break;
        }
        idSpa = idSpa.trim().toUpperCase();
        if (idSpa === "") {
          console.log("Lỗi: Chưa nhập mã lịch hẹn");
        } else if (idSpa.length < 6) {
          console.log("Lỗi: Độ dài nhỏ hơn 6 kí tự");
        } else if (!idSpa.startsWith("SPA-")) {
          console.log("Lỗi:Mã thiếu tiền tố'SPA-'");
        } else if (idSpa.includes(" ")) {
          console.log("Lỗi: Chữa khoảng trắng ở giữa");
        } else {
          currentAppointmentCode = idSpa;
          isAppointmentValid = true;
          console.log("Kiểm tra mã thành công");
          console.log("Mã của bạn là: " + currentAppointmentCode);
        }
      }
      break;
    case "2":
      {
        if (isAppointmentValid == false) {
          console.log("Yêu cầu nhập mã lịch hẹn!!");
          break;
        }
        let treatmentCount;
        let priceTreatment;

        let inputSpa = prompt("Nhập số liệu trình: ");
        inputSpa = Number(inputSpa);
        // if (inputSpa !== typeof 1) {
        //   console.log("Phải là số nguyên lớn hơn 0");
        // } else {
        //   console.log("");
        // }
      }
      break;
    case "0":
      {
        console.log("Thoát hệ thống!");
      }
      break;
    default:
      {
        console.log("Lựa chọn không hợp lệ!, yêu cầu nhập lại!!");
      }
      break;
  }
} while (choice !== "0");

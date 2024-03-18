const { Controller, Response } = require("pepesan");
const f = require("../utils/Formatter");

module.exports = class BotController extends Controller {


    async introduction(request) {
      return Response.menu.fromArrayOfString(
        [
          f("menu.daftarProduk"),
          f("menu.alamatKantor")
        ],
        f("intro", [request.name]), 
        f("template.menu")
      );
    }

    async product(request) {
      return Response.menu.fromArrayOfString(
        [
          f("menu.listProduk1"), 
          f("menu.listProduk2"),
          f("menu.kembali"), 

        ],
        f("introProduk", [request.name]), 
        f("template.ListProduk"),
        f("outroProduk"), 

      );   
    }
    async handleUserInput(request) {
      if (request.selectedOption === "menu.kembali") {
        return this.introduction(request); // Kembali ke halaman introduction
      } else if (request.selectedOption === "menu.daftarProduk" || request.selectedOption === "menu.alamatKantor" || request.selectedOption === "menu.listProduk1" || request.selectedOption === "menu.listProduk2") {
        // Lakukan penanganan untuk opsi yang valid di sini
        // Contoh: Menangani opsi produk
        if (request.selectedOption === "menu.listProduk1" || request.selectedOption === "menu.listProduk2") {
          return this.product(request);
        }
      } else {
        // Menampilkan pesan kesalahan tetapi tetap berada di halaman produk
        return Response.error("Pilihan tidak valid. Silakan pilih opsi yang tersedia.", this.product(request));
      }
      
    }
    async listProduk2(request) {
      return this.reply("Pengaduan terhadap pelayanan yang kami berikan dapat diakses pada link berikut: https://webapps.bps.go.id/pengaduan/wbs/beranda")
    }

}
const Customers = require('../models/Customers');
const Orders = require('../models/Orders');
const Views = require('../views/Views');

class Controller {
    static all(customerName, day) {

    }

    static create(customerName, day, itemName, pricePerItem, quantity) {
        if (day > 7) {
            Views.showMsg("Penjualan hanya sampai hari ke-7");
            return;
        }

        Customers.findOne(customerName, (err, dataCustomer) => {
            if (err) {
                Views.showMsg("findOneCustomerError : " + err);
            } else {
                if (!dataCustomer) {
                    Views.showMsg(`Customer dengan nama ${customerName} tidak terdaftar`);
                    return;
                }

                Orders.create(customerName, dataCustomer.id,
                    day, itemName, pricePerItem, quantity,
                    (err, dataOrder) => {
                        if (err) {
                            Views.showMsg("createOrderError : " + err);
                        } else {
                            this.totalPesanan(dataCustomer.id, day, (err, dataTotalOrder) => {
                                if (dataTotalOrder.length > 5) {
                                    Views.showMsg(
                                        "Hi " + customerName +
                                        ", pesanan kamu tidak bisa diproses " +
                                        "karena sudah melebihi batas maksimal jumlah per hari."
                                    );
                                    return
                                }

                                Views.showMsg(
                                    "Untuk hari ke-" + day + " ini," +
                                    "kamu sudah memesan sebanyak " + dataTotalOrder.length + " " +
                                    itemName + " item \n " +
                                    "Kamu masih bisa memesan sekitar " + (5 - dataTotalOrder.length) +
                                    " boba item lagi."
                                );
                            })
                        }
                    })
            }
        })
    }

    static totalPesanan(customerId, day, cb) {
        Orders.findAll(customerId, day, (err, data) => {
            if (err) {
                Views.showMsg("totalPesananError " + err);
            } else {
                if (!data) {
                    Views.showMsg("Data order tidak ditemukan");
                } else {
                    cb(null, data);
                }
            }
        })
    }

    static delete(customerName) {
        Customers.findOne(customerName, (err, dataCustomer) => {
            if (err) {
                Views.showMsg("dataCustomerError " + err);
            } else {
                if (!dataCustomer) {
                    Views.showMsg(`Customer dengan nama ${customerName} tidak terdaftar`);
                    return;
                } else {
                    Orders.read(dataCustomer.id, (err, dataCustomerLength) => {
                        if (err) {
                            Views.showMsg("dataCustomerError " + err);
                        } else {
                            Customers.remove(dataCustomer.id, (err, idCustomerDelete) => {
                                if (err) {
                                    Views.showMsg("deleteCustomerError " + err);
                                } else {
                                    Orders.remove(idCustomerDelete, (err, isDelete) => {
                                        if (err) {
                                            Views.showMsg("deleteOrdersError " + err);
                                        } else {
                                            if (isDelete) {
                                                Views.showMsg(
                                                    "Berhasil menghapus customer " + customerName +
                                                    " dan " + dataCustomerLength.length + " datapesanan-nya."
                                                );
                                            }
                                        }
                                    })
                                }
                            })
                        }
                    });
                }
            }
        })
    }
}

module.exports = Controller;
function CustomerInfo(){
    var phone = prompt('Enter your phone: ');
    if(phone.length != 0 && parseInt(phone) == phone){
        alert('MinhPhuong will contact you via phone number: ' + phone);
    }
}
const form = document.getElementById("ürün-form");
const titleElement = document.querySelector("#title");
const priceElement = document.querySelector("#price");
const formFileElement = document.querySelector("#formFile");

//ui objesini başlatma
const ui = new UI();

//tüm eventleri yükleme

eventlisteners();

function eventlisteners(){
    form.addEventListener("submit",addYorum);
}

function addYorum(e){
    const title = titleElement.value;
    const price = priceElement.value;
    const formFile = formFileElement.value;

    if(title === "" || price === "" || formFile === ""){
        //hata
    }
    else{
        //yeni yorum
        const newYorum = new Yorum(title,price,formFile);
        ui.addYorumToUI(newYorum); // arayüze yorum ekleme
    }

}
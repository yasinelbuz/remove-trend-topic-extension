function removeChild(){
        setTimeout(() => {
        const deneme = document.querySelectorAll("[role=region]");
        // Eğer element varsa, doğrudan remove metodunu kullanarak kaldırın
        if (deneme[1]) {
            deneme[1].remove();
        }
    }, 5000)
}

addEventListener("load", (event) => {
removeChild();
});

// Sayfa içeriği değiştiğinde de removeElement fonksiyonunu çağır
var observer = new MutationObserver(function () {
    removeChild()
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});
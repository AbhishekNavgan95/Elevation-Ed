document.querySelector(".news-letter").addEventListener("submit", function(e) {
    e.preventDefault(); 
    document.querySelector(".form-control").value="";
    alert("You're now subscribed to our newsletter");
});

let form = document.querySelector(".form-1");

form.addEventListener("submit", e => {
    e.preventDefault();
    alert("form submitted successfully!!!")    
    form.querySelectorAll('input').forEach(input => {
        input.value = '';
    });
    document.querySelector(".form-close").click();
})
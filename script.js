function generate() { 
    let dictionary = ""; 
    if (document.getElementById("lowercaseCb").checked) { 
        dictionary += "qwertyuiopasdfghjklzxcvbnm"; 
    } 
    if (document.getElementById("uppercaseCb").checked) { 
        dictionary += "QWERTYUIOPASDFGHJKLZXCVBNM"; 
    } 
    if (document.getElementById("digitsCb").checked) { 
        dictionary += "1234567890"; 
    } 
    if (document.getElementById("specialsCb").checked) { 
        dictionary += "!@#$%^&*()_+-={}[];<>:"; 
    } 
    const length = document.querySelector( 
        'input[type="range"]').value; 
  
    if (length < 1 || dictionary.length === 0) { 
        return; 
    } 
  
    let password = ""; 
    for (let i = 0; i < length; i++) { 
        let pos = Math.floor(Math.random() * dictionary.length); 
        password += dictionary[pos]; 
    } 
  
    document.querySelector( 
        'input[type="text"]').value = password; 
}

document.querySelector('input[type="range"]').addEventListener( 
    "input", (e) => { 
        document.querySelector( 
            "div.range span").textContent = e.target.value; 
        //generate(); 
    });

    function copy() {
        let copyText = document.querySelector('input[type="text"]').value;
        navigator.clipboard.writeText(copyText).then(() => { 
            document.querySelector( 
                "div.password button").textContent = "Copied!"; 
            setTimeout(() => { 
                document.querySelector( 
                    "div.password button").textContent = "COPY"; 
            }, 1000); 
        });
    }
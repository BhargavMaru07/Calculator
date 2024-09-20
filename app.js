let btns = document.querySelectorAll("button");
console.dir(btns)

let string = "0";

let input = document.querySelector("input");
input.value = string;

btns.forEach((btn) => {
    string=" ";

    btn.addEventListener("click",(e)=>{
        if(e.target.innerHTML == '=')
            {
                string = eval(string);
                string = string.toString();
                input.value = string;
            }
            else if(e.target.innerHTML == "AC")
                { 
                    string="0";
                    input.value = string;
                }
                else if (e.target.innerHTML == "DE")
                    {
                        string = string.slice(0,-1);
                        input.value=string;
                    }
            else{
                if(string === "0")
                    {
                        string=" "
                    }
                string = string + e.target.innerHTML;
                input.value = string
            }

    })
});



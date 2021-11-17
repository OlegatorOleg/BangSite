let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");

let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");

let image = document.getElementById("image");

input1.oninput = function()
    {
        teapotPrice = 300;
        cleanerPrice = 3000;
        fridgePrice = 10000;

        if (input2.value <= 20 && input2.value > 1)   
        {
            teapotPrice = 285;
            cleanerPrice = 2850;
            fridgePrice = 9500;
        }

        if (input2.value >= 65)
        {
            teapotPrice = 270;
            cleanerPrice = 2700;
            fridgePrice = 9000;
        }

        if(input1.value < teapotPrice) 
        {
            result1.innerHTML = "Вашей суммы денег не достаточно";
            image.src = "";
        } 
        else 
        {
            if (input1.value <=cleanerPrice) 
            {
            result1.innerHTML = "Купите чайник";
            image.src = "teapot.jpg";
                if (input2.value <= 20 && input2.value > 1)       
                    result2.innerHTML = "Вы получаете молодежную скидку в 5%";
                else
                    result2.innerHTML = "";
                if (input2.value >= 65)
                    result2.innerHTML = "Вы получаете пенсионную скидку в 10%";     
            } 
            else 
            {
                if (input1.value <= fridgePrice) 
                {
                result1.innerHTML = "Купите пылесос";
                image.src = "cleaner.jpg";
                if (input2.value <= 20 && input2.value > 1)       
                    result2.innerHTML = "Вы получаете молодежную скидку в 5%";
                else
                    result2.innerHTML = "";
                if (input2.value >= 65)
                    result2.innerHTML = "Вы получаете пенсионную скидку в 10%";     
                } 
                else 
                {
                    result1.innerHTML = "Купите холодильник";
                    image.src = "fridge.jpg";
                    if (input2.value <= 20 && input2.value > 1)       
                        result2.innerHTML = "Вы получаете молодежную скидку в 5%";
                    else
                        result2.innerHTML = "";
                    if (input2.value >= 65)
                        result2.innerHTML = "Вы получаете пенсионную скидку в 10%";     
                }
                }
        }
    };
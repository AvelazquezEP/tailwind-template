const log = console.log;

$(document).ready(function () {
    $("#submitButton").on("click", function () {

        $(this).attr("disable", "disable");

        let input_1 = document.getElementById("input1").value;
        let input_2 = document.getElementById("input2").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let selectinput = document.getElementById("select5").value;

        var val_input_1 = validation_input_1(input_1);
        var val_input_2 = validation_input_2(input_2);
        var val_email = validation_email(email);
        var val_phone = validation_phone(phone);
        var val_select_input = validation_select_input(selectinput);

        // if (val_input_1 == true && val_input_2 == true && val_email == true && val_phone == true && val_select_input == true) {
        if (val_input_1 == true) {
            sendData();
        } else {
            setTimeout('$("#submitButton").removeAttr("disabled")', 3800);
        }
    });
});

const sendData = () => {
    console.log('TRUE');
}

const validation_input_1 = (value_element, msg ) => {
    msg_element = document.getElementById('msg_input_1');

    if (/^ *$/.test(value_element)) {
        msg_element.innerHTML = msg;
        msg_element.style.color = "#F93C17";
        return false;
    } else {
        msg_element.innerHTML = '';        
        return true
    }
}

const validation_input_2 = () => {
    msg_element = document.getElementById("msg_input_2");

    // if (/^ *$/)
}

const validation_email = () => {

}

const validation_phone = () => {

}

const validation_select_input = () => {

}
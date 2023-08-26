const urlParams = new URLSearchParams(window.location.search);
const ss = urlParams.get("ss");
const year = urlParams.get("year");

if (ss !== null && year !== null) {
    //fecth api
    //seasonal_option
    list_ss = [["Winter","2023"],["Spring","2023"],["Summer","2023"],["Fall","2023"]]
    ss_all = ""
    ss_all += '<option value="' + ss + " " + year + '">' + ss + " " + year + '</option>'
    list_ss.forEach(ss_option)
    function ss_option(value, index, array) {
        if (value[0] == ss && value[1] == year) {
            ss_all += ''
        }else {
            ss_all += '<option value="' + value[0] + " " + value[1] + '">' + value[0] + " " + value[1] + '</option>'
        }
    }
    document.getElementById("seasonal").innerHTML = ss_all
}else {
    //latest_seasonal and redirect
    window.location.replace(window.location.origin + "/schedule?ss=" + "Summer" + "&year=" + "2023")
}

function seasonal_seleted() {
    //redirect
    let seasonal = document.getElementById("seasonal").value.split(" ")
    window.location.replace(window.location.origin + "/schedule?ss=" + seasonal[0] + "&year=" + seasonal[1])
}
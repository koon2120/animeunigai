const urlParams = new URLSearchParams(window.location.search);
const ss = urlParams.get("ss");
const year = urlParams.get("year");

if (ss !== null && year !== null) {
    async function get_data() {
        const req_option = await fetch(window.location.origin + "/api/seasonal")
        const req_anime_on_air = await fetch(window.location.origin + "/static/api/seasonal/" + ss + "_" + year + ".json")
        const list_ss = await req_option.json()
        const anime_on_air_list = await req_anime_on_air.json()
        ss_all = ""
        ss_all += '<option value="' + ss + " " + year + '">' + ss + " " + year + '</option>'
        list_ss.forEach(ss_option)
        function ss_option(value, index, array) {
            if (value[0] == ss && value[1] == year) {
                ss_all += ''
            } else {
                ss_all += '<option value="' + value[0] + " " + value[1] + '">' + value[0] + " " + value[1] + '</option>'
            }
        }
        anime_on_air_table = ""
        anime_on_air_list.forEach(anime_on_air_update)
        function anime_on_air_update(value, index, array) {
            anime_on_air_table += '<tr><td class="time">' + value['time'] + '</td><td class="sun"><img src="' + value['sun'][1] + '" width="50"><br><p class="anime_title">' + value['sun'][0] + '</p></td> <td class="mon"><img src="' + value['mon'][1] + '" width="50"><br><p class="anime_title">' + value['mon'][0] + '</p></td> <td class="tue"><img src="' + value['tue'][1] + '" width="50"><br><p class="anime_title">' + value['tue'][0] + '</p></td> <td class="wed"><img src="' + value['wed'][1] + '" width="50"><br><p class="anime_title">' + value['wed'][0] + '</p></td> <td class="thu"><img src="' + value['thu'][1] + '" width="50"><br><p class="anime_title">' + value['thu'][0] + '</p></td> <td class="fri"><img src="' + value['fri'][1] + '" width="50"><br><p class="anime_title">' + value['fri'][0] + '</p></td> <td class="sat"><img src="' + value['sat'][1] + '" width="50"><br><p class="anime_title">' + value['sat'][0] + '</p></td></tr>'
        }
        document.getElementById("seasonal").innerHTML = ss_all
        document.getElementById("list_anime_on_air").innerHTML = '<tr><th></th><th>อาทิตย์</th><th>จันทร์</th><th>อังคาร</th><th>พุธ</th><th>พฤหัสบดี</th><th>ศุกร์</th><th>เสาร์</th></tr>' + anime_on_air_table
    }
    get_data()
} else {
    window.location.replace(window.location.origin + "/schedule?ss=" + "Summer" + "&year=" + "2023")
}

function seasonal_seleted() {
    let seasonal = document.getElementById("seasonal").value.split(" ")
    window.location.replace(window.location.origin + "/schedule?ss=" + seasonal[0] + "&year=" + seasonal[1])
}
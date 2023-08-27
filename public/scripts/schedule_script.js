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
        anime_on_air_title = ""
        sub_anime_on_air_title = ""
        anime_on_air_list.forEach(anime_on_air_update)
        function anime_on_air_update(value, index, array) {
            const day = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]
            for (i = 0; i < day.length; i++) {
                if (value[day[i]]) {
                    for (x = 0; x < value[day[i]].length; x++) {
                        sub_anime_on_air_title += '<img src="' + value[day[i]][x][1] + '" width="50"><br><p class="anime_title">' + value[day[i]][x][0] + '</p>'
                    }
                    anime_on_air_title += '<td class="' + day[i] + '">' + sub_anime_on_air_title + '</td>'
                    sub_anime_on_air_title = ""
                } else {
                    anime_on_air_title += '<td class="' + day[i] + '"></td>'
                }
            }
            anime_on_air_table += '<tr><td class="time">' + value['time'] + '</td>' + anime_on_air_title + '</tr>'
            anime_on_air_title = ""
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
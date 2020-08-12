$(document).ready(function () {

    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    $("#hour").text(moment().format("HH"));


    $(".saveBtn").on("click", function () {
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

    function update() {
        var currentHour = moment().format("HH");
        $(".hour-block").each(function(){
            var blockHour = $(this).attr("id")

            if (currentHour>blockHour) {
                $(this).addClass("past")
            } else if (currentHour=blockHour) {
                $(this).addClass("present")
            } else {
                $(this).addClass("future")
            }

        })
    }

    update();

    function save() {
        var description = $(this)
    }















})
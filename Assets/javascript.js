$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
$("#hour").text(moment().format("HH"));


$(".saveBtn").on("click", save);

function displayLocal() {
    $(".description").each(function () {
        var blockD = $(this).parent().attr("id");
        $(this).val(localStorage.getItem(blockD));
    }

    )
}
function update() {
    var currentHour = moment().format("HH");
    $(".hour-block").each(function () {
        var blockHour = $(this).attr("id")

        if (currentHour > blockHour) {
            $(this).addClass("past")
        } else if (currentHour = blockHour) {
            $(this).addClass("present")
        } else {
            $(this).addClass("future")
        }

    })
}

update();

function save() {
    var description = $(this).siblings(".description").val();
    var key = $(this).parent(attr)("id");
    var hour = $(this).siblings().text();
    var today = moment().format("MMM Do YYYY");
    localStorage.setItem(key, description)
    alert("Saved: " + "'" + description + "' " + "for " + hour + ", " + today)
}













document.getElementById("btn-delete").onclick = function () {
    document.getElementById("btn-delete").style.display = 'none';
    document.getElementById("top-delete").style.display = 'inline-block';
    document.querySelectorAll(".box").forEach(a => a.style.display = "block");
};
document.getElementById("btn-cancel").onclick = function () {
    document.getElementById("btn-delete").style.display = 'block';
    document.getElementById("top-delete").style.display = 'none';
    document.querySelectorAll(".box").forEach(a => a.style.display = "none");
};
function checkall(o) {
    var boxes = document.getElementsByTagName("input");
    for (var x = 0; x < boxes.length; x++) {
        var obj = boxes[x];
        if (obj.type == "checkbox") {
            if (obj.name != "check")
                obj.checked = o.checked;
        }
    }
};
function Redirect() {
    window.location = "../history/history-not-login.html";
}
function delete_history(){
    modal.classList.add('open')
}
function history_login(){
    window.location="../history/history-login.html";
};
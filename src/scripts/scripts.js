const ids = ['myBtn_modal']
var modal = document.getElementById("form");
ids.forEach(item => {
    let targetBtn = document.getElementById(item)
    if (targetBtn) {
        showModal(targetBtn)
    }
})

function showModal(btnTarget) {
    btnTarget.onclick = function() {
        modal.style.display = "flex";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    }
}

document.getElementById('close').onclick = function() {
	var el = document.getElementById('form');
	el.style.display === 'none' ? el.style.display = 'initial' : el.style.display = 'none';
 }
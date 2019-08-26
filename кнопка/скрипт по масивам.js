< input type = "button"
value = "щелчок"
id = "click" / >

    <
    script >
    var raz = document.getElementById('click');

raz.addEventListener("click", one);
raz.addEventListener("click", two);

function one() {
    alert('Здравствуйте');
}

function two() {
    alert('Ещё раз привет');
} <
/script>
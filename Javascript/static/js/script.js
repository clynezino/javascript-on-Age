// challenge for sex

function daysOfLastSex() {
    let lastDay = prompt('when did youve sex last?')
    let sexDay = (2020 - lastDay) * 365;
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('you have not had sex for ' + sexDay + ' days old');
    h1.setAttribute('id', 'daysOfLastSex');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('daysOfLastSex').remove();
}
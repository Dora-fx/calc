const inputANode = document.querySelector('.numA');
const inputBNode = document.querySelector('.numB');
const selectNode = document.querySelector('.operations');
const btnResultNode = document.querySelector('.resultBtn');
const outputNode = document.querySelector('.output');

btnResultNode.addEventListener('click', function() {
    const a = Number(inputANode.value);
    const b = Number(inputBNode.value);
    const operation = selectNode.value;

    const result = calculate({
        a,
        b,
        operation
    });

    outputNode.innerHTML = result;
}); 
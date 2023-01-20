let js = 'amazing'
if (js === 'amazing') alert("Javascript is FUN")

console.log(40 + 8 + 23 + 10)

const int1 = document.getElementById('int1')
const int2 = document.getElementById('int2')
const result = document.getElementById('result')
const calc = document.getElementById('calc')

calc.onclick = () => {
  result.innerText = Number.parseInt(int1.value) + Number.parseInt(int2.value);
}
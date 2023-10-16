const hex = document.querySelector('.hex')
const btn = document.querySelector('.generate')

const generateColor = () => {
    //Math.random() gives an answer between 0 and 1, not including 1
    //The toString turns the number from Math.random() to a string using 16 to include letters and numbers
    //the substring() fetches values from the first starting parameter to the second ending parameter
    //This does not including the ending parameter
    const randomColor = Math.random().toString(16).substring(2,8);
    document.body.style.backgroundColor = "#" + randomColor;
    hex.innerHTML = "#" + randomColor;
};

btn.addEventListener("click", generateColor)


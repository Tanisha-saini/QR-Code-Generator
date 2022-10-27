const form = document.getElementById('form');
const qr = document.getElementById('qrcode');

const onSubmit = (e) =>{
    e.preventDefault();
    clearUI();
    const url= document.getElementById('url').value;
    const size=document.getElementById('size').value;
    
    var qrcode = new QRCode("qrcode", {
        text: url,
        width: size,
        height: size,
        colorDark : fColor.value,
        colorLight : bColor.value,
        correctLevel : QRCode.CorrectLevel.H
    });

    setTimeout(() => {
        const saveUrl = qr.querySelector('img').src;
        downloadbtn(saveUrl);
      }, 50);
    
    console.log(qrcode);
}

const clearUI = () => {
    qr.innerHTML = '';
    const saveBtn = document.getElementById('save-link');
    saveBtn && saveBtn.remove();
};
  
const downloadbtn= (saveUrl)=>{
    const link = document.createElement('a');
    link.id = 'save-link';
    link.classList = '';
    link.href = saveUrl;
    link.download = 'qrcode';
    link.innerHTML = 'Download';
    document.getElementById('down').appendChild(link);
}

const fColor = document.getElementById('f-color');
const bColor = document.getElementById('b-color');

const changeForeground = (e) =>{
    fColor.value=e.value
    const colorCode = document.getElementById('f-color-code')
    colorCode.innerText=e.value
}


const changeBackground = (e) =>{
    bColor.value=e.value
    const colorCode = document.getElementById('b-color-code')
    colorCode.innerText=e.value
}

fColor.addEventListener('change', (e)=>changeForeground(e.target))
bColor.addEventListener('change',(e)=>changeBackground(e.target))
form.addEventListener('submit', onSubmit)
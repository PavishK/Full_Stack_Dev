function Change1()
{
    document.getElementById('img1').src="./img/ORINGARU.jpg";
    document.getElementById('cn').innerHTML="✨Pavish✨";
    console.warn("Image Changed")
}
function Change2()
{
    document.getElementById('img1').src="./img/images.jpg";
    document.getElementById('cn').innerHTML="Pavish K";
    console.error("Image Changed to Normal")
    window.open("www.www.com","newwindow",status=1,)
}

function Changen()
{
    //var name=prompt("Enter Valid Name ");
    document.getElementById('cn').innerHTML="Pavish K";
}

function Changer()
{
    document.getElementById('cr').innerHTML="ReSuMe";
    setTimeout(()=>
    {
        document.getElementById('cr').innerHTML="My Resume"; 
    },3000)
}

function Changebg(e)
{
    document.body.style.background=colors.value;
    e.style.backgroundColor=color.value;
}
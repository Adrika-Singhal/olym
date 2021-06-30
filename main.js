canvas = document.getElementById("myCanvas");
c = canvas.getContext("2d");

c.beginPath();
c.strokeStyle = "red";
c.lineWidth = 2;
c.rect(150 , 143 , 430 ,200);
c.stroke();



c.beginPath();
c.strokeStyle = "blue";
c.lineWidth = 5;
c.arc(250 , 210 , 40 , 0 , 2*Math.PI);
c.stroke();



c.beginPath();
c.strokeStyle ="black";
c.lineWidth = 5;
c.arc(350 , 210 , 40 , 0 , 2*Math.PI);
c.stroke();

c.beginPath();
c.strokeStyle ="red" ;
c.lineWidth = 5;
c.arc(450 , 210 , 40 , 0 , 2*Math.PI);
c.stroke();

    c.beginPath();
    c.strokeStyle ="yellow" ;
    c.lineWidth = 5;
    c.arc(290 , 250 , 40 , 0 , 2*Math.PI);
    c.stroke();

        c.beginPath();
        c.strokeStyle ="green" ;
        c.lineWidth = 5;
        c.arc(400 , 250 , 40 , 0 , 2*Math.PI);
        c.stroke();
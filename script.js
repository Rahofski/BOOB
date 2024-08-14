.game
{
    width: 600px;
    height: 200px;
    border-bottom: 1px solid #000;
    margin: auto;

}


.record
{
    width: 140px;
    height: 60px;
    border: 1px solid green;
    margin: auto;
    margin-top: 100px;
    padding-left: 10px;
}

#dino
{
    width: 50px;
    height: 50px;
    background-image: url(png-transparent-brand-logo-design-white-text-logo.png);
    background-size: 50px 50px;
    position: relative;
    top:150px;
}

#cactus
{
    width: 40px;
    height: 40px;
    background-image: url(Things_My_Dick_Does_049.png);
    background-size: 40px 40px;
    position: relative;
    top:110px;
    left:560px;
    animation: cactusMov 1.0s infinite linear;

}

#points{
    position: relative;
    left:500px;
}


@media (max-width:400px){
    #points{
        
        left:300px;
    }
}

@keyframes cactusMov
{
    0%{
        left:560px;
    }
    100%
    {
        left: -20px;
    }
}


.jump
{

    animation: jump 0.3s linear;
}


@keyframes jump
{
    0%{
        top:150px;
    }

    30%{
    
        top:130px;
    }
    50%
    {
        top:80px;
    
    }

    80%
    {
        top:130px;
    }

    100%
    {
        top: 150px;
    }
}

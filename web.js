var slides = document.querySelector('.postwrapper').children;
var nextslide = document.querySelector(".right-slider")
var prevslide = document.querySelector(".left-slider")
var totalslides = slides.length;

var left=1;
var right=3;

for(i=left;i<=right;i++)
{
    document.getElementById("c"+i).style.display="inline-block";
}

nextslide.onclick=function (){
    next("next");
}
prevslide.onclick=function (){
    next("prev");
}

function next(direction){
    if(direction=="next")
    {
        document.getElementById("c"+left).style.display="none";
        left++;
        right++;
        if(right>6){
            for(i=left;i<=6;i++){
                document.getElementById("c"+i).style.display="none";
            }
            left=1;
            right=3;
        }
        for(i=left;i<=Math.min(left+2,6);i++)
        {
            document.getElementById("c"+i).style.display="inline-block";
        }
    }
    else
    {
        console.log(direction)
        document.getElementById("c"+right).style.display="none";
        left--;
        right--;
        if(left<1){
            for(i=1;i<=right;i++)
            {
                document.getElementById("c"+i).style.display="none";
            }
            left=4;
            right=6;
        }
        for(i=left;i<=right;i++)
        {
            document.getElementById("c"+i).style.display="inline-block";
        }
    }
}

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
        console.log(left);
        console.log(right)
        for(i=left;i<=right;i++)
        {
            document.getElementById("c"+i).style.display="inline-block";
        }
    }
}






// function next(direction){
    // if(direction=="next"){
        // temp=slides[0];
        // console.log("saksham")
        // slides[0]=slides
        // for(i=0;i<slides.length-1;i++)
        // {
            // console.log("saksham")
            // slides[i]=slides[i+1];
        // }
        // slides[slides.length-1]=hidden
        // slides[slides.length-1]=temp;
        // index++;
        // if(index==totalslides){
            // index=0;
        // }
        // console.log(index)
    // }
    // else{
        // temp=slides[slides.length-1]
        // for(i=slides.length-1;i>0;i--){
        //     slides[i]=slides[i-1];
        // }
        // slides[0]=temp;

    //     if(index==0){
    //         index=totalslides-1;
    //     }
    //     else{
    //         index--;
    //     }
    // }

    // for(i=0;i<slides.length;i++){
    //     // console.log(i)
    //     slides[i].classList.remove("active")
    //     // slides[index].classList.add("post-hidden");
    // }
    
    // slides[index].classList.add("active");
// }
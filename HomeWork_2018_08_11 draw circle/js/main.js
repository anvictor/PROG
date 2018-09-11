var brush = document.getElementById('shapes');
brush.addEventListener('change', changeShape,false);
var shapeWidth = document.getElementById('shWidth');
shapeWidth.addEventListener('change', changeShWidth, false);
var shapeHeight = document.getElementById('shHeight');
shapeHeight.addEventListener('change', changeShHeight, false);
var canvasXY = document.getElementById('workCanvas');
canvasXY.addEventListener('click', getXY, false);

function changeShape() {
    console.log(shapes.value);
    if(shapes.value=='oval' || shapes.value=='rectangle'){
        var arr=document.getElementsByClassName('inpHeight');
        for (var i=0; i<arr.length; i++){
            arr[i].style='display:block;';
        }
    }else if(shapes.value=='circle' || shapes.value=='square'){
        var arr=document.getElementsByClassName('inpHeight');
        for (var i=0; i<arr.length; i++){
            arr[i].style='display:none;';
        }
    }
}

function changeShWidth() {
    console.log('changeShWidth');
}

function changeShHeight() {
    console.log('changeShHeight');
}

function getXY(){
    console.log(event.clientX+':'+event.clientY);

}

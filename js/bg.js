var canvas = document.createElement('canvas'),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    halfWidth = width / 4,
    halfHeight = height / 4,
    fov = 1800,
    offsetX = 0,
    offsetY = 0,
    mouseX = 0,
    mouseY = 0;

var context = canvas.getContext('2d');
document.body.appendChild(canvas);
document.body.addEventListener("mousemove", onMouseMove);


// set up an grid of 3D Pixels in undulating waves
var pixels = []; 

for(var x = -1000; x<1000; x+=5) { 
    for(var z = -1000; z<1000; z+=5) { 
        var zOscillation = Math.sin(z*(Math.PI*4/500));
        var xOscillation = Math.sin((x+z)*(Math.PI*2/500));
        var pixel = new Pixel3D(x,(zOscillation+xOscillation)*14+120,z);
        pixels.push(pixel); 
    }
}

// call the render function 30 times a second
// setInterval(render, 1000 / 30);
requestAnimationFrame(render);


function render() {

    // ease offsetX and offsetY towards the 
    // mouse position (to smooth the "camera" 
    // motion). 
    offsetX += (mouseX - offsetX)*0.1; 
    offsetY += (mouseY - offsetY)*0.1; 

    
    // clear the canvas
    context.clearRect(0, 0, width, height);
    // and get the imagedata out of it
    var imagedata = context.getImageData(0, 0, canvas.width, canvas.height);

    // iterate through every point in the array
    var i = pixels.length;
    while (i--) {
        var pixel = pixels[i];

        // here's the 3D to 2D formula, first work out 
        // scale for that pixel's z position (distance from 
        // camera)
        var scale = fov / (fov + pixel.z);
        // and multiply our 3D x and y to get our
        // 2D x and y. Add halfWidth and halfHeight
        // so that our 2D origin is in the middle of 
        // the screen.
        var x2d = ((pixel.x+offsetX) * scale) + halfWidth; 
        var y2d = ((pixel.y+offsetY+30) * scale) + halfHeight; 

        // and set that 2D pixel to be green
      var alpha = 255-pixel.z-(0.95*255);
        setPixel(imagedata, x2d, y2d, 77, 77, 77, alpha);

        // add 1 to the z position to bring it a little 
        // closer to the camera each frame
        pixel.z -= 2;
      
        
        // if it's now too close to the camera, 
        // move it to the back
        if (pixel.z < -fov) pixel.z += (fov * 2);

    }

    // and write all those pixel values into the canvas
    context.putImageData(imagedata, 0, 0);
  
  requestAnimationFrame(render);

}

function setPixel(imagedata, x, y, r, g, b, a) {

    if ((x < 0) || (x > width) || (y < 0) || (y > width)) return;

    var i = ((y >> 0) * imagedata.width + (x >> 0)) * 4;

    imagedata.data[i] = r;
    imagedata.data[i + 1] = g;
    imagedata.data[i + 2] = b;
    imagedata.data[i + 3] = a;
}

function Pixel3D(x,y,z) { 
    this.x = x; 
    this.y = y; 
    this.z = z;
}

function onMouseMove(e) {
    mouseX = (halfWidth - e.clientX) * 0.1;
    mouseY = (halfHeight - e.clientY) * 0.1;

}

// 顏色 翻轉
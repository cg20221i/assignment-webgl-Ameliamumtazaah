function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    // Vertices Positions
    var vertices = [
        
        //2
        -0.9, 0.9,
        -0.7, 0.9,
        -0.7, 0.7,
        -0.9, 0.7,
        -0.9, 0.5,
        -0.7, 0.5,

        //8 
        -0.5, 0.9,
        -0.3, 0.9,
        -0.3, 0.7,
        -0.5, 0.7,
        -0.5, 0.5,
        -0.3, 0.5,
        -0.3, 0.7,
        -0.5, 0.7,
        -0.5, 0.9,
        
        //Lines
        0.5, 0.7,
        -0.7, -0.3,

        //A
        0.2, -0.1,
        0.1, -1,
        0.19, -0.5,
        0.25, -0.5,
        0.4, -1,
        0.2, -0.1,
        //0.2, -0.5,
        //0.3, -0.5,
        

        //H
        0.5, -0.1,//A
        0.6, -0.2,//B
        0.5, -0.3,//C
        0.6, -0.7,//D
        0.5, -1,//E
        0.5, -0.5,//C
        0.8, -0.5,//F
        0.7, -0.8,//G
        0.8, -1,//H
        0.8, -0.5,//F
        0.7, -0.2,//I
        0.8, -0.1,//J
        0.8, -0.5,//F
        0.5, -0.3,//C
        0.5, -0.1,//A
        

    ];

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    // VERTEX SHADER
    var vertexShaderCode = `
        attribute vec2 aPosition;
        void main () {
            gl_PointSize = 15.0;
            gl_Position = vec4(aPosition, 0.0, 1.0);
            // gl_Position is the final destination for storing
            //  positional data for the rendered vertex
        }
    `;

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);


     // FRAGMENT SHADER
     var fragmentShaderCode = `
     precision mediump float;
     void main() {
            gl_FragColor = vec4(0.40, 0.29, 0.18, 1.0);
        }
    `;

    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);

    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);


    // Vertices Attrib Positions Preps
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPosition);

    // Backround Color
    gl.clearColor(0.96, 0.93, 0.86, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);




    //Renders 
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 6); // 2
    gl.drawArrays(gl.LINE_STRIP, 6, 9); // 8
    gl.drawArrays(gl.LINE_STRIP, 15, 2); // 8
    gl.drawArrays(gl.TRIANGLE_STRIP, 17, 6); // A
    gl.drawArrays(gl.TRIANGLE_STRIP, 23, 12); // H

}
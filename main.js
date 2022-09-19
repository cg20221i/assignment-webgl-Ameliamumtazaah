function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    // Vertices Positions
    var vertices = [
        // Letter A
        0.1,-0.8,
       0.330,-0.8,
       0.45,-0.1,
       0.6, -0.8,
       0.8,-0.8,
       0.45,-0.1,
       0.42,-0.4,
       0.4,-0.6,
       0.52,-0.5,

    
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
        }
    `;
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);

    // FRAGMENT SHADER
    var fragmentShaderCode = `
        precision mediump float;
        void main() {
            gl_FragColor = vec4(0.83, 0.60, 0.73, 1.0);
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

    // Backround Color
    gl.clearColor(0.96, 0.93, 0.86, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Vertices Attrib Positions Preps
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPosition);

    //Renders
    gl.drawArrays(gl.TRIANGLES, 47,9);//LETTER A
}
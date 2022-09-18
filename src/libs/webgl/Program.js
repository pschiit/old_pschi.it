export class Program {
    constructor(/** @type {WebGLRenderingContext} */gl){
        this.gl = gl;
        this.init();
    }

    attachShader(shader){
        const compiledShader = shader.getCompiledShader ? shader.getCompiledShader(this.gl) : shader;
        this.gl.attachShader(this.program, compiledShader);
    }

    link(){
        this.gl.linkProgram(this.program);
    }

    create(vertexShader, fragmentShader) {
        this.program = this.gl.createProgram();
        this.attachShader(vertexShader);
        this.attachShader(fragmentShader);
        this.link();

        if(this.getLinkStatus){
            return true;
        }
        const error = new Error(`Failed to create program : ${this.gl.getProgramInfoLog(this.program)}`,);
        this.delete();
        throw error;
    }

    getLinkStatus(){
        return this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS);
    }

    delete(){
        this.gl.deleteProgram(this.program);
        this.program = null;

        return this;
    }
    
    init() {
        throw new Error(`${this.constructor.name} is missing ${this.init.name} implementation.`);
    }

    run() {
        throw new Error(`${this.constructor.name} is missing ${this.run.name} implementation.`);
    }

    use(){
        this.gl.useProgram(this.program);
    }

    saveLocation(){
        this.vertexShader.saveLocation(this.gl, this.program);
        this.fragmentShader.saveLocation(this.gl, this.program);
    }
}
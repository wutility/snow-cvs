class t{constructor(){this.x=0,this.y=0,this.vx=0,this.vy=0,this.alpha=0,this.raduis=0,this.reset()}update(){this.x+=this.vx,this.y+=this.vy,this.y+this.raduis>window.innerHeight&&this.reset()}reset(){this.x=this.rand(0,window.innerWidth),this.y=this.rand(0,-window.innerHeight),this.vx=this.rand(2,-2),this.vy=this.rand(2,4),this.raduis=this.rand(1,2),this.alpha=this.rand(.1,.8)}rand(t,i){return t+Math.random()*(i-t)}}var i=new class{constructor(){this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),window.addEventListener("resize",()=>this.onResize()),this.onResize(),this.createSnowFlakes(),this.updateBound=this.update.bind(this),requestAnimationFrame(this.updateBound)}onResize(){this.width=window.innerWidth,this.height=window.innerHeight,this.canvas.width=this.width,this.canvas.height=this.height}createSnowFlakes(){this.snowFlakes=[];for(let i=0;i<window.innerWidth/6;i++)this.snowFlakes.push(new t)}update(){this.ctx.clearRect(0,0,this.width,this.height),this.snowFlakes.forEach(t=>{t.update(),this.createCirle(t),this.ctx.restore()}),requestAnimationFrame(this.updateBound)}createCirle(t){this.ctx.save(),this.ctx.fillStyle="#fff",this.ctx.beginPath(),this.ctx.arc(t.x,t.y,t.raduis,0,2*Math.PI),this.ctx.closePath(),this.ctx.globalAlpha=(!1).alpha,this.ctx.fill()}getCanvas(){return this.canvas}};export default i;

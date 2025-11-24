import { Component, HostListener, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursor-spotlight',
  standalone: true,
  imports: [CommonModule],
  template: `<canvas #canvas class="spotlight-canvas"></canvas>`,
  styles: [`
    .spotlight-canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: 9999;
    }
  `]
})
export class CursorSpotlightComponent implements AfterViewInit {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  mouseX = 0;
  mouseY = 0;
  currentX = 0;
  currentY = 0;
  speed = 0.25;
  ctx!: CanvasRenderingContext2D;

  canvasWidth = 0;
  canvasHeight = 0;

  @HostListener('window:resize')
  onResize() { this.resizeCanvas(); }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }

  ngAfterViewInit() {
    this.ctx = this.canvasRef.nativeElement.getContext('2d')!;
    this.resizeCanvas();
    this.animate();
  }

  resizeCanvas() {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;
  }

  animate() {
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const loop = () => {
      this.currentX = lerp(this.currentX, this.mouseX, this.speed);
      this.currentY = lerp(this.currentY, this.mouseY, this.speed);

      this.draw();
      requestAnimationFrame(loop);
    };

    loop();
  }

// Efecto linterna cursor
draw() {
  const ctx = this.ctx;
  ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

// Núcleo: sin luz 
  this.drawRing(0, 50, [
    [0.0, 'rgba(0,0,0,0)'],
    [1.0, 'rgba(0,0,0,0)']
  ]);

// Primer halo suave
this.drawRing(50, 130, [
  [0.0, 'rgba(255,255,255,0.004)'],
  [0.7, 'rgba(255,255,255,0.002)'],
  [1.0, 'rgba(255,255,255,0.000)']
]);

// Segundo anillo fuerte
this.drawRing(130, 190, [
  [0.0, 'rgba(255,255,255,0.008)'],
  [0.6, 'rgba(255,255,255,0.004)'],
  [1.0, 'rgba(255,255,255,0.000)']
]);

// Segundo halo suave
this.drawRing(190, 270, [
  [0.0, 'rgba(255,255,255,0.006)'],
  [0.6, 'rgba(255,255,255,0.003)'],
  [1.0, 'rgba(255,255,255,0.000)']
]);

// Tercer anillo fuerte
this.drawRing(270, 330, [
  [0.0, 'rgba(255,255,255,0.010)'],
  [0.6, 'rgba(255,255,255,0.005)'],
  [1.0, 'rgba(255,255,255,0.000)']
]);

// Difuminado exterior
this.drawRing(330, 450, [
  [0.0, 'rgba(255,255,255,0.004)'],
  [0.7, 'rgba(255,255,255,0.002)'],
  [1.0, 'rgba(255,255,255,0.000)']
]);
}



  drawRing(innerR: number, outerR: number, stops: [number, string][]) {
    const g = this.ctx.createRadialGradient(
      this.currentX, this.currentY, innerR,
      this.currentX, this.currentY, outerR
    );

    for (const [pos, color] of stops) g.addColorStop(pos, color);

    this.ctx.fillStyle = g;
    this.ctx.beginPath();
    this.ctx.arc(this.currentX, this.currentY, outerR, 0, Math.PI * 2);
    this.ctx.fill();
  }
}

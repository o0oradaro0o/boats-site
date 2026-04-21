import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  HostListener,
  Input,
} from '@angular/core';

interface Particle {
  x: number;
  y: number;
  r: number;
  speed: number;
  opacity: number;
  color: string;
  drift: number;
}

@Component({
  selector: 'app-bubbles',
  templateUrl: './bubbles.component.html',
  styleUrls: ['./bubbles.component.scss'],
})
export class BubblesComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas') canvasRef: ElementRef<HTMLCanvasElement>;
  @Input() count = 45;

  private ctx: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private rafId: number;
  private readonly COLORS = [
    '#4A7BF7',
    '#1B4B6B',
    '#80DEEA',
    '#4FC3F7',
    '#D4EDF7',
  ];

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d');
    this.resize();
    this.initParticles();
    this.animate();
  }

  @HostListener('window:resize')
  resize() {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = canvas.offsetParent
      ? (canvas.offsetParent as HTMLElement).offsetWidth
      : window.innerWidth;
    canvas.height = canvas.offsetParent
      ? (canvas.offsetParent as HTMLElement).offsetHeight
      : window.innerHeight;
  }

  private initParticles() {
    const canvas = this.canvasRef.nativeElement;
    this.particles = Array.from({ length: this.count }, () =>
      this.makeParticle(canvas, true),
    );
  }

  private makeParticle(canvas: HTMLCanvasElement, randomY = false): Particle {
    return {
      x: Math.random() * canvas.width,
      y: randomY ? Math.random() * canvas.height : canvas.height + 10,
      r: 1.5 + Math.random() * 4.5,
      speed: 0.25 + Math.random() * 0.85,
      opacity: 0.15 + Math.random() * 0.35,
      color: this.COLORS[Math.floor(Math.random() * this.COLORS.length)],
      drift: (Math.random() - 0.5) * 0.25,
    };
  }

  private animate() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.y -= p.speed;
      p.x += p.drift;

      if (p.y < -p.r * 2) {
        this.particles[i] = this.makeParticle(canvas);
      }

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = p.opacity;
      this.ctx.fill();
      this.ctx.globalAlpha = 1;
    }

    this.rafId = requestAnimationFrame(() => this.animate());
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.rafId);
  }
}

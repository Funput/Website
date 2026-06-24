import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FUNPUT_CONSTANTS } from '../../constants';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  protected readonly constants = FUNPUT_CONSTANTS;
  protected readonly particles = [0, 1, 2, 3, 4, 5, 6, 7];

  protected readonly tilt = signal({ x: 0, y: 0 });

  protected onPointerMove(event: PointerEvent): void {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    this.tilt.set({ x: py * -14, y: px * 16 });
  }

  protected onPointerLeave(): void {
    this.tilt.set({ x: 0, y: 0 });
  }

  protected rigTransform(): string {
    const { x, y } = this.tilt();
    return `rotateX(${x}deg) rotateY(${y}deg)`;
  }
}

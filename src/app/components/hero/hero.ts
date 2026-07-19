import { afterNextRender, Component, DestroyRef, inject, signal } from '@angular/core';
import { FUNPUT_CONSTANTS } from '../../constants';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class HeroComponent {
  private readonly destroyRef = inject(DestroyRef);

  protected readonly constants = FUNPUT_CONSTANTS;
  protected readonly particles = [0, 1, 2, 3, 4, 5, 6, 7];

  /** Full prism effects mount only on capable desktop viewports. */
  protected readonly showEffects = signal(false);
  private readonly tiltEnabled = signal(false);
  protected readonly tilt = signal({ x: 0, y: 0 });

  constructor() {
    afterNextRender(() => {
      const effectsQuery = window.matchMedia(
        '(min-width: 1024px) and (prefers-reduced-motion: no-preference)',
      );
      const tiltQuery = window.matchMedia('(hover: hover) and (pointer: fine)');

      const syncCapabilities = () => {
        const effectsOn = effectsQuery.matches;
        this.showEffects.set(effectsOn);
        this.tiltEnabled.set(effectsOn && tiltQuery.matches);
        if (!this.tiltEnabled()) {
          this.tilt.set({ x: 0, y: 0 });
        }
      };

      syncCapabilities();
      effectsQuery.addEventListener('change', syncCapabilities);
      tiltQuery.addEventListener('change', syncCapabilities);

      this.destroyRef.onDestroy(() => {
        effectsQuery.removeEventListener('change', syncCapabilities);
        tiltQuery.removeEventListener('change', syncCapabilities);
      });
    });
  }

  protected onPointerMove(event: PointerEvent): void {
    if (!this.tiltEnabled()) {
      return;
    }

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

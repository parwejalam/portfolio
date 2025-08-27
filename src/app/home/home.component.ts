import { Component, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { TxtType } from '../services/txt-type.service';
import { IconsService } from '../services/icons.service';
import { ThemeService } from '../services/theme.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxParticlesModule } from '@tsparticles/angular';

// particles
import type { Container, Engine, ISourceOptions } from '@tsparticles/engine';
import { loadFull } from 'tsparticles';
import configs from '@tsparticles/configs';
import { NgParticlesService } from '@tsparticles/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, NgxParticlesModule]
})
export class HomeComponent implements AfterViewInit, OnInit, OnDestroy {
  title = 'angular';
  private themeSubscription: Subscription = new Subscription();
  
  constructor(
    private icons: IconsService,
    private ngParticlesService: NgParticlesService,
    private cdr: ChangeDetectorRef,
    private themeService: ThemeService
  ) { }
  socialIcons = this.icons.socialIcons;

  // Typing Effect
  @ViewChild('typingEffect', { static: true }) typingEffect!: ElementRef;

  // Particles configuration
  particlesId = 'home-particles';
  particlesVisible = true;
  particlesOptions: ISourceOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  configPart = [
    { label: 'Default Links', value: this.particlesOptions },
    { label: 'Z Index', value: configs.zIndex },
    { label: 'Wobble', value: configs.wobble },
    { label: 'Vibrate', value: configs.vibrate },
    { label: 'Virus', value: configs.virus },
    { label: 'Test', value: configs.test },
    { label: 'Text Mask', value: configs.textMask },
    { label: 'Text Mask Multiline', value: configs.textMaskMultiline },
    { label: 'Themes', value: configs.themes },
    { label: 'Tilt', value: configs.tilt },
    { label: 'Trail', value: configs.trail },
    { label: 'Trail Image', value: configs.trailImage },
    { label: 'Triangles', value: configs.triangles },
    { label: 'Twinkle', value: configs.twinkle },
    { label: 'Sea Anemone', value: configs.seaAnemone },
    { label: 'Shadow', value: configs.shadow },
    { label: 'Shape Arrow', value: configs.shapeArrow },
    { label: 'Shape Cog', value: configs.shapeCog },
    { label: 'Shape Emoji', value: configs.shapeEmoji },
    { label: 'Shape Heart', value: configs.shapeHeart },
    { label: 'Shape Multiline Text', value: configs.shapeMultilineText },
    { label: 'Shape Options', value: configs.shapeOptions },
    { label: 'Shape Path', value: configs.shapePath },
    { label: 'Shape Rounded Polygon', value: configs.shapeRoundedPolygon },
    { label: 'Shape Rounded Rect', value: configs.shapeRoundedRect },
    { label: 'Shape Spiral', value: configs.shapeSpiral },
    { label: 'Slow', value: configs.slow },
    { label: 'Snow', value: configs.snow },
    { label: 'Sounds Audio', value: configs.soundsAudio },
    { label: 'Sounds Loop', value: configs.soundsLoop },
    { label: 'Sounds Melodies', value: configs.soundsMelodies },
    { label: 'Sounds Melody Loop', value: configs.soundsMelodyLoop },
    { label: 'Sounds Notes', value: configs.soundsNotes },
    { label: 'Speed Decay', value: configs.speedDecay },
    { label: 'Spin', value: configs.spin },
    { label: 'Star', value: configs.star },
    { label: 'Stroke Animation', value: configs.strokeAnimation },
    { label: 'Style', value: configs.style },
    { label: 'Svg Replace', value: configs.svgReplace },
    { label: 'Random', value: configs.random },
    { label: 'React Bubbles', value: configs.reactBubbles },
    { label: 'React Defaults', value: configs.reactDefaults },
    { label: 'React Multiple Images', value: configs.reactMultipleImages },
    { label: 'React Night Sky', value: configs.reactNightSky },
    { label: 'React Polygon Mask', value: configs.reactPolygonMask },
    { label: 'React Simple', value: configs.reactSimple },
    { label: 'React Snow', value: configs.reactSnow },
    { label: 'Reduce Duplicates', value: configs.reduceDuplicates },
    { label: 'Repulse', value: configs.repulse },
    { label: 'Repulse Back', value: configs.repulseBack },
    { label: 'Repulse Circ', value: configs.repulseCirc },
    { label: 'Repulse Cubic', value: configs.repulseCubic },
    { label: 'Repulse Expo', value: configs.repulseExpo },
    { label: 'Repulse Quart', value: configs.repulseQuart },
    { label: 'Repulse Quint', value: configs.repulseQuint },
    { label: 'Repulse Sine', value: configs.repulseSine },
    { label: 'Responsive', value: configs.responsive },
    { label: 'Ring', value: configs.ring },
    { label: 'Parallax', value: configs.parallax },
    { label: 'Path Polygon Mask', value: configs.pathPolygonMask },
    { label: 'Path Svg', value: configs.pathSvg },
    { label: 'Path ZigZag', value: configs.pathZigZag },
    { label: 'Planes', value: configs.planes },
    { label: 'Plasma', value: configs.plasma },
    { label: 'Poisson', value: configs.poisson },
    { label: 'Polygon Mask', value: configs.polygonMask },
    { label: 'Polygons', value: configs.polygons },
    { label: 'Pop', value: configs.pop },
    { label: 'Orbit', value: configs.orbit },
    { label: 'Nasa', value: configs.nasa },
    { label: 'No Clear', value: configs.noClear },
    { label: 'No Config', value: configs.noConfig },
    { label: 'Noise Planes', value: configs.noisePlanes },
    { label: 'Nyan Cat', value: configs.nyancat },
    { label: 'Nyan Cat 2', value: configs.nyancat2 },
    { label: 'Manual', value: configs.manual },
    { label: 'Motion Disable', value: configs.motionDisable },
    { label: 'Motion Reduce', value: configs.motionReduce },
    { label: 'Mouse Attract', value: configs.mouseAttract },
    { label: 'Mouse Bounce', value: configs.mouseBounce },
    { label: 'Mouse Follow', value: configs.mouseFollow },
    { label: 'Mouse Particle', value: configs.mouseParticle },
    { label: 'Mouse Particle 2', value: configs.mouseParticle2 },
    { label: 'Mouse Trail', value: configs.mouseTrail },
    { label: 'Mouse Trail Noise', value: configs.mouseTrailNoise },
    { label: 'Move Angle', value: configs.moveAngle },
    { label: 'Move Distance', value: configs.moveDistance },
    { label: 'Move Inside', value: configs.moveInside },
    { label: 'Move Outside', value: configs.moveOutside },
    { label: 'Multiple Click Emitters', value: configs.multipleClickEmitters },
    { label: 'Multiple Polygon Masks', value: configs.multiplePolygonMasks },
    { label: 'Life', value: configs.life },
    { label: 'Light Hover', value: configs.lightHover },
    { label: 'Link Triangles', value: configs.linkTriangles },
    { label: 'Local Polygon Mask', value: configs.localPolygonMask },
    { label: 'Image Mask', value: configs.imageMask },
    { label: 'Images', value: configs.images },
    { label: 'Images Directions', value: configs.imagesDirections },
    { label: 'Infection', value: configs.infection },
    { label: 'Hexagon Path', value: configs.hexagonPath },
    { label: 'Hollow Knight', value: configs.hollowknight },
    { label: 'Hyperspace', value: configs.hyperspace },
    { label: 'Gifs', value: configs.gifs },
    { label: 'Grab Random Color', value: configs.grabRandomColor },
    { label: 'Gradients', value: configs.gradients },
    { label: 'Gravity', value: configs.gravity },
    { label: 'Growing', value: configs.growing },
    { label: 'Fireworks', value: configs.fireworks },
    { label: 'Fireworks 2', value: configs.fireworks2 },
    { label: 'Font Awesome', value: configs.fontawesome },
    { label: 'Forward', value: configs.forward },
    { label: 'Effect Bubble', value: configs.effectBubble },
    { label: 'Effect Trail', value: configs.effectTrail },
    { label: 'Emitter', value: configs.emitter },
    { label: 'Emitter Absorber', value: configs.emitterAbsorber },
    { label: 'Emitter Angled', value: configs.emitterAngled },
    { label: 'Emitter Image Shape', value: configs.emitterImageShape },
    { label: 'Emitter Images', value: configs.emitterImages },
    { label: 'Emitter Paths', value: configs.emitterPaths },
    { label: 'Emitter Shapes', value: configs.emitterShapes },
    { label: 'Emitter Spawn Color', value: configs.emitterSpawnColor },
    { label: 'Emitter Text Shape', value: configs.emitterTextShape },
    { label: 'Emitter Text Stroke Shape', value: configs.emitterTextStrokeShape },
    { label: 'Data Images', value: configs.dataImages },
    { label: 'Delay', value: configs.delay },
    { label: 'Delay Color', value: configs.delayColor },
    { label: 'Delay Opacity', value: configs.delayOpacity },
    { label: 'Delay Size', value: configs.delaySize },
    { label: 'Delay Stroke Color', value: configs.delayStrokeColor },
    { label: 'Destroy', value: configs.destroy },
    { label: 'Disappearing', value: configs.disappearing },
    { label: 'Div Events', value: configs.divEvents },
    { label: 'Cards', value: configs.cards },
    { label: 'Chars', value: configs.chars },
    { label: 'Click Pause', value: configs.clickPause },
    { label: 'Collisions Absorb', value: configs.collisionsAbsorb },
    { label: 'Collisions Bounce', value: configs.collisionsBounce },
    { label: 'Collisions Destroy', value: configs.collisionsDestroy },
    { label: 'Color Animation', value: configs.colorAnimation },
    { label: 'Connect', value: configs.connect },
    { label: 'Curl Noise', value: configs.curlNoise },
    { label: 'Background Mask', value: configs.backgroundMask },
    { label: 'Background Mask Image', value: configs.backgroundMaskImage },
    { label: 'Basic', value: configs.basic },
    { label: 'Big', value: configs.big },
    { label: 'Black Hole', value: configs.blackHole },
    { label: 'Bubble', value: configs.bubble },
    { label: 'Absorbers', value: configs.absorbers },
    { label: 'Among Us', value: configs.amongUs },
  ];

  ngAfterViewInit() {
    const phrases = ["Welcome to my Portfolio!", "An Angular Developer."];
    new TxtType(this.typingEffect.nativeElement, phrases);
  }

  ngOnInit(): void {
    void this.ngParticlesService.init(async (engine: Engine) => {
      console.log('Home Particles', engine);
      await loadFull(engine);
    });
    
    // Update particles when theme changes
    this.updateParticleColors();
    
    // Subscribe to theme changes
    this.themeSubscription = this.themeService.theme$.subscribe(() => {
      this.updateParticleColors();
      // Refresh particles to apply new colors
      this.particlesVisible = false;
      this.cdr.detectChanges();
      
      setTimeout(() => {
        this.particlesVisible = true;
        this.cdr.detectChanges();
      }, 100);
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  // Get theme-appropriate colors for particles
  private getParticleColors() {
    const isDark = this.themeService.getTheme() === 'dark';
    return {
      particle: isDark ? '#ffffff' : '#000000',
      links: isDark ? '#ffffff' : '#000000',
      opacity: isDark ? 0.5 : 0.3
    };
  }

  // Update particle colors based on current theme
  private updateParticleColors() {
    const colors = this.getParticleColors();
    const currentLinks = this.particlesOptions.particles?.['links'] || {};
    
    this.particlesOptions = {
      ...this.particlesOptions,
      particles: {
        ...this.particlesOptions.particles,
        color: {
          value: colors.particle,
        },
        links: {
          color: colors.links,
          distance: 150,
          enable: true,
          opacity: colors.opacity,
          width: 1,
        },
        opacity: {
          value: colors.opacity,
        },
      },
    };
  }

  public particlesLoaded(container: Container): void {
    console.log('Home particles loaded', container);
  }

  // Particles control methods
  particlesChange(event: any) {
    const selectedIndex = parseInt(event.target.value);
    console.log('Selected particle config:', selectedIndex, this.configPart[selectedIndex].label);

    if (selectedIndex >= 0 && selectedIndex < this.configPart.length) {
      let configItem = this.configPart[selectedIndex];
      this.particlesVisible = false;
      this.cdr.detectChanges();

      setTimeout(() => {
        this.particlesOptions = configItem.value;
        this.particlesVisible = true;
        this.cdr.detectChanges();
      }, 100);
    }
  }

  toggleParticlesClick(): void {
    console.log('home particles visibility toggled');
    this.particlesVisible = !this.particlesVisible;
    this.cdr.detectChanges();
  }

  // Method to update particles when theme changes (can be called from parent or theme service)
  updateTheme(): void {
    this.updateParticleColors();
    this.particlesVisible = false;
    this.cdr.detectChanges();
    
    setTimeout(() => {
      this.particlesVisible = true;
      this.cdr.detectChanges();
    }, 100);
  }



}

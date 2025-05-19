import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';

// particles
import type { Container, Engine, ISourceOptions } from '@tsparticles/engine';
import { loadFull } from 'tsparticles';
import configs from '@tsparticles/configs';
import { NgParticlesService } from '@tsparticles/angular';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent implements OnInit {
  // NavBarCollapes
  isNavbarCollapsed = false;
  navLinks = [
    { label: 'Home', id: '#home' },
    { label: 'About', id: '#about' },
    { label: 'Skills', id: '#skills' },
    { label: 'Projects', id: '#projects' },
    { label: 'Contact', id: '#contact' },
  ];

  toggleNav() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  // theme methods and services
  themeIcon?: string;

  constructor(
    private themeService: ThemeService,
    private ngParticlesService: NgParticlesService,
    private cdr: ChangeDetectorRef
  ) {
    this.updateIcon();
  }
  // theme = this.themeService.theme;
  toggleTheme(): void {
    this.themeService.toggleTheme();
    this.updateIcon();
  }
  updateIcon(): void {
    this.themeIcon =
      this.themeService.getTheme() === 'light' ? 'fas fa-moon' : 'fas fa-sun';
  }

  // particles
  id = 'tsparticles';
  fire = 0;
  particlesVisible = true;
  particlesOptions: ISourceOptions = configs.moveAngle; //delay,motionDisable, grabRandomColor,linkTriangles,repulseBack

  configPart = [
    { label: 'Triangles', value: configs.linkTriangles },
    { label: 'zIndex', value: configs.zIndex },
    { label: 'wobble', value: configs.wobble },
    { label: 'vibrate', value: configs.vibrate },
    { label: 'virus', value: configs.virus },
    { label: 'test', value: configs.test },
    { label: 'textMask', value: configs.textMask },
    { label: 'textMaskMultiline', value: configs.textMaskMultiline },
    { label: 'themes', value: configs.themes },
    { label: 'tilt', value: configs.tilt },
    { label: 'trail', value: configs.trail },
    { label: 'trailImage', value: configs.trailImage },
    { label: 'triangles', value: configs.triangles },
    { label: 'twinkle', value: configs.twinkle },
    { label: 'seaAnemone', value: configs.seaAnemone },
    { label: 'shadow', value: configs.shadow },
    { label: 'shapeArrow', value: configs.shapeArrow },
    { label: 'shapeCog', value: configs.shapeCog },
    { label: 'shapeEmoji', value: configs.shapeEmoji },
    { label: 'shapeHeart', value: configs.shapeHeart },
    { label: 'shapeMultilineText', value: configs.shapeMultilineText },
    { label: 'shapeOptions', value: configs.shapeOptions },
    { label: 'shapePath', value: configs.shapePath },
    { label: 'shapeRoundedPolygon', value: configs.shapeRoundedPolygon },
    { label: 'shapeRoundedRect', value: configs.shapeRoundedRect },
    { label: 'shapeSpiral', value: configs.shapeSpiral },
    { label: 'slow', value: configs.slow },
    { label: 'snow', value: configs.snow },
    { label: 'soundsAudio', value: configs.soundsAudio },
    { label: 'soundsLoop', value: configs.soundsLoop },
    { label: 'soundsMelodies', value: configs.soundsMelodies },
    { label: 'soundsMelodyLoop', value: configs.soundsMelodyLoop },
    { label: 'soundsNotes', value: configs.soundsNotes },
    { label: 'speedDecay', value: configs.speedDecay },
    { label: 'spin', value: configs.spin },
    { label: 'star', value: configs.star },
    { label: 'strokeAnimation', value: configs.strokeAnimation },
    { label: 'style', value: configs.style },
    { label: 'svgReplace', value: configs.svgReplace },
    { label: 'random', value: configs.random },
    { label: 'reactBubbles', value: configs.reactBubbles },
    { label: 'reactDefaults', value: configs.reactDefaults },
    { label: 'reactMultipleImages', value: configs.reactMultipleImages },
    { label: 'reactNightSky', value: configs.reactNightSky },
    { label: 'reactPolygonMask', value: configs.reactPolygonMask },
    { label: 'reactSimple', value: configs.reactSimple },
    { label: 'reactSnow', value: configs.reactSnow },
    { label: 'reduceDuplicates', value: configs.reduceDuplicates },
    { label: 'repulse', value: configs.repulse },
    { label: 'repulseBack', value: configs.repulseBack },
    { label: 'repulseCirc', value: configs.repulseCirc },
    { label: 'repulseCubic', value: configs.repulseCubic },
    { label: 'repulseExpo', value: configs.repulseExpo },
    { label: 'repulseQuart', value: configs.repulseQuart },
    { label: 'repulseQuint', value: configs.repulseQuint },
    { label: 'repulseSine', value: configs.repulseSine },
    { label: 'responsive', value: configs.responsive },
    { label: 'ring', value: configs.ring },
    { label: 'parallax', value: configs.parallax },
    { label: 'pathPolygonMask', value: configs.pathPolygonMask },
    { label: 'pathSvg', value: configs.pathSvg },
    { label: 'pathZigZag', value: configs.pathZigZag },
    { label: 'planes', value: configs.planes },
    { label: 'plasma', value: configs.plasma },
    { label: 'poisson', value: configs.poisson },
    { label: 'polygonMask', value: configs.polygonMask },
    { label: 'polygons', value: configs.polygons },
    { label: 'pop', value: configs.pop },
    { label: 'orbit', value: configs.orbit },
    { label: 'nasa', value: configs.nasa },
    { label: 'nasa', value: configs.nasa },
    { label: 'noClear', value: configs.noClear },
    { label: 'noConfig', value: configs.noConfig },
    { label: 'noisePlanes', value: configs.noisePlanes },
    { label: 'nyancat', value: configs.nyancat },
    { label: 'nyancat2', value: configs.nyancat2 },
    { label: 'manual', value: configs.manual },
    { label: 'motionDisable', value: configs.motionDisable },
    { label: 'motionReduce', value: configs.motionReduce },
    { label: 'mouseAttract', value: configs.mouseAttract },
    { label: 'mouseBounce', value: configs.mouseBounce },
    { label: 'mouseFollow', value: configs.mouseFollow },
    { label: 'mouseParticle', value: configs.mouseParticle },
    { label: 'mouseParticle2', value: configs.mouseParticle2 },
    { label: 'mouseTrail', value: configs.mouseTrail },
    { label: 'mouseTrailNoise', value: configs.mouseTrailNoise },
    { label: 'moveAngle', value: configs.moveAngle },
    { label: 'moveDistance', value: configs.moveDistance },
    { label: 'moveInside', value: configs.moveInside },
    { label: 'moveOutside', value: configs.moveOutside },
    { label: 'multipleClickEmitters', value: configs.multipleClickEmitters },
    { label: 'multiplePolygonMasks', value: configs.multiplePolygonMasks },
    { label: 'life', value: configs.life },
    { label: 'lightHover', value: configs.lightHover },
    { label: 'linkTriangles', value: configs.linkTriangles },
    { label: 'localPolygonMask', value: configs.localPolygonMask },
    { label: 'imageMask', value: configs.imageMask },
    { label: 'images', value: configs.images },
    { label: 'imagesDirections', value: configs.imagesDirections },
    { label: 'infection', value: configs.infection },
    { label: 'hexagonPath', value: configs.hexagonPath },
    { label: 'hollowknight', value: configs.hollowknight },
    // { label: 'vibrate', value: configs.vibrate },
    // { label: 'vibrate', value: configs.vibrate },
    // { label: 'vibrate', value: configs.vibrate },
  ];

  // Prticles dropdown function and more
  particlesChange(event: any) {
    console.log(event.target.selectedIndex);
    let configItem = this.configPart[event.target.selectedIndex];
    this.particlesVisible = !this.particlesVisible;
    this.cdr.detectChanges();
    this.particlesVisible = !this.particlesVisible;
    this.particlesOptions = configItem.value;
    this.cdr.detectChanges();
  }

  // constructor(private ngParticlesService: NgParticlesService) {}

  // confettiOptions = {
  //   particleCount: 1000,
  //   spread: 10,
  //   origin: { y: 0.6 },
  // };
  // fireworksOptions = {};

  toggleParticlesClick(): void {
    console.log('particles clicked');
    this.particlesVisible = !this.particlesVisible;
  }

  // toggleFireworksClick(): void {
  //   console.log('fireworks clicked');

  //   this.fireworksVisible = !this.fireworksVisible;
  // }

  // toggleConfettiClick(): void {
  //   console.log('confetti clicked');

  //   this.fire = Math.random() + 1;
  //   this.confettiVisible = !this.confettiVisible;
  // }

  ngOnInit(): void {
    void this.ngParticlesService.init(async (engine: Engine) => {
      console.log('Particals', engine);

       loadFull(engine);
    });
  }

  public particlesLoaded(container: Container): void {
    console.log('loaded', container);
  }
}

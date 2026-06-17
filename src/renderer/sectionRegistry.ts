import type { SectionComponent } from './types';
import { HeroSection } from './sections/HeroSection';
import { StorySection } from './sections/StorySection';
import { GallerySection } from './sections/GallerySection';
import { EventListSection } from './sections/EventListSection';
import { RsvpSection } from './sections/RsvpSection';

export const sectionRegistry: Record<string, SectionComponent> = {
  hero: HeroSection,
  story: StorySection,
  gallery: GallerySection,
  'event-list': EventListSection,
  rsvp: RsvpSection,
};

export function getSectionComponent(type: string): SectionComponent | undefined {
  return sectionRegistry[type];
}

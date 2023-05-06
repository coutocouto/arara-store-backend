import { Image } from './entities/image.entities';
export const imagesProviders = [
  {
    provide: 'IMAGES_REPOSITORY',
    useValue: Image,
  },
];

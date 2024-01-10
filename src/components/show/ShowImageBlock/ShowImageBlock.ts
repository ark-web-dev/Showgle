import { createElement } from '@/shared/lib/dom/createElement';
import styles from './ShowImageBlock.module.css';
import imagePlaceholder from '@/shared/assets/images/istockphoto.jpg';

type ShowImageBlockProps = {
  imageUrl: string;
  altText: string;
};

export const ShowImageBlock = ({ imageUrl, altText }: ShowImageBlockProps) => {
  return createElement(
    'figure',
    {
      className: styles.imageWrapper,
    },

    createElement('img', {
      src: imageUrl || imagePlaceholder,
      alt: altText,
      className: styles.showImage,
    })
  );
};

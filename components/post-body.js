import styles from './post-body.module.css';
import LazyLoad from 'react-lazyload';
import parse from 'html-react-parser';

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className={styles.content} >{parse(content, {replace: replaceMedia})}</div>
    </div>
  )
}

const getImage = node => {
  if (node.name === 'img') {
    return node;
  } else if (node.children != null) {
    for (let index = 0; index < node.children.length; index++) {
      let image = getImage(node.children[index]);
      if (image != null) return image;
    }
  }
};

const replaceMedia = node => {
  const image = getImage(node);
  if (image != null) {
    return <LazyLoad><img src={image.attribs.src} alt={image.attribs.alt} width={image.attribs.width}/></LazyLoad>;
  }
};
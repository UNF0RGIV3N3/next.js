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
    let alt = image.attribs.src.split('/');
    alt = alt[alt.length -1].split('.')[0].replace(/-/g, " ").replace(/[0-9]/g, "").replace(/ x/g, "").replace(/ x /g, "").replace(/_/g, " ").trim()
    return <LazyLoad><img src={image.attribs.src} alt={alt} width={image.attribs.width}/></LazyLoad>;
  }
};
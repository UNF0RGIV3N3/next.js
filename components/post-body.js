import styles from './post-body.module.css'
import LazyLoad from 'react-lazyload'
import parse from 'html-react-parser'
import dynamic from 'next/dynamic'
import Twitch from './twitch'

const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/gpt'),
  { ssr: false }
)

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <DynamicComponentWithNoSSR />
      <Twitch/>
      <div className={styles.content + " post__content"} >{parse(content, {replace: replaceMedia})}</div>
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

const getSrcSet = srcSet => {
  if (srcSet){
    srcSet.match(/[^"'=\s]+\.(jpe?g|png|gif)/g).forEach(element => {
      element = element.replace(/^https?:\/\//,'');
      srcSet = srcSet.replace(element, 'cdn.statically.io/img/'+element+'?quality=80&f=auto');
    });
    return srcSet
    }
  return
};

const replaceMedia = node => {
  const image = getImage(node);
  if (image != null) {
    let alt = image.attribs.src.split('/')
    alt = alt[alt.length -1].split('.')[0].replace(/-/g, " ").replace(/[0-9]/g, "").replace(/ x/g, "").replace(/ x /g, "").replace(/_/g, " ").trim()
    let sourceUrl = image.attribs.src.replace(/^https?:\/\//,'');
    return <LazyLoad><img src={'https://cdn.statically.io/img/'+sourceUrl+'?quality=80&f=auto'} srcSet={getSrcSet(image.attribs.srcset)} alt={alt} width={image.attribs.width}/></LazyLoad>;
  }
};
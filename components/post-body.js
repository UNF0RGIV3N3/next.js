import styles from './post-body.module.css'
import LazyLoad from 'react-lazyload'
import parse from 'html-react-parser'
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/gpt'),
  { ssr: false }
)

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <DynamicComponentWithNoSSR />
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
  srcSet.match(/[^"'=\s]+\.(jpe?g|png|gif)/g).forEach(element => {
    element = element.replace(/^https?:\/\//,'');
    srcSet = srcSet.replace(element, 'cdn.statically.io/img/'+element+'?quality=80&f=auto');
  });
  return srcSet
};

var count_p = 0;
const replaceMedia = node => {
  const image = getImage(node);
  if (image != null) {
    let alt = image.attribs.src.split('/')
    alt = alt[alt.length -1].split('.')[0].replace(/-/g, " ").replace(/[0-9]/g, "").replace(/ x/g, "").replace(/ x /g, "").replace(/_/g, " ").trim()
    return <LazyLoad><img src={'https://cdn.statically.io/img/'+image.attribs.src+'?quality=80&f=auto'} srcSet={getSrcSet(image.attribs.srcset)} alt={alt} width={image.attribs.width}/></LazyLoad>;
  }
 /*  if (node.name === 'p'){
    count_p++;
    if ([3, 9, 12, 15].includes(count_p)) {
     return (
    console.log("element", element)
        <DFPSlotsProvider dfpNetworkId="9528481">
          <div className="BOX_TOP-2">
            <AdSlot sizes={[[300,600],[300,400],[300,250],[320,480],[320,50],'fluid']} adUnit="HALFPAGE_IFOOD.IT" />
          </div>
        </DFPSlotsProvider>
     )
    }
  } */
};
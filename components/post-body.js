import styles from './post-body.module.css'
import LazyLoad from 'react-lazyload'
import parse from 'html-react-parser'
import { DFPSlotsProvider, AdSlot } from 'react-dfp';

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
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
var count_p = 0;
const replaceMedia = node => {
  const image = getImage(node);
  if (image != null) {
    let alt = image.attribs.src.split('/')
    alt = alt[alt.length -1].split('.')[0].replace(/-/g, " ").replace(/[0-9]/g, "").replace(/ x/g, "").replace(/ x /g, "").replace(/_/g, " ").trim()
    return <LazyLoad><img src={image.attribs.src} srcSet={image.attribs.srcset} alt={alt} width={image.attribs.width}/></LazyLoad>;
  }
  if (node.name === 'p'){
    count_p++;
    if ([3, 9, 12, 15].includes(count_p)) {
     return (
        <DFPSlotsProvider dfpNetworkId="9528481">
          <div className="BOX_TOP-2">
            <AdSlot sizes={[[300,600],[300,400],[300,250],[320,480],[320,50],'fluid']} adUnit="HALFPAGE_IFOOD.IT" />
          </div>
        </DFPSlotsProvider>
     )
    }
  }
};
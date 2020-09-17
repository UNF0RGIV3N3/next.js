import cn from 'classnames'
import Link from 'next/link'
import LazyLoad from 'react-lazyload'

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

export default function CoverImage({ title, coverImage, slug }) {
  let alt = coverImage?.sourceUrl.split('/')
  alt = alt[alt.length -1].split('.')[0].replace(/-/g, " ").replace(/[0-9]/g, "").replace(/ x/g, "").replace(/ x /g, "").replace(/_/g, " ").trim()
  const image = (
    <LazyLoad>
        <img
          alt = {alt}
          src={'https://cdn.statically.io/img/'+coverImage?.sourceUrl+'?quality=80&f=auto'}
          srcSet={getSrcSet(coverImage?.srcSet)}
          className={cn('shadow-small', {
          'hover:shadow-medium transition-shadow duration-200': slug,
        })}
      />
    </LazyLoad>
    
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

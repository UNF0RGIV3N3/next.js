import cn from 'classnames'
import Link from 'next/link'
import LazyLoad from 'react-lazyload';

export default function CoverImage({ title, coverImage, slug }) {
  let alt = coverImage?.sourceUrl.split('/');
  alt = alt[alt.length -1].split('.')[0].replace(/-/g, " ").replace(/[0-9]/g, "").replace(/ x /g, "").trim()
  const image = (
    <LazyLoad>
        <img
          alt = {alt}
          src={coverImage?.sourceUrl}
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

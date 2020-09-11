import cn from 'classnames'
import Link from 'next/link'
import LazyLoad from 'react-lazyload';

export default function CoverImage({ title, coverImage, slug }) {
  const alt = coverImage?.sourceUrl.split('.')[2].replace(/https:\/\//g, "").split('/');
  const image = (
    <LazyLoad>
        <img
          alt = {alt[alt.length-1].replace(/-/g, " ")}
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

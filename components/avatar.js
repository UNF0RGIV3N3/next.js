import LazyLoad from 'react-lazyload'

export default function Avatar({ author }) {
  const name =
    author.firstName && author.lastName
      ? `${author.firstName} ${author.lastName}`
      : author.name

  return (
    <div className="flex items-center">
      <LazyLoad>
        <img
          src={author.avatar.url}
          className="w-12 h-12 rounded-full mr-4"
          alt={name}
        />
      </LazyLoad>
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}

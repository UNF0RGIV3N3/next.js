import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'
import Categories from '../components/categories'
import { DFPSlotsProvider, AdSlot } from 'react-dfp';


export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories,
}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar author={author} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <DFPSlotsProvider dfpNetworkId="9528481">
          <div className="BOX_TOP_IFOOD">
            <AdSlot 
              sizes={[[300,250],[336,280],[320,480],[300,600],'fluid']} 
              adUnit="BOX_TOP_IFOOD.IT" 
              onSlotRender={eventData => console.log('BOX_TOP_IFOOD rendered!', eventData)} 
            />
          </div>
        </DFPSlotsProvider>
        <CoverImage title={title} coverImage={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar author={author} />
        </div>
        <div className="mb-6 text-lg">
          Posted <Date dateString={date} />
          <Categories categories={categories} />
        </div>
      </div>
    </>
  )
}

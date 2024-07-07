import React from 'react'
import Loading from '../partials/Loading'
import Cards from '../partials/Cards'
import InfiniteScroller from 'react-infinite-scroll-component'




const InfiniteScroll = ({getTrending,hasMore,media}) => {
  return (
    <InfiniteScroller
        dataLength={media.length}
        next={getTrending}
        hasMore={hasMore}
        loader={<Loading />}
      >
        <Cards media={media} />
      </InfiniteScroller>
  )
}

export default InfiniteScroll
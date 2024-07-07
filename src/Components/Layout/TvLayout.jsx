import React, { useEffect, useState } from 'react'
import FilterTrending from '../partials/FilterTrending';
import { Link } from 'react-router-dom';
import Topnav from '../partials/Topnav';
import InfiniteScroll from '../partials/InfiniteScroll';
import instance from '../utils/axios';

const TvLayout = () => {

    const [category, setcategory] = useState('airing_today');
    const [media, setMedia] = useState([])
    const [page, setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true)

    const getTv = async () => {
        try {
            const { data } = await instance.get(`/tv/${category}?page=${page}`)
            if (data.results.length > 0) {
                setMedia((prev) => [...prev, ...data.results])
                setpage(page + 1);
            } else {
                sethasMore(false);
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    const refreshMedia = () => {
        if (media.length === 0) {
            getTv()
        } else {
            setpage(1)
            setMedia([])
            getTv()
        }
    }


    useEffect(() => {
        refreshMedia()
    }, [category])

    return (
        <div className='h-full w-full'>
            <div className="flex px-10 w-full items-center pt-5">
                <Link className='pt-4 shrink-0 flex gap-3 font-semibold text-xl text-zinc-200 items-center' to='/'><i className="ri-arrow-left-line mt-1"></i> Tv Shows</Link>
                <Topnav />
                <div className="options flex gap-5 pt-4">
                    <FilterTrending state={category} setstate={setcategory} title={'Filter'} option={['airing_today', 'on_the_air', 'popular','top_rated']} />
                </div>
            </div>
            <InfiniteScroll getTrending={getTv} hasMore={hasMore} media={media} />
        </div>
    )
}

export default TvLayout
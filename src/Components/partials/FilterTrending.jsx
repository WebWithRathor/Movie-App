import React from 'react'

const FilterTrending = ({title, category, option, setcategory }) => {
    return (
        <div className='flex items-center gap-2'>
            <h1 className='text-white shrink-0 font-semibold'>{title} : </h1>
            <select value={category} onChange={(e) => setcategory(e.target.value)} className='px-2 py-1 capitalize bg-transparent border rounded text-zinc-100 font-semibold' id="">
                {option.map((e, i) => <option key={i} className='text-black bg-violet-200 font-semibold hover:bg-green-100 capitalize' value={e}>{e}</option>)}
            </select>
        </div>
    )
}

export default FilterTrending
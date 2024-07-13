export {removeTvDetails} from '../reducers/tvSlice';
import instance from '../../utils/axios';
import { loadTvDetails } from '../reducers/tvSlice';

export const LoadTvDetails = (series_id)=>async(dispatch , getState)=>{
    const externalIds = (await instance.get(`/tv/${series_id}/external_ids`)).data;
    const details = (await instance.get(`/tv/${series_id}`)).data;
    const video = (await instance.get(`/tv/${series_id}/videos`)).data.results.find(e=>e.type === "Trailer");
    const provider = (((await instance.get(`/tv/${series_id}/watch/providers`)).data).results).IN;
    let similar = ((await instance.get(`/tv/${series_id}/similar`)).data).results;
    similar = [...similar,...((await instance.get(`/tv/${series_id}/recommendations`)).data).results];
    const casts = (await instance.get(`/tv/${series_id}/credits`)).data.cast
    const tv = {externalIds, details,provider,similar,casts,video};
    dispatch(loadTvDetails(tv))
}
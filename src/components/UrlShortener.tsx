import React, { SyntheticEvent, useState } from 'react'
import { ShortUrl } from '../models/ShortUrl'
import { BaseService } from '../service/BaseService'
import './urlShorten.css'

function UrlShortener() {
  const [mainUrl, setMainUrl] = useState('')
  const [short, setShort] = useState<ShortUrl>([])


  const onSubmit = (e:SyntheticEvent) => {
    e.preventDefault();
    
    let baseService = new BaseService();

    baseService.getAll(mainUrl)
    .then(res => {
      console.log(res)
      setShort(res)
    })
  }
  return (
    <div className='url-div'>
        <div className='sub-url-div'>
            <form className='form' onSubmit={onSubmit}> 
                <input onChange={(e) => setMainUrl(e.target.value)} value={mainUrl} type="text" placeholder='Shorten a link here...' />
                <button>Shorten it!</button>
            </form>
        </div>
    </div>
  )
}

export default UrlShortener
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { ShortUrl } from '../models/ShortUrl'
import { BaseService } from '../service/BaseService'
import './urlShorten.css'

function UrlShortener() {
  const [mainUrl, setMainUrl] = useState('')
  const [short, setShort] = useState<ShortUrl[]>([])


  const onSubmit = (e:SyntheticEvent) => {
    e.preventDefault();
    
    let baseService = new BaseService();

    baseService.getAll(mainUrl)
    .then(res => {
      console.log(res.result)
      setShort([...short, {original_link: res.result.original_link,short_link: res.result.full_short_link}])
    })
  }
  

  const copyClipboard=(url:string)=>{
    navigator.clipboard.writeText(url)
  }

  return (
    <div className='url-div'>
        <div className='sub-url-div'>
            <form className='form' onSubmit={onSubmit}> 
                <input onChange={(e) => setMainUrl(e.target.value)} value={mainUrl} type="text" placeholder='Shorten a link here...' />
                <button>Shorten it!</button>
            </form>
            <div>
              {
                short && short.map((urlR:any,i:number) => (
                  <div className='links' key={i}>
                    <p>{urlR.original_link}</p>
                    <p>{urlR.short_link}</p>
                    <button onClick={()=>copyClipboard(urlR.short_link)} className='copyBtn'>Copy</button>
                  </div>
                ))
              }
            </div>
        </div>
    </div>
  )
}

export default UrlShortener
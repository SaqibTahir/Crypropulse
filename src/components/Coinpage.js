import React, { useEffect, useState } from 'react';
import './coinpage.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpWideShort, faArrowDownWideShort } from '@fortawesome/free-solid-svg-icons'

export default function Coinpage(props) {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const { coinid } = useParams();

  let coinkey = `https://api.coingecko.com/api/v3/coins/${coinid}`;

  useEffect(() => {
    axios.get(coinkey)
      .then((response) => {
        setToken(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [coinkey]);
  // capitalize the 1st letter of symbal-------------------------
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  // profit percentage ------------------------------------------
  const calculateProfit = (percentage) => {
    const colorClass = percentage >= 0 ? 'text-success' : 'text-danger';
    return (
      <span className={colorClass}>
        {percentage >= 0 ? `+${percentage.toFixed(2)}%` : `${percentage.toFixed(2)}%`}
      </span>
    );
  };
  // formet like Billion or million ----------------------
  const formatMarketCap = (marketCap) => {
    if (marketCap >= 1e9) {
      return (marketCap / 1e9).toFixed(2) + ' B';
    } else if (marketCap >= 1e6) {
      return (marketCap / 1e6).toFixed(2) + ' M';
    } else {
      return marketCap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  };
  const addCommas = (value) => {
    // Convert the value into commas---------------
    return String(value).replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  return (
    <div className='divmain'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="divone">
          <div className="divtwo">
            <img src={token.image.large} alt="" />
            <div className="divcenter">
              <span className='fs-2 mx-2' style={{ color: props.theme === 'dark' ? 'white' : '' }}> {token.market_cap_rank} </span>
              <span style={{ fontSize: '2rem', color: props.theme === 'dark' ? 'white' : '' }} >{token.name}</span>
              <span style={{ fontSize: '1rem', color: props.theme === 'dark' ? 'white' : '' }}>({capitalizeFirstLetter(token.symbol)})</span>

            </div>
          </div>
          <div className="divthree">
            <span style={{ color: props.theme === 'dark' ? 'white' : '' }}>{token.description.en.split('. ')[0]}</span>
            {/* price----------------- */}
            <div className="divfour">
              <span className='fs-1' style={{ color: props.theme === 'dark' ? 'white' : '' }}> <span style={{ fontSize: '1.7rem', color: props.theme === 'dark' ? 'white' : '' }}>Current Price:  </span>{'$' + formatMarketCap(token.market_data.current_price.usd)}</span>
              <span style={{ color: props.theme === 'dark' ? 'white' : '' }}> {calculateProfit(token.market_data.price_change_percentage_24h)}<span> (1d)</span></span>
            </div>
            <div className="watclist">
              <button className=''> Add To WatchList</button>
            </div>
            {/* market cap----------------- */}
            <div className="divfive" style={{ color: props.theme === 'dark' ? 'white' : '' }}>
              <span className='divwd1 '>Market Cap</span>
              <div className="line "></div>
              <span className='divfont divxtra divwd2 '>{'$' +
                addCommas(token?.market_data?.market_cap?.btc || 'N/A')}  <span className='divcenterfont'> {calculateProfit(token.market_data.market_cap_change_percentage_24h)}</span>
              </span>

            </div>
            {/* total volume----------------- */}
            <div className="divfive" style={{ color: props.theme === 'dark' ? 'white' : '' }}>
              <span className='divwd1 '>Total Volume</span>
              <div className="line col"></div>
              <span className='divfont divwd2 '>{'$' +
                addCommas(token.market_data.total_volume.usd)}</span>

            </div>
            {/* max supply--------------- */}
            <div className="divfive" style={{ color: props.theme === 'dark' ? 'white' : '' }}>
              <span className='divwd1 '>Max Supply</span>
              <div className="line "></div>
              <span className='divfont divwd2 '>{
                addCommas(token.market_data.total_supply)}</span>

            </div>
            {/* circulating supply--------------- */}
            <div className="divfive" style={{ color: props.theme === 'dark' ? 'white' : '' }}>
              <span className='divwd1 '>Circulat Supply</span>
              <div className="line "></div>
              <span className='divfont divwd2 '>{
                addCommas(token.market_data.circulating_supply)}</span>

            </div>
            {/* all time range--------------- */}
            <div className="divsix" style={{ color: props.theme === 'dark' ? 'white' : '' }}>
              <span className='divwd1 '> <FontAwesomeIcon icon={faArrowDownWideShort} style={{ color: '#ffc011' }} /> {
                addCommas(token.market_data.atl.usd) + ' $'}</span>
              <span className=' divwd2 '> <FontAwesomeIcon icon={faArrowUpWideShort} style={{ color: '#ffc011' }} /> {
                addCommas(token.market_data.ath.usd) + ' $'}</span>

            </div>



          </div>

        </div>

      )}
    </div>
  );
}

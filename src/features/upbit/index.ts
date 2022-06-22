import { AxiosRequestConfig } from 'axios'
import { combineLatestWith, from, map } from 'rxjs'

import { CompleteMarketInfo, CustomCandles, MarketDetail } from '../../interface/upbit'
import { apiCall } from '../../libs/api'

function fetchData<T>(config: AxiosRequestConfig<T>): Promise<T> {
 return apiCall<T>(config).then(({ data }) => data)
}

export const upbitWithLmw$ = from(fetchData<MarketDetail[]>({ url: 'https://api.upbit.com/v1/market/all' })).pipe(
 combineLatestWith(
  //   timer(0, 1000 * 10).pipe(
  //   switchMap(() =>
  //   forkJoin({
  //    candles: getCandlesbyMarket<CustomCandles[]>(),
  //   }),
  //   timer(0, 1000 * 60).pipe(switchMap(() => from(getCandlesbyMarket<CustomCandles[]>()))),
  from(
   fetchData<CustomCandles[]>({ url: 'https://api.upbit.com/v1/ticker?markets=KRW-BTC,KRW-ETH,KRW-XRP,KRW-WAVES' }),
  ),
  //   ),
  //   ),
 ),
 map(([markets, candles]) => {
  return candles.reduce((acc, candle) => {
   const market = markets.find((a) => a.market === candle.market)!
   return [...acc, { ...market, ...candle, symbol: 'LMW', isBookmark: false }]
  }, [] as CompleteMarketInfo[])
 }),
)

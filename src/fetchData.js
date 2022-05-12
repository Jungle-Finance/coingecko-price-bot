const dotenv = require('dotenv')
const fetch = require('node-fetch')

dotenv.config()

exports.fetchData = async () => {
  try {
    const tokenData = await (await fetch(`https://api.jungledefi.io/v1/token/${process.env.TOKEN_ID}`)).json()

    const price = tokenData.data.price
    const symbol = process.env.TOKEN_ID.toUpperCase()
    const circSupply = tokenData.data.circulatingSupply

    return { price, symbol, circSupply }
  } catch (err) {
    console.log(err)
    return undefined
  }
}

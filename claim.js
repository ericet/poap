const fs = require('fs')
const axios = require('axios')


const claim_url = 'https://api.poap.xyz/actions/claim-qr'

// helper methods
let synchronous_request = function (url, params) {
  if (params == undefined) {

    return new Promise(function (resolve, reject) {
      axios.get(url).then(res => {
        resolve(res.data);
      }).catch(err => {
        reject(err)
      });
    })
  } else {
    return new Promise(function (resolve, reject) {
      axios.post(url, params).then(res => {
        resolve(res.data);
      }).catch(err => {
        reject(err);
      });
    })
  }
}

//claim poap by qr_hash
async function main() {
  if (process.argv.length < 3) {
    console.log('argv: qr_hash address')
    return
  }

  let a = process.argv[2].split('/')
  let qr_hash = a[a.length - 1]

  let url = claim_url + '?qr_hash=' + qr_hash
  let o = await synchronous_request(url)
  if (o.claimed == false) {
    if (process.argv.length < 4) {
      console.log('node claim qr_hash address')
      return
    }

    let address = process.argv[3]
    if (!address.startsWith('0x')) {
      address = get_real_address(address)
      if (address == undefined) {
        console.log('bad account alias: ' + process.argv[3])
        return
      }
    }

    let body = await synchronous_request(claim_url, {
      qr_hash: o.qr_hash,
      address: address,
      secret: o.secret,
    })

    console.log(body)

    console.log('\n* claimed for ' + process.argv[3])
  } else {
    console.log('\n' + o.beneficiary + ' had claimed this poap')
  }
}

function get_real_address(account_name) {
  let list = fs.readFileSync('address_list.txt')
  let lines = list.toString().split('\r\n')
  for (let index in lines) {
    let line = lines[index]
    let arr = line.split(':')
    if (arr[0] == account_name) return arr[1]
  }

  return undefined
}

main()


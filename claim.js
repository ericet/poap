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
  let addressList = getLines('address_list.txt');
  let claimList = getLines('claim_list.txt');
  for (let claim of claimList) {
    if (claim) {
      let a = claim.split('/');
      let qr_hash = a[a.length - 1];
      let url = claim_url + '?qr_hash=' + qr_hash;
      let o = await synchronous_request(url)
      if (o.claimed == false) {
        for (let address of addressList) {
          await synchronous_request(claim_url, {
            qr_hash: o.qr_hash,
            address: address,
            secret: o.secret,
          }).then(
            res => {
              console.log(`${address} claimed POAP[${o.qr_hash}]`);
            }
          ).catch(err => {
            console.log(`[${address}] ${err.response.data.message} POAP[${o.qr_hash}]`);
          })

        }

      } else {
        console.log(`[${o.beneficiary}] had claimed this POAP[${qr_hash}]`)
      }
    }
  }

}

function getLines(filename) {
  let list = fs.readFileSync(filename)
  let lines = list.toString().split(/\r?\n/)
  return lines;
}

main()


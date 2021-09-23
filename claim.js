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
  let index =0;
  for (let claim of claimList) {
    let a = claim.split('/');
    let qr_hash = a[a.length - 1];
    let url = claim_url + '?qr_hash=' + qr_hash;
    let o = await synchronous_request(url)
    if (o.claimed == false) {
      if(index>=addressList.length){
        return;
      }
      let body = await synchronous_request(claim_url, {
        qr_hash: o.qr_hash,
        address: addressList[index],
        secret: o.secret,
      })

      // console.log(body)

      console.log('\n* claimed for ' + addressList[index]);
      index++;
    } else {
      console.log('\n' + o.beneficiary + ' had claimed this poap')
    }
  }

}

function getLines(filename) {
  let list = fs.readFileSync(filename)
  let lines = list.toString().split('\r\n')
  return lines;
}

main()


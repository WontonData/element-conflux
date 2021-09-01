const {Conflux, sign} = require('js-conflux-sdk');
import confluxPortal from './conflux-portal'

export const conflux = new Conflux({
  url: 'http://test.confluxrpc.org/v2',
  networkId: 1,
  logger: console, // for debug
});

export const InterestTokenFactory = conflux.Contract({
  abi: require("./abi/InterestTokenFactory.json"),
  address: 'cfxtest:accf9dtkkvgh33be9jspt95kvdn2r80veuazn6k0uy'
});

export const DateString = conflux.Contract({
  abi: require("./abi/DateString.json"),
  address: 'cfxtest:aceexxjxcrf9m4fgfpk5rrr23nv2mr5pky72jxzsga'
});

export const TrancheFactory = conflux.Contract({
  abi: require("./abi/TrancheFactory.json"),
  address: 'cfxtest:acgk31mt25khe2mhc6ak60c1u0c49wa5xjjnrrddbv'
  //ByteCode:7a4b34572d88f842f2ddfa78630d39b85cdfb0b711176aa599bf3192b8bd5395
});

export const WCFX = conflux.Contract({
  abi: require("./abi/WCFX.json"),
  address: 'cfxtest:acbbuu2y4k736279c40cabjfwcdfp4y4x66eep7ee1'
});

export const UserProxy = conflux.Contract({
  abi: require("./abi/UserProxy.json"),
  address: 'cfxtest:acfr36z84u1t9km1j3c3ppb0tcas88r5se30k3e8bx'
});

export const ConvergentCurvePool = conflux.Contract({
  abi: require("./abi/ConvergentCurvePool.json"),
  address: 'cfxtest:acd65b7yyuaxbng4949ty41sadxakcc48eszd1hr3r'
});

export const USDA = conflux.Contract({
  abi: require("./abi/USDA.json"),
  address: 'cfxtest:acgfgvhxwfeduu07a6pf6u538aj7at2veasb6fxhu0'
});

export const Yault_xUSDA = conflux.Contract({
  abi: require("./abi/Yault_xUSDA.json"),
  address: 'cfxtest:acav86b6evga8h1vs0v4nhrev326912xspn6trz4gg'
});

export const YVaultAssetProxy = conflux.Contract({
  abi: require("./abi/YVaultAssetProxy.json"),
  address: 'cfxtest:acfkmkfse864y16cn9261y5j2785d75rmeed68hskd'
});

export const eP = conflux.Contract({
  abi: require("./abi/Tranche.json"),
  address: 'cfxtest:acc9k14s6k76wau198gu0yy8wyfe53kdu2cr19tkmv'
});

export const eY = conflux.Contract({
  abi: require("./abi/InterestToken.json"),
  address: 'cfxtest:acegc96nmps0hb7we2zb29d5eth1f5fcv6bu6jwp3j'
});

//"cfxtest:aatjmdpyhmgf1wbe3h4b3m6x7yy7esd0525m76vk3m"
console.log(TrancheFactory)

// .call()
// .then(res => {
//   console.log(res)
// })
// conflux.wallet.addPrivateKey("cfxtest:aatjmdpyhmgf1wbe3h4b3m6x7yy7esd0525m76vk3m")
// console.log(sign.randomPrivateKey()+" ");
// conflux.wallet.addPrivateKey('0x207D3178BD4B15EDF1D6354721591F9E5321ADBC4F421E1D783A1BBD886623E2');
async function eventTest() {

  // const called = this.props.contract[selected.name].call(...params)
  // const result = await confluxPortal.sendTransaction({
  //   from: confluxPortal.getAccount(),
  //   // to: called.to,
  //   data: (
  //     1231414,
  //     'cfxtest:acaerfrd3m80tasx02ghkgwywkerbzdrup0dzt0x9s'
  //   )
  // })

  // const deploy = await TrancheFactory.deployTranche(
  //     1231414,
  //     'cfxtest:acegc96nmps0hb7we2zb29d5eth1f5fcv6bu6jwp3j'
  // ).sendTransaction({
  //   from: "cfxtest:aatjmdpyhmgf1wbe3h4b3m6x7yy7esd0525m76vk3m"
  // }).executed().then(res => {
  //   console.log(res)
  // })
  // console.log(result)
  //     .then(res => {
  //   console.log(res)
  // })

  // TrancheFactory.TrancheCreated().watch(function(error, result) {
  //   if (!error)
  //   {
  //     console.log(result)
  //   } else {
  //     console.log(error);
  //   }
  // });
}

eventTest();

async function main() {
  // use conflux to get balance (in Drip) of a conflux address
  const address = 'cfxtest:aatjmdpyhmgf1wbe3h4b3m6x7yy7esd0525m76vk3m';
  const balance = await conflux.getBalance(address);
  console.log(balance);
  // const account = conflux.wallet.addPrivateKey('0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef');

  const TrancheFactory = conflux.Contract({
    abi: require("./abi/TrancheFactory.json"),
    address: 'cfxtest:acc8skess5tg8eg9zuvmuj8vxysgca0w9uvtgjmkzn'
  });

  console.log();

  const data = await TrancheFactory.getData()
  // DonateFactory.charities(2).call()
  TrancheFactory.getData().call()
      .then(res => {
        console.log(res)
      })
  console.log(data.toString());

}

// main();


export default {
  conflux,
  InterestTokenFactory,
  DateString,
  TrancheFactory,
  WCFX,
  UserProxy,
  ConvergentCurvePool,
  USDA,
  Yault_xUSDA,
  YVaultAssetProxy
}